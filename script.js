// Language translations
const translations = {
    en: {
        "welcome": "Welcome, Commuter",
        "quickActions": "Quick Actions",
        "schedule": "Schedule",
        "help": "Help",
        "planJourney": "Plan Your Journey",
        "from": "From",
        "to": "To",
        "departure": "Departure Time",
        "searchRoutes": "🔍 Search Routes",
        "fareCalc": "Fare Calculator",
        "fareFrom": "From",
        "fareTo": "To",
        "fareType": "Bus Type",
        "fareBtn": "Estimate Fare",
        "liveTracking": "Live Bus Tracking",
        "liveUpdates": "Live Updates",
        "recentTrips": "Recent Trips",
        "scheduleModalTitle": "Bus Schedule",
        "scheduleComingSoon": "Schedule feature coming soon.",
        "helpModalTitle": "Help",
        "helpContactText": "For any queries or complaints, contact: <b>6290813559</b>"
    },
    hi: {
        "welcome": "स्वागत है, यात्री",
        "quickActions": "त्वरित क्रियाएँ",
        "schedule": "समय सारणी",
        "help": "सहायता",
        "planJourney": "अपनी यात्रा की योजना बनाएं",
        "from": "से",
        "to": "तक",
        "departure": "प्रस्थान समय",
        "searchRoutes": "🔍 मार्ग खोजें",
        "fareCalc": "किराया कैलकुलेटर",
        "fareFrom": "से",
        "fareTo": "तक",
        "fareType": "बस प्रकार",
        "fareBtn": "किराया अनुमानित करें",
        "liveTracking": "लाइव बस ट्रैकिंग",
        "liveUpdates": "लाइव अपडेट्स",
        "recentTrips": "हाल की यात्राएँ",
        "scheduleModalTitle": "बस समय सारणी",
        "scheduleComingSoon": "समय सारणी सुविधा जल्द आ रही है।",
        "helpModalTitle": "सहायता",
        "helpContactText": "किसी भी प्रश्न या शिकायत के लिए संपर्क करें: <b>6290813559</b>"
    },
    pa: {
        "welcome": "ਸੁਆਗਤ ਹੈ, ਯਾਤਰੀ",
        "quickActions": "ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ",
        "schedule": "ਸਮਾਂ-ਸੂਚੀ",
        "help": "ਮਦਦ",
        "planJourney": "ਆਪਣੀ ਯਾਤਰਾ ਦੀ ਯੋਜਨਾ ਬਣਾਓ",
        "from": "ਤੋਂ",
        "to": "ਵੱਲ",
        "departure": "ਰਵਾਨਗੀ ਸਮਾਂ",
        "searchRoutes": "🔍 ਰੂਟ ਲੱਭੋ",
        "fareCalc": "ਕਿਰਾਇਆ ਕੈਲਕੁਲੇਟਰ",
        "fareFrom": "ਤੋਂ",
        "fareTo": "ਵੱਲ",
        "fareType": "ਬੱਸ ਕਿਸਮ",
        "fareBtn": "ਕਿਰਾਇਆ ਅੰਦਾਜ਼ਾ ਲਵੋ",
        "liveTracking": "ਲਾਈਵ ਬੱਸ ਟ੍ਰੈਕਿੰਗ",
        "liveUpdates": "ਲਾਈਵ ਅੱਪਡੇਟਸ",
        "recentTrips": "ਹਾਲੀਆ ਯਾਤਰਾਵਾਂ",
        "scheduleModalTitle": "ਬੱਸ ਸਮਾਂ-ਸੂਚੀ",
        "scheduleComingSoon": "ਸਮਾਂ-ਸੂਚੀ ਫੀਚਰ ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ।",
        "helpModalTitle": "ਮਦਦ",
        "helpContactText": "ਕਿਸੇ ਵੀ ਸਵਾਲ ਜਾਂ ਸ਼ਿਕਾਇਤ ਲਈ ਸੰਪਰਕ ਕਰੋ: <b>6290813559</b>"
    }
};
let currentLang = 'en';
function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');
    document.getElementById('welcome-text').textContent = translations[lang].welcome;
    document.getElementById('quick-actions-title').textContent = translations[lang].quickActions;
    document.getElementById('schedule-label').textContent = translations[lang].schedule;
    document.getElementById('help-label').textContent = translations[lang].help;
    document.getElementById('plan-journey-title').textContent = translations[lang].planJourney;
    document.getElementById('from-label').textContent = translations[lang].from;
    document.getElementById('to-label').textContent = translations[lang].to;
    document.getElementById('departure-label').textContent = translations[lang].departure;
    document.getElementById('search-routes-btn').textContent = translations[lang].searchRoutes;
    document.getElementById('fare-calc-title').textContent = translations[lang].fareCalc;
    document.getElementById('fare-from-label').textContent = translations[lang].fareFrom;
    document.getElementById('fare-to-label').textContent = translations[lang].fareTo;
    document.getElementById('fare-type-label').textContent = translations[lang].fareType;
    document.getElementById('fare-calc-btn').textContent = translations[lang].fareBtn;
    document.getElementById('live-tracking-title').textContent = translations[lang].liveTracking;
    document.getElementById('live-updates-label').textContent = translations[lang].liveUpdates;
    document.getElementById('recent-trips-title').textContent = translations[lang].recentTrips;
    document.getElementById('schedule-modal-title').textContent = translations[lang].scheduleModalTitle;
    document.getElementById('schedule-coming-soon').textContent = translations[lang].scheduleComingSoon;
    document.getElementById('help-modal-title').textContent = translations[lang].helpModalTitle;
    document.getElementById('help-contact-text').innerHTML = translations[lang].helpContactText;
}
document.addEventListener('DOMContentLoaded', function() {
    setLang('en');
    const now = new Date();
    document.getElementById('departure-time').value = now.toTimeString().slice(0, 5);
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    setInterval(updateLiveTracking, 30000);
});
// Show/hide bus loader
function showBusLoader() {
    document.getElementById('bus-loader').style.display = 'flex';
}
function hideBusLoader() {
    document.getElementById('bus-loader').style.display = 'none';
}
function searchRoutes() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    if (!from || !to) {
        showNotification('Please enter both source and destination', 'error');
        return;
    }
    showBusLoader();
    setTimeout(() => {
        hideBusLoader();
        const results = document.getElementById('route-results');
        results.style.display = 'block';
        const routes = [
            {
                number: '335E',
                duration: '45 min',
                transfers: 0,
                steps: [
                    'Board at ' + from,
                    'Travel via Bannerghatta Road',
                    'Alight at ' + to
                ]
            },
            {
                number: '201 → G-4',
                duration: '52 min',
                transfers: 1,
                steps: [
                    'Board Route 201 at ' + from,
                    'Transfer at Silk Board Junction',
                    'Board Route G-4',
                    'Alight at ' + to
                ]
            }
        ];
        results.innerHTML = routes.map(route => `
            <div class="route-card">
                <div class="route-header">
                    <div class="route-info">
                        <div class="route-badge">${route.number}</div>
                        <div class="time-info">
                            <strong>${route.duration}</strong>
                            ${route.transfers > 0 ? ` • ${route.transfers} transfer(s)` : ' • Direct'}
                        </div>
                    </div>
                </div>
                <div class="route-steps">
                    ${route.steps.map((step, index) => `
                        <div class="step-icon">${index + 1}</div>
                        <div style="flex: 1;">${step}</div>
                    `).join('')}
                </div>
            </div>
        `).join('');
        showNotification('Routes found successfully!');
    }, 1200);
}
function calculateFare() {
    const from = document.getElementById('fare-from').value.trim();
    const to = document.getElementById('fare-to').value.trim();
    const type = document.getElementById('fare-type').value;
    if (!from || !to) {
        document.getElementById('fare-result').textContent = "Please enter both source and destination.";
        return;
    }
    let base = 10, perKm = 2;
    if (type === 'ac') { base = 20; perKm = 3; }
    if (type === 'volvo') { base = 30; perKm = 4; }
    let distance = Math.max(3, Math.abs(from.length - to.length) + 5);
    let fare = base + perKm * distance;
    document.getElementById('fare-result').textContent = `Estimated Fare: ₹${fare} (${distance} km)`;
}
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}
function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
function toggleProfileMenu() {
    showNotification('Profile menu clicked');
}
function showNotification(msg, type) {
    const notification = document.getElementById('notification');
    notification.textContent = msg;
    notification.style.background = type === 'error' ? '#ef4444' : '#22c55e';
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 2500);
}
function updateLiveTracking() {
    const busItems = document.querySelectorAll('.bus-item');
    busItems.forEach(item => {
        const etaElement = item.querySelector('.eta');
        let currentEta = parseInt(etaElement.textContent);
        if (currentEta > 1) {
            currentEta -= 1;
            etaElement.textContent = currentEta + ' min';
        }
    });
}
function getLocation() {
    const gpsResult = document.getElementById('gps-result');
    const gpsMap = document.getElementById('gps-map');
    gpsResult.textContent = "Fetching location...";
    gpsMap.innerHTML = "";
    showBusLoader();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            hideBusLoader();
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            gpsResult.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
            const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.01}%2C${lat-0.01}%2C${lon+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat}%2C${lon}`;
            gpsMap.innerHTML = `<iframe width="100%" height="250" frameborder="0" scrolling="no" src="${mapUrl}" style="border-radius:10px;"></iframe>`;
        }, function(error) {
            hideBusLoader();
            gpsResult.textContent = "Unable to retrieve your location.";
        });
    } else {
        hideBusLoader();
        gpsResult.textContent = "Geolocation is not supported by this browser.";
    }
}