# 🚕 Royal Transfers - Luxury Taxi Service Website

A modern, responsive frontend website for Royal Transfers luxury taxi and airport transfer services. Built with React.js and Tailwind CSS, featuring a professional design and smooth user experience.

## ✨ Features

### 🎯 Core Functionality
- **Online Booking System** - Interactive booking form with pickup/drop-off locations
- **Service Showcase** - Comprehensive display of available taxi services
- **City Coverage** - Information about service areas across the UK
- **Responsive Design** - Mobile-first approach with modern UI/UX

### 🚗 Vehicle Types
- **Economy** - Budget-friendly option for 3 passengers
- **Estate** - Spacious vehicle for 4 passengers with luggage
- **Executive** - Premium service for business travelers
- **MPV** - Multi-purpose vehicle for groups
- **Minibus** - Large capacity for up to 8 passengers

### 🌍 Service Areas
- **London** - Central London and Heathrow Airport
- **Reading** - Berkshire region
- **Milton Keynes** - Buckinghamshire
- **Manchester** - Greater Manchester area
- **Birmingham** - West Midlands

### 🎨 Design Features
- **Smooth Scrolling Navigation** - Seamless page navigation
- **Dynamic Navbar** - Transparent to solid background transition
- **Mobile Responsive** - Optimized for all device sizes
- **Modern UI Components** - Professional and clean design
- **Interactive Elements** - Hover effects and smooth transitions

## 🛠️ Technology Stack

### Frontend
- **React.js 19.1.0** - Modern React with latest features
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Vite 7.0.4** - Fast build tool and development server

### Dependencies
- **React Router DOM 7.8.0** - Client-side routing
- **React Icons 5.5.0** - Icon library
- **Lucide React 0.539.0** - Modern icon set
- **React Scroll 1.9.3** - Smooth scrolling functionality

### Development Tools
- **ESLint 9.30.1** - Code quality and consistency
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd royal-transfers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint for code quality

## 📁 Project Structure

```
royal-transfers-website/
├── public/                 # Static assets
├── src/
│   ├── Components/         # Reusable UI components
│   │   ├── About/         # About page components
│   │   ├── CarTypes.jsx   # Vehicle type showcase
│   │   ├── City.jsx       # Service area display
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Hero.jsx       # Landing section
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Terms.jsx      # Terms & conditions
│   ├── Pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   └── About.jsx      # About page
│   ├── assets/            # Images and media
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1c1536` - Main brand color
- **Accent Gold**: `#d9b66c` - Highlight and CTA elements
- **Neutral Gray**: `#1a1919` - Background and text
- **White**: `#ffffff` - Content backgrounds

### Typography
- **Font Family**: System fonts with fallbacks
- **Headings**: Bold, large text for hierarchy
- **Body Text**: Readable, medium weight for content

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Rounded-full design with hover effects
- **Forms**: Clean input fields with focus states
- **Navigation**: Smooth transitions and responsive design

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- **Mobile**: Optimized for small screens (320px+)
- **Tablet**: Responsive layout for medium screens (768px+)
- **Desktop**: Full-featured experience for large screens (1024px+)

## 🔧 Customization

### Adding New Vehicle Types
Edit `src/Components/CarTypes.jsx` to add new vehicle options:
```jsx
const cars = [
  {
    name: "NEW_VEHICLE",
    rating: 5,
    passenger: 4,
    large: 3,
    small: 1,
    image: "path/to/image.png",
  },
  // ... existing vehicles
];
```

### Adding New Service Areas
Update `src/Components/City.jsx` to include new cities:
```jsx
const cities = [
  {
    name: "NEW_CITY",
    image: "path/to/city-image.png",
  },
  // ... existing cities
];
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is private and proprietary to Royal Transfers.

## 📞 Contact

- **Phone**: +44 20 8004 9990
- **Email**: info@royaltransfers.co.uk
- **Address**: 450 Bath Road Heathrow Longford UB7 0EB

## 🙏 Acknowledgments

- Built with React.js and Tailwind CSS
- Icons from React Icons and Lucide React
- Design inspiration from modern taxi service websites

---

**Royal Transfers** - Your Journey Begins with Royal Transfers 🚕✨
