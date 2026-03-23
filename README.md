# CircuitTrix 2026 - Tech Innovation Event Website

A high-impact, futuristic tech event website built with Next.js and TailwindCSS.

## 🎯 Project Overview

CircuitTrix is a cutting-edge event website featuring:
- **Futuristic Design**: Dark mode with neon cyan, electric blue, and purple accents
- **Circuit Board Aesthetics**: Animated particle networks, glowing lines, and tech grids
- **Smooth Animations**: Micro-interactions, scroll-based motion, and hover effects
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Modern Tech Stack**: Next.js 14, React 18, TailwindCSS 3.4

## 🚀 Features

### Sections
- **Hero Section**: Animated particle network with canvas, stats, and CTAs
- **About**: Innovation-focused cards with hover effects
- **Competition Tracks**: 6 different tech tracks with prize pools
- **Schedule**: 3-day timeline with color-coded events
- **Registration**: Interactive form with validation
- **Rules & Guidelines**: Categorized competition rules
- **Sponsors**: Tiered sponsor showcase
- **Contact**: Contact info and quick message form
- **Footer**: Comprehensive navigation and newsletter signup

### Design Elements
- Circuit board background patterns
- Glowing neon effects and shadows
- Animated gradient text
- Smooth scroll navigation
- Interactive cards with 3D transforms
- Custom fonts: Orbitron, Inter, JetBrains Mono

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: TailwindCSS 3.4
- **Fonts**: Google Fonts (Orbitron, Inter, JetBrains Mono)
- **Animation**: CSS3 Animations + Canvas API

## 📁 Project Structure

```
CircuitTrixWeb/
├── app/
│   ├── globals.css          # TailwindCSS + Custom Styles
│   ├── layout.jsx           # Root Layout with SEO
│   └── page.jsx             # Main Homepage
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx       # Sticky Navigation
│   ├── Hero/
│   │   └── Hero.jsx         # Hero with Particle Animation
│   ├── About/
│   │   └── About.jsx        # About Section
│   ├── Tracks/
│   │   └── Tracks.jsx       # Competition Tracks
│   ├── Schedule/
│   │   └── Schedule.jsx     # Event Timeline
│   ├── Register/
│   │   └── Register.jsx     # Registration Form
│   ├── Rules/
│   │   └── Rules.jsx        # Rules & Guidelines
│   ├── Sponsors/
│   │   └── Sponsors.jsx     # Sponsor Showcase
│   ├── Contact/
│   │   └── Contact.jsx      # Contact Section
│   └── Footer/
│       └── Footer.jsx       # Footer
├── tailwind.config.js       # Tailwind Configuration
├── postcss.config.js        # PostCSS Configuration
├── next.config.js           # Next.js Configuration
└── package.json             # Dependencies
```

## 🎨 Custom Tailwind Theme

### Colors
- **Primary Backgrounds**: `#0a0e17`, `#0f1419`, `#141923`, `#1a1f2e`
- **Neon Accents**: Cyan (`#00ffff`), Electric Blue (`#0084ff`), Purple (`#b026ff`)
- **Text**: Primary (`#ffffff`), Secondary (`#a8b2d1`), Tertiary (`#6b7a99`)

### Custom Utilities
- Glow shadows for cyan, blue, and purple
- Gradient animations
- Slide-up and fade-in animations
- Circuit line animations

## 🔧 Build & Deploy

### Production Build
```bash
npm run build
npm run start
```

### Deployment
Deploy to Vercel, Netlify, or any Next.js-compatible hosting platform.

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 1280px

## 🎭 Performance Optimizations

- Server-side rendering with Next.js
- Optimized fonts loading
- Efficient CSS with TailwindCSS purging
- Canvas-based animations for smooth performance
- Lazy loading of sections

## 📄 License

© 2026 CircuitTrix. All rights reserved.

## 🤝 Contributing

This is an event website project. For queries, contact info@circuittrix.com

---

**Built with ⚡ and 💻 for CircuitTrix 2026**