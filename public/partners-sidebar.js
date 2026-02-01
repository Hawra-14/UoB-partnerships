// Partnerships data
const partnershipsData = [
    {
        id: 'kfupm',
        name: 'King Fahd University of Petroleum & Minerals',
        country: 'Saudi Arabia',
        flag: '🇸🇦',
        region: 'middle-east',
        type: 'academic',
        agreementType: 'Academic Exchange & Joint Research',
        startDate: 'January 2015',
        renewalDate: 'January 2028',
        focusAreas: 'Engineering, Petroleum Studies, Technology',
        description: 'Comprehensive partnership enabling student and faculty exchange programs, collaborative research in petroleum engineering, and joint degree programs. Annual exchange of 15-20 students with full academic credit transfer.',
        metrics: {
            studentsExchanged: '120+',
            publications: '8',
            programs: '3'
        },
        lat: 26.3099,
        lng: 50.1370
    },
    {
        id: 'manchester',
        name: 'University of Manchester',
        country: 'United Kingdom',
        flag: '🇬🇧',
        region: 'europe',
        type: 'dual-degree',
        agreementType: 'Dual Degree & Research Partnership',
        startDate: 'September 2012',
        renewalDate: 'September 2027',
        focusAreas: 'Business, Computer Science, Life Sciences',
        description: 'Strategic alliance offering dual degree programs where students earn degrees from both institutions. Includes faculty exchange, joint PhD supervision, and collaborative research initiatives in emerging technologies.',
        metrics: {
            dualDegrees: '45',
            jointProjects: '12',
            exchangePrograms: '5'
        },
        lat: 53.4668,
        lng: -2.2339
    },
    {
        id: 'mit',
        name: 'Massachusetts Institute of Technology (MIT)',
        country: 'United States',
        flag: '🇺🇸',
        region: 'north-america',
        type: 'research',
        agreementType: 'Research Collaboration Agreement',
        startDate: 'March 2018',
        renewalDate: 'March 2026',
        focusAreas: 'AI, Robotics, Sustainable Energy, Materials Science',
        description: 'Research-focused partnership concentrating on cutting-edge technology and innovation. Joint laboratories, funded research projects, and access to MIT\'s advanced research facilities for UoB faculty and graduate students.',
        metrics: {
            activeProjects: '15',
            funding: '$2.5M',
            publications: '25'
        },
        lat: 42.3601,
        lng: -71.0589
    },
    {
        id: 'nus',
        name: 'National University of Singapore',
        country: 'Singapore',
        flag: '🇸🇬',
        region: 'asia',
        type: 'academic',
        agreementType: 'Student & Faculty Exchange',
        startDate: 'August 2016',
        renewalDate: 'August 2026',
        focusAreas: 'Business, Engineering, Public Policy',
        description: 'Student mobility program with semester and year-long exchange options. Focus on business administration, engineering, and interdisciplinary programs. Includes summer school programs and joint workshops.',
        metrics: {
            studentsExchanged: '85',
            summerPrograms: '4',
            facultyVisits: '10'
        },
        lat: 1.2966,
        lng: 103.7764
    },
    {
        id: 'sorbonne',
        name: 'Sorbonne University',
        country: 'France',
        flag: '🇫🇷',
        region: 'europe',
        type: 'mou',
        agreementType: 'Memorandum of Understanding',
        startDate: 'May 2014',
        renewalDate: 'May 2029',
        focusAreas: 'Humanities, Languages, Cultural Studies',
        description: 'Cultural and academic partnership promoting French language education, humanities exchange, and collaborative research in literature and social sciences. Includes visiting professor programs and joint conferences.',
        metrics: {
            facultyExchanges: '30',
            conferences: '6',
            studentsParticipated: '50+'
        },
        lat: 48.8566,
        lng: 2.3522
    },
    {
        id: 'uaeu',
        name: 'United Arab Emirates University',
        country: 'United Arab Emirates',
        flag: '🇦🇪',
        region: 'middle-east',
        type: 'joint-research',
        agreementType: 'Joint Research & Academic Cooperation',
        startDate: 'January 2017',
        renewalDate: 'January 2027',
        focusAreas: 'Renewable Energy, Water Resources, Agriculture',
        description: 'Regional collaboration focusing on Gulf-specific challenges including water scarcity, sustainable agriculture, and renewable energy solutions. Joint research centers and shared laboratory facilities.',
        metrics: {
            jointProjects: '18',
            funding: '$1.8M',
            publications: '32'
        },
        lat: 24.4539,
        lng: 54.3773
    },
    {
        id: 'utokyo',
        name: 'University of Tokyo',
        country: 'Japan',
        flag: '🇯🇵',
        region: 'asia',
        type: 'academic',
        agreementType: 'Academic Exchange & Cultural Programs',
        startDate: 'April 2015',
        renewalDate: 'April 2025 (Under Review)',
        focusAreas: 'Engineering, Natural Sciences, Japanese Studies',
        description: 'Exchange program with focus on engineering and science fields. Cultural immersion components and Japanese language training. Currently under renewal discussions to expand program scope.',
        metrics: {
            studentsExchanged: '42',
            workshops: '3',
            facultyExchanges: '8'
        },
        lat: 35.6762,
        lng: 139.6503
    },
    {
        id: 'tum',
        name: 'Technical University of Munich',
        country: 'Germany',
        flag: '🇩🇪',
        region: 'europe',
        type: 'research',
        agreementType: 'Research Partnership & PhD Programs',
        startDate: 'October 2019',
        renewalDate: 'October 2029',
        focusAreas: 'Automotive Engineering, AI, Sustainable Technology',
        description: 'Advanced research collaboration in engineering and technology. Joint PhD programs, research internships, and access to specialized laboratories. Focus on Industry 4.0 and smart manufacturing.',
        metrics: {
            phdStudents: '12',
            researchProjects: '7',
            publications: '18'
        },
        lat: 48.1351,
        lng: 11.5820
    },
    {
        id: 'sydney',
        name: 'University of Sydney',
        country: 'Australia',
        flag: '🇦🇺',
        region: 'oceania',
        type: 'academic',
        agreementType: 'Student Exchange & Study Abroad',
        startDate: 'February 2020',
        renewalDate: 'February 2030',
        focusAreas: 'Medicine, Health Sciences, Marine Biology',
        description: 'Comprehensive exchange program offering semester and year-long opportunities. Special focus on health sciences and medical research. Study abroad programs with cultural orientation and academic support.',
        metrics: {
            studentsExchanged: '35',
            studyAbroadPrograms: '2',
            workshops: '5'
        },
        lat: -33.8688,
        lng: 151.2093
    },
    {
        id: 'qatar',
        name: 'Qatar University',
        country: 'Qatar',
        flag: '🇶🇦',
        region: 'middle-east',
        type: 'mou',
        agreementType: 'Memorandum of Understanding',
        startDate: 'September 2018',
        renewalDate: 'September 2028',
        focusAreas: 'Gulf Studies, Education, Social Sciences',
        description: 'Regional partnership promoting Gulf cooperation in higher education. Joint conferences, faculty exchange, and collaborative research on regional development and social issues specific to Gulf countries.',
        metrics: {
            facultyVisits: '25',
            conferences: '8',
            activities: '40+'
        },
        lat: 25.2854,
        lng: 51.5310
    },
    {
        id: 'auc',
        name: 'American University in Cairo',
        country: 'Egypt',
        flag: '🇪🇬',
        region: 'africa',
        type: 'academic',
        agreementType: 'Academic Cooperation & Exchange',
        startDate: 'January 2016',
        renewalDate: 'January 2026',
        focusAreas: 'Middle Eastern Studies, Business, Arts',
        description: 'Academic partnership focusing on regional studies and cultural exchange. Student mobility programs, faculty collaboration, and joint research on Middle Eastern history and contemporary issues.',
        metrics: {
            studentsExchanged: '55',
            programs: '4',
            facultyExchanges: '12'
        },
        lat: 30.0444,
        lng: 31.2357
    },
    {
        id: 'snu',
        name: 'Seoul National University',
        country: 'South Korea',
        flag: '🇰🇷',
        region: 'asia',
        type: 'dual-degree',
        agreementType: 'Dual Degree & Research Partnership',
        startDate: 'March 2021',
        renewalDate: 'March 2031',
        focusAreas: 'Electronics, Computer Science, Relations',
        description: 'Innovative dual degree program in engineering and technology fields. Students spend time at both institutions, earning recognized degrees from each. Includes research opportunities and industry connections in South Korea\'s tech sector.',
        metrics: {
            dualDegrees: '22',
            jointProjects: '6',
            exchangePrograms: '3'
        },
        lat: 37.5665,
        lng: 126.9780
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('countriesSidebar')) return;

    let map;
    let markers = [];
    let filteredPartnerships = [...partnershipsData];

    // Initialize map
    initializeMap();
    
    // Build sidebar
    buildSidebar();
    
    // Update stats
    updateStatistics();
    
    // Setup event listeners
    setupFilters();
    setupMapToggle();

    function initializeMap() {
        map = L.map('partnershipMap', {
            center: [26.0667, 50.5577],
            zoom: 2,
            minZoom: 2,
            maxZoom: 18,
            worldCopyJump: false,
            maxBounds: [[-90, -100], [90, 100]],
            maxBoundsViscosity: 1.0
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            maxZoom: 18,
            noWrap: true
        }).addTo(map);

        addMarkers();
        
        setTimeout(() => map.invalidateSize(), 250);
    }

    function getMarkerColor(type) {
        const colors = {
            'academic': '#003f7f',
            'research': '#2a9d8f',
            'dual-degree': '#9b59b6',
            'mou': '#f77f00',
            'joint-research': '#e74c3c'
        };
        return colors[type] || '#003f7f';
    }

    function addMarkers() {
        markers = [];
        partnershipsData.forEach(partnership => {
            const color = getMarkerColor(partnership.type);
            const icon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker([partnership.lat, partnership.lng], { icon }).addTo(map);
            marker.bindPopup(`<div style="text-align: center; padding: 5px;"><strong style="color: #003f7f;">${partnership.name}</strong><br><span style="color: #666;">📍 ${partnership.country}</span></div>`);
            
            marker.on('click', () => {
                showPartnershipDetail(partnership.id);
            });

            markers.push({ marker, partnership });
        });
    }

    function buildSidebar() {
        const sidebar = document.getElementById('countriesSidebar');
        const groupedByCountry = {};

        filteredPartnerships.forEach(p => {
            if (!groupedByCountry[p.country]) {
                groupedByCountry[p.country] = [];
            }
            groupedByCountry[p.country].push(p);
        });

        const sortedCountries = Object.keys(groupedByCountry).sort();
        
        sidebar.innerHTML = sortedCountries.map(country => {
            const partnerships = groupedByCountry[country];
            const flag = partnerships[0].flag;
            
            return `
                <div class="country-group">
                    <div class="country-header">
                        <span class="country-flag">${flag}</span>
                        <span class="country-name">${country}</span>
                        <span class="country-count">${partnerships.length} Agreement${partnerships.length > 1 ? 's' : ''}</span>
                    </div>
                    <div class="partnerships-list">
                        ${partnerships.map(p => `
                            <div class="partnership-item" data-id="${p.id}" onclick="showPartnershipDetail('${p.id}')">
                                <div class="partnership-name">${p.name}</div>
                                <div class="partnership-type-badge badge-${p.type}">${formatType(p.type)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    function formatType(type) {
        const types = {
            'academic': 'Academic Exchange',
            'research': 'Research',
            'dual-degree': 'Dual Degree',
            'mou': 'MOU',
            'joint-research': 'Joint Research'
        };
        return types[type] || type;
    }

    window.showPartnershipDetail = function(id) {
        const partnership = partnershipsData.find(p => p.id === id);
        if (!partnership) return;

        // Highlight selected item
        document.querySelectorAll('.partnership-item').forEach(el => el.classList.remove('active'));
        document.querySelector(`[data-id="${id}"]`)?.classList.add('active');

        const detailContainer = document.getElementById('partnershipDetail');
        detailContainer.innerHTML = `
            <div class="detail-header">
                <div class="detail-flag">${partnership.flag}</div>
                <div class="detail-title-section">
                    <h2>${partnership.name}</h2>
                    <p class="detail-country">📍 ${partnership.country}</p>
                </div>
            </div>

            <div class="detail-section">
                <h3>Foreign Partners</h3>
                <div class="detail-info-row">
                    <span class="info-label">Institution</span>
                    <span class="info-value">${partnership.name}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Country</span>
                    <span class="info-value">${partnership.country}</span>
                </div>
            </div>

            <div class="detail-section">
                <h3>Agreements</h3>
                <div class="detail-info-row">
                    <span class="info-label">Agreement Name</span>
                    <span class="info-value">${partnership.name} - ${formatType(partnership.type)}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Partner Institution</span>
                    <span class="info-value">${partnership.name}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Agreement Type</span>
                    <span class="info-value">${partnership.agreementType}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Start Date</span>
                    <span class="info-value">${partnership.startDate}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Renewal Date</span>
                    <span class="info-value">${partnership.renewalDate}</span>
                </div>
                <div class="detail-info-row">
                    <span class="info-label">Focus Areas</span>
                    <span class="info-value">${partnership.focusAreas}</span>
                </div>
            </div>

            <div class="detail-section">
                <h3>Description</h3>
                <p class="detail-description">${partnership.description}</p>
            </div>

            <div class="detail-metrics">
                ${Object.entries(partnership.metrics).map(([key, value]) => `
                    <div class="metric-box">
                        <div class="metric-value">${value}</div>
                        <div class="metric-label">${formatMetricLabel(key)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    };

    function formatMetricLabel(key) {
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    function setupFilters() {
        const searchInput = document.getElementById('searchInput');
        const regionFilter = document.getElementById('regionFilter');
        const typeFilter = document.getElementById('typeFilter');
        const resetButton = document.getElementById('resetFilters');

        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedRegion = regionFilter.value;
            const selectedType = typeFilter.value;

            filteredPartnerships = partnershipsData.filter(p => {
                const matchesSearch = searchTerm === '' || 
                    p.name.toLowerCase().includes(searchTerm) || 
                    p.country.toLowerCase().includes(searchTerm);
                const matchesRegion = selectedRegion === 'all' || p.region === selectedRegion;
                const matchesType = selectedType === 'all' || p.type === selectedType;

                return matchesSearch && matchesRegion && matchesType;
            });

            buildSidebar();
            updateStatistics();
            updateMapMarkers();
        }

        searchInput.addEventListener('input', applyFilters);
        regionFilter.addEventListener('change', applyFilters);
        typeFilter.addEventListener('change', applyFilters);
        resetButton.addEventListener('click', () => {
            searchInput.value = '';
            regionFilter.value = 'all';
            typeFilter.value = 'all';
            applyFilters();
        });
    }

    function updateMapMarkers() {
        markers.forEach(({ marker, partnership }) => {
            if (filteredPartnerships.includes(partnership)) {
                if (!map.hasLayer(marker)) marker.addTo(map);
            } else {
                map.removeLayer(marker);
            }
        });
    }

    function updateStatistics() {
        const countries = new Set(filteredPartnerships.map(p => p.country)).size;
        const relations = filteredPartnerships.length;
        const programmes = new Set(filteredPartnerships.map(p => p.type)).size;

        document.getElementById('countriesCount').textContent = countries;
        document.getElementById('relationsCount').textContent = relations;
        document.getElementById('programmesCount').textContent = programmes;
    }

    function setupMapToggle() {
        const toggle = document.getElementById('showMapToggle');
        const mapSection = document.querySelector('.map-section');

        toggle?.addEventListener('change', function() {
            if (this.checked) {
                mapSection.style.display = 'block';
                setTimeout(() => map.invalidateSize(), 100);
            } else {
                mapSection.style.display = 'none';
            }
        });
    }
});