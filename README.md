park-js
sem-2 practice
🅿️ ParkJS - Smart Parking Location Tracker

> Never forget where you parked your car again! 🚗

ParkJS is a modern, responsive web application that helps users save and manage their parking locations with GPS coordinates, color-coded zones, and Google Maps integration.

📸 Screenshots

Add screenshots here showing the main interface, history page, and mobile view

✨ Features

🎯 Core Functionality

- 📍 GPS Location Tracking - Automatically saves your exact parking coordinates
- 🎨 Color-Coded Zones - Organize parking by color (Red, Blue, Green, Yellow, Orange)
- 📝 Section & Number Tracking - Record specific parking section and space number
- 📚 Complete History - View all previously saved parking locations
- 🗺️ Google Maps Integration - One-click navigation to your parked car

🛠️ Management Features

- 🗑️ Individual Deletion - Remove specific parking records
- 🧹 Bulk Clear - Clear entire parking history
- 📱 Mobile Responsive - Works perfectly on phones, tablets, and desktops
- 💾 Local Storage - Data persists between browser sessions
- ⚡ Real-time Updates - Instant feedback and location saving

🎨 User Experience

- Modern UI Design - Clean, intuitive interface with Bootstrap 5
- Gradient Backgrounds - Beautiful visual design
- Emoji Icons - User-friendly navigation and visual cues
- Smooth Animations - Enhanced user interactions
- Loading States - Clear feedback during operations

🚀 Quick Start

Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (recommended: Live Server VS Code extension)
- Location permission for GPS functionality

Installation

1. Clone the repository

   ```bash
   git clone https://github.com/dharmik097/park-js.git
   cd park-js
   ```

2. Launch the application

   ```bash
    Using Live Server (VS Code Extension)
    Right-click on index.html → "Open with Live Server"

    OR using Python (if installed)
   python -m http.server 3000

    OR using Node.js (if installed)
   npx serve .
   ```

3. Open in browser
   ```
   http://localhost:3000
   ```

📱 Usage Guide

Saving a Parking Location

1. Open the app and navigate to the Home page
2. Select a Color zone from the dropdown
3. Enter the Section (e.g., "A", "North", "Level 2")
4. Enter the Number (parking space number)
5. Click "Save Parking Location"
6. Allow location access when prompted
7. ✅ Your location is saved with GPS coordinates!

Viewing Your Last Location

1. Click "🅿️ Show Place" in navigation
2. View your most recent parking location
3. Click "🗺️ View on Google Maps" to navigate

Managing History

1. Click "📚 History" in navigation
2. View all saved parking locations
3. Use "🗑️ Delete" to remove individual entries
4. Use "🧹 Clear All History" to remove everything

📁 Project Structure

```
park-js/
│
├── index.html                  Main parking form page
├── README.md                   Project documentation
│
├── about/
│   └── index.html             About page with project info
│
├── place/
│   └── index.html             Show last parking location
│
├── history/
│   └── index.html             Complete parking history
│
├── includes/
│   ├── header.html            Navigation header
│   └── footer.html            Page footer
│
├── js/
│   └── index.js               Main application logic
│
├── styles/
│   └── style.css              Custom styling and animations
│
└── images/
    └── park.png               Application logo/icon
```

🛠️ Technologies Used

Frontend

- HTML5 - Semantic markup and structure
- CSS3 - Modern styling with gradients and animations
- JavaScript (ES6+) - Interactive functionality and logic
- Bootstrap 5 - Responsive design framework
- jQuery - DOM manipulation and AJAX requests

APIs & Services

- Geolocation API - GPS coordinate tracking
- Local Storage API - Client-side data persistence
- Google Maps - Location visualization and navigation

Development Tools

- VS Code - Development environment
- Live Server - Local development server
- Git - Version control

🎓 Academic Information

Course: Advanced Web Programming (AWP)  
Institution: METSW (Metropolitan School of Technology and Web)  
Semester: 2nd Semester  
Project Type: Practice Assignment

Learning Objectives Covered

- ✅ HTML5 semantic elements and forms
- ✅ CSS3 responsive design and animations
- ✅ JavaScript event handling and local storage
- ✅ API integration (Geolocation, Maps)
- ✅ Modern web development practices
- ✅ User experience design principles

📊 Project Statistics

- 📄 Pages: 5 HTML files
- 💻 Code Lines: 500+ lines
- 🎯 Features: 10+ key functionalities
- 📱 Responsive: 100% mobile-friendly
- ⚡ Performance: Fast loading and smooth interactions

🔧 Browser Compatibility

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 60+     | ✅ Full |
| Firefox | 55+     | ✅ Full |
| Safari  | 11+     | ✅ Full |
| Edge    | 79+     | ✅ Full |

🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📝 Future Enhancements

- [ ] 🌐 PWA Support - Offline functionality
- [ ] 📊 Analytics Dashboard - Parking statistics
- [ ] 🔄 Data Export - CSV/JSON export options
- [ ] 🎯 Nearby Search - Find parking near current location
- [ ] ⏰ Time Tracking - Parking duration tracking
- [ ] 💳 Payment Integration - Parking fee management

📄 License

This project is part of an academic assignment for educational purposes.

📧 Contact & Support

Developer: Student Developer  
Email: student@metsw.edu  
GitHub: [@dharmik097](https://github.com/dharmik097)  
Project Link: [https://github.com/dharmik097/park-js](https://github.com/dharmik097/park-js)

🙏 Acknowledgments

- METSW Faculty - Guidance and curriculum
- Bootstrap Team - Responsive framework
- Google - Maps and Geolocation APIs
- MDN Web Docs - Technical documentation
- Stack Overflow Community - Problem-solving support

---

🅿️ Built with ❤️ for METSW Advanced Web Programming
