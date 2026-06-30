# 🌍 Travel Recommendation Website

A modern, interactive travel recommendation platform that helps users discover amazing destinations and travel tips based on their preferences.

## 📸 Live Demo
**[View Live Demo](https://a422789.github.io/travel-recommendation-website/)**

---

## ✨ Features

- **🔍 Destination Search** - Search and filter destinations by country or keyword
- **📍 Detailed Recommendations** - Comprehensive information about each destination with descriptions
- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Pure HTML/JavaScript (no dependencies) for instant loading
- **🎯 User-Friendly Interface** - Intuitive navigation and clean UI/UX
- **📧 Contact Form** - Direct communication channel for inquiries
- **ℹ️ About Page** - Learn more about the platform and team

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Data Storage:** JSON API (`travel_recommendation_api.json`)
- **Hosting:** GitHub Pages
- **Tools:** VS Code

---

## 📂 Project Structure

```
travel-recommendation-website/
├── index.html                      # Main landing page
├── about_us.html                   # About page
├── contact_us.html                 # Contact page
├── travel_recommendation.js        # Core functionality & search logic
├── travel_recommendation_api.json  # Destination data
├── tom-barrett-unsplash.jpg       # Hero image
└── .vscode/                       # VS Code settings
```

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build process required

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/A422789/travel-recommendation-website.git
   cd travel-recommendation-website
   ```

2. **Open in browser:**
   ```bash
   # Simple HTTP server (Python 3)
   python -m http.server 8000
   
   # Or use Live Server in VS Code
   ```

3. **Visit:** `http://localhost:8000`

---

## 💻 Usage

### Search for Destinations
1. Enter a country name or destination keyword in the search bar
2. Click "Search" to filter results
3. Browse the recommended destinations
4. Click on any destination to see full details

### Explore Pages
- **Home** - Browse all featured destinations
- **About** - Learn about the platform
- **Contact** - Get in touch with inquiries

---

## 📊 Data Structure

The `travel_recommendation_api.json` contains destinations organized by country:

```json
{
  "countries": [
    {
      "name": "Country Name",
      "destinations": [
        {
          "name": "Destination",
          "description": "Details...",
          "imageUrl": "path/to/image.jpg"
        }
      ]
    }
  ]
}
```

---

## 🎨 Key Functions (JavaScript)

- **`searchDestinations()`** - Filters destinations based on user input
- **`displayDestinations()`** - Renders destination cards dynamically
- **`handleSearch()`** - Event handler for search functionality
- **`clearSearch()`** - Resets search and shows all destinations

---

## 🔄 Future Enhancements

- [ ] Backend integration (Node.js/Express)
- [ ] Database migration (MongoDB)
- [ ] User authentication & saved favorites
- [ ] Rating and review system
- [ ] Advanced filtering (price, season, activities)
- [ ] API integration (weather, exchange rates)
- [ ] Multi-language support
- [ ] Dark theme option

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Ahmed**
- GitHub: [@A422789](https://github.com/A422789)
- Portfolio: [Your Portfolio](#)

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests for improvements.

---

## 📧 Contact

For questions or suggestions, please use the contact form on the website or reach out via GitHub Issues.

---

**Last Updated:** June 2026
