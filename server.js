const express = require('express');
const XLSX = require('xlsx');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Serve static files from 'public' directory
app.use(express.static('public'));

// API endpoint for partnerships
app.get('/api/partnerships', (req, res) => {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile(path.join(__dirname, 'data', 'UoB_Agreements.xlsx'));
        
        // Get the Agreements Master Sheet
        const sheetName = 'Agreements Master Sheet';
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert to JSON
        const data = XLSX.utils.sheet_to_json(worksheet);
        
        res.json(data);
    } catch (error) {
        console.error('Error reading partnerships Excel file:', error);
        res.status(500).json({ error: 'Failed to load partnerships data' });
    }
});

// API endpoint for leaders
app.get('/api/leaders', (req, res) => {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile(path.join(__dirname, 'data', 'UoB_Agreements.xlsx'));
        
        // Get the Leaders info sheet
        const sheetName = 'Leaders info';
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert to JSON
        const data = XLSX.utils.sheet_to_json(worksheet);
        
        res.json(data);
    } catch (error) {
        console.error('Error reading leaders Excel file:', error);
        res.status(500).json({ error: 'Failed to load leaders data' });
    }
});

// API endpoint to get leaders with their partnership counts
app.get('/api/leaders-with-partnerships', (req, res) => {
    try {
        // Read the Excel file
        const workbook = XLSX.readFile(path.join(__dirname, 'data', 'UoB_Agreements.xlsx'));
        
        // Get leaders data
        const leadersSheet = workbook.Sheets['Leaders info'];
        const leaders = XLSX.utils.sheet_to_json(leadersSheet);
        
        // Get partnerships data
        const partnershipsSheet = workbook.Sheets['Agreements Master Sheet'];
        const partnerships = XLSX.utils.sheet_to_json(partnershipsSheet);
        
        // Add partnership count to each leader
        const leadersWithCounts = leaders.map(leader => {
            const partnershipCount = partnerships.filter(p => 
                p['Implementing Unit'] === leader['Implementing Unit']
            ).length;
            
            // Get list of partnerships
            const leaderPartnerships = partnerships.filter(p => 
                p['Implementing Unit'] === leader['Implementing Unit']
            );
            
            return {
                ...leader,
                partnershipCount,
                partnerships: leaderPartnerships
            };
        });
        
        res.json(leadersWithCounts);
    } catch (error) {
        console.error('Error loading leaders with partnerships:', error);
        res.status(500).json({ error: 'Failed to load data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});