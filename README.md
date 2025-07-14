# 📈 S&P 500 Stock Dashboard

<div align="center">

![S&P 500 Dashboard](https://img.shields.io/badge/S%26P%20500-Dashboard-blue?style=for-the-badge&logo=chart.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite)


**A professional, real-time stock market dashboard featuring S&P 500 companies with live data integration, interactive charts, and comprehensive market analytics.**

[🚀 Live Demo](https://candid-basbousa-eb06a9.netlify.app)
</div>

---

## 🌟 Features

<table>
<tr>
<td width="50%">

### 📊 **Real-Time Data**
- Live stock prices from multiple APIs
- Real-time market updates every 30 seconds
- Fallback to mock data when APIs are unavailable
- Smart API rate limit management

### 🎨 **Beautiful UI/UX**
- Modern, responsive design
- Smooth animations and micro-interactions
- Professional color-coded performance indicators
- Mobile-first responsive layout

</td>
<td width="50%">

### 📈 **Advanced Analytics**
- Interactive mini sparkline charts
- Multiple timeframe analysis (1D, 5D, 1M, 6M, 1Y, 5Y)
- Market summary with gainers/losers breakdown
- Real-time search and filtering

### ⚡ **Performance Optimized**
- Pure CSS (no external CSS frameworks)
- Optimized API calls with intelligent caching
- Lazy loading and efficient re-renders
- Production-ready build configuration

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm  package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sp500-dashboard.git

# Navigate to project directory
cd sp500-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### 🔑 API Configuration

The dashboard supports multiple data sources for maximum reliability:

<details>
<summary><strong>🔧 API Setup Guide</strong></summary>

#### Alpha Vantage (Recommended)
1. Sign up at [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. Get your free API key (25 requests/day)
3. Update `src/config/apiConfig.js`:

```javascript
ALPHA_VANTAGE: {
  apiKey: "YOUR_ALPHA_VANTAGE_KEY"
}
```

#### Polygon.io (High Performance)
1. Register at [Polygon.io](https://polygon.io/)
2. Get your API key (5 requests/minute free tier)
3. Update the configuration:

```javascript
POLYGON: {
  apiKey: "YOUR_POLYGON_KEY"
}
```

</details>

---

## 📱 Screenshots

<div align="center">

### Desktop View
<img width="1919" height="1079" alt="Screenshot 2025-07-14 230312" src="https://github.com/user-attachments/assets/db1cdc5b-63df-46f9-8c93-5f36a9e80d8d" />


### Mobile View
![mobileview](https://github.com/user-attachments/assets/05c4079f-53b1-4ca5-8cfe-50f642ca4f05)



</div>

---

## 🏗️ Architecture

```
src/
├── 📁 components/          # React components
│   ├── Dashboard.jsx       # Main dashboard container
│   ├── StockTable.jsx      # Data table with sorting
│   ├── MarketSummary.jsx   # Market statistics
│   ├── MiniSparkline.jsx   # Chart components
│   └── ...
├── 📁 services/           # API integration layer
│   └── apiService.js      # Multi-provider API client
├── 📁 utils/              # Utility functions
│   └── stockUtils.js      # Data formatting helpers
├── 📁 data/               # Static data
│   └── sp500Companies.js  # S&P 500 company list
└── 📁 config/             # Configuration
    └── apiConfig.js       # API endpoints & keys
```

---

## 🛠️ Built With

<div align="center">

| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white) | Frontend Framework | 18.3.1 |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Build Tool | 5.4.8 |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Programming Language | ES2022 |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Styling | Pure CSS |
| ![Lucide](https://img.shields.io/badge/-Lucide-000000?style=flat-square&logo=lucide&logoColor=white) | Icons | 0.344.0 |

</div>

---


## 🚀 Deployment

### Netlify (Recommended)
```bash
# Build for production
npm run build

# Deploy to Netlify
# The build folder will be automatically deployed
```

### Manual Deployment
```bash
# Create production build
npm run build

# Serve the dist folder using any static hosting service
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

<details>
<summary><strong>📋 Contribution Guidelines</strong></summary>

### Development Setup
```bash
# Fork the repository
# Clone your fork
git clone https://github.com/yourusername/sp500-dashboard.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit your changes
git commit -m 'Add some amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request
```

### Code Style
- Use ESLint configuration provided
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic

### Testing
```bash
# Run linting
npm run lint

# Build test
npm run build
```

</details>

---

## 📈 Roadmap

- [ ] **Phase 1**: Portfolio tracking functionality
- [ ] **Phase 2**: Advanced charting with TradingView integration
- [ ] **Phase 3**: Real-time alerts and notifications
- [ ] **Phase 4**: Machine learning price predictions
- [ ] **Phase 5**: Mobile app development

---

## 🐛 Known Issues

- API rate limits may cause temporary fallback to mock data
- Some mobile browsers may experience minor layout shifts
- Historical data accuracy depends on API provider

---

## 🙏 Acknowledgments

- **Alpha Vantage** for providing free stock market APIs
- **Polygon.io** for high-quality financial data
- **Lucide React** for beautiful, consistent icons
- **React Community** for excellent documentation and support

---

## 📞 Support

<div align="center">

**Need help?** We're here for you!

[![Email](https://img.shields.io/badge/Email-Support-blue?style=for-the-badge&logo=gmail)](mailto:piseshrihari@gmail.com)


</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by Shrihari Pise(https://github.com/shrihari_18)

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=yourusername.sp500-dashboard)

</div>
