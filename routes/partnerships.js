const express = require('express');
const router = express.Router();
const xlsx = require('xlsx');
const path = require('path');

// Load all sheets from UoB_Agreements.xlsx
const workbook = xlsx.readFile(path.join(__dirname, '../data/UoB_Agreements.xlsx'));
const sheetNames = workbook.SheetNames;

const agreementsData = sheetNames.flatMap(sheetName =>
  xlsx.utils.sheet_to_json(workbook.Sheets[sheetName])
);

// GET /api/partnerships - Get all partnerships
router.get('/', (req, res) => {
  res.json(agreementsData);
});

// GET /api/partnerships/academic - Get academic partnerships
router.get('/academic', (req, res) => {
  const academic = agreementsData
    .filter(a => a["Agreement Type"] && a["Agreement Type"].toLowerCase().includes('academic'))
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(academic);
});

// GET /api/partnerships/research - Get research partnerships
router.get('/research', (req, res) => {
  const research = agreementsData
    .filter(a => a["Agreement Type"] && a["Agreement Type"].toLowerCase().includes('research'))
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(research);
});

// GET /api/partnerships/mou - Get MOU partnerships
router.get('/mou', (req, res) => {
  const mou = agreementsData
    .filter(a => a["Agreement Type"] && a["Agreement Type"].toLowerCase().includes('mou'))
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(mou);
});

// GET /api/partnerships/by-country/:country - Get partnerships by country
router.get('/by-country/:country', (req, res) => {
  const country = req.params.country;
  const filtered = agreementsData
    .filter(a => a["Country"] === country)
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(filtered);
});

// GET /api/partnerships/by-partner-type/:type - Get partnerships by partner type
router.get('/by-partner-type/:type', (req, res) => {
  const type = req.params.type;
  const filtered = agreementsData
    .filter(a => a["Partner Type"] === type)
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(filtered);
});

// GET /api/partnerships/by-sdg/:sdg - Get partnerships by Primary SDG
router.get('/by-sdg/:sdg', (req, res) => {
  const sdg = req.params.sdg;
  const filtered = agreementsData
    .filter(a => {
      const primarySDG = a["Primary SDG"] || '';
      const secondarySDGs = a["Secondary SDG(s)"] || '';
      return primarySDG.includes(sdg) || secondarySDGs.includes(sdg);
    })
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(filtered);
});

// GET /api/partnerships/active - Get active partnerships (no end date or future end date)
router.get('/active', (req, res) => {
  const today = new Date();
  const active = agreementsData
    .filter(a => {
      if (!a["End Date"]) return true; // No end date means active
      const endDate = new Date(a["End Date"]);
      return endDate >= today;
    })
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(active);
});

// GET /api/partnerships/expired - Get expired partnerships
router.get('/expired', (req, res) => {
  const today = new Date();
  const expired = agreementsData
    .filter(a => {
      if (!a["End Date"]) return false;
      const endDate = new Date(a["End Date"]);
      return endDate < today;
    })
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(expired);
});

// GET /api/partnerships/by-focus/:focus - Get partnerships by focus area
router.get('/by-focus/:focus', (req, res) => {
  const focus = req.params.focus.toLowerCase();
  const filtered = agreementsData
    .filter(a => {
      const focusArea = (a["Focus Area"] || '').toLowerCase();
      return focusArea.includes(focus);
    })
    .sort((a, b) => (a["Partner Institution"] || '').localeCompare(b["Partner Institution"] || ''));
  res.json(filtered);
});

// GET /api/partnerships/stats - Get statistics
router.get('/stats', (req, res) => {
  const stats = {
    total: agreementsData.length,
    countries: [...new Set(agreementsData.map(a => a["Country"]).filter(Boolean))].length,
    partnerTypes: [...new Set(agreementsData.map(a => a["Partner Type"]).filter(Boolean))].length,
    agreementTypes: [...new Set(agreementsData.map(a => a["Agreement Type"]).filter(Boolean))].length,
    totalStudentsExchanged: agreementsData.reduce((sum, a) => sum + (parseInt(a["Number of Students Exchanged"]) || 0), 0),
    totalFacultyExchanged: agreementsData.reduce((sum, a) => sum + (parseInt(a["Number of Faculty Exchanged"]) || 0), 0),
    totalJointPrograms: agreementsData.reduce((sum, a) => sum + (parseInt(a["Number of Joint Programs"]) || 0), 0),
    byCountry: {},
    byPartnerType: {},
    byAgreementType: {},
    bySupportingQS: {
      yes: agreementsData.filter(a => a["Supports QS Ranking"] === 'Yes' || a["Supports QS Ranking"] === 'yes').length,
      no: agreementsData.filter(a => a["Supports QS Ranking"] === 'No' || a["Supports QS Ranking"] === 'no').length
    },
    bySupportingGreenMetric: {
      yes: agreementsData.filter(a => a["Supports UI GreenMetric"] === 'Yes' || a["Supports UI GreenMetric"] === 'yes').length,
      no: agreementsData.filter(a => a["Supports UI GreenMetric"] === 'No' || a["Supports UI GreenMetric"] === 'no').length
    }
  };

  // Count by country
  agreementsData.forEach(a => {
    if (a["Country"]) {
      stats.byCountry[a["Country"]] = (stats.byCountry[a["Country"]] || 0) + 1;
    }
    if (a["Partner Type"]) {
      stats.byPartnerType[a["Partner Type"]] = (stats.byPartnerType[a["Partner Type"]] || 0) + 1;
    }
    if (a["Agreement Type"]) {
      stats.byAgreementType[a["Agreement Type"]] = (stats.byAgreementType[a["Agreement Type"]] || 0) + 1;
    }
  });

  res.json(stats);
});

// GET /api/partnerships/countries - Get list of all countries
router.get('/countries', (req, res) => {
  const countries = [...new Set(agreementsData.map(a => a["Country"]).filter(Boolean))].sort();
  res.json(countries);
});

// GET /api/partnerships/:id - Get specific partnership by Record ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const partnership = agreementsData.find(a => a["Record ID"] == id);
  
  if (partnership) {
    res.json(partnership);
  } else {
    res.status(404).json({ error: 'Partnership not found' });
  }
});

module.exports = router;