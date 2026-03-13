# BlogSpace — React Blog List Application

A premium blog listing web application built with **React + Vite**, featuring a modern editorial design, dark/light mode, category filtering, search, and smooth animations with Framer Motion.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
blog-list-website/
│
├── public/
│   ├── index.html
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with search & theme toggle
│   │   ├── Hero.jsx          # Featured blog hero section
│   │   ├── BlogCard.jsx      # Animated blog post card
│   │   ├── Footer.jsx        # Site footer with newsletter
│   │   └── SearchBar.jsx     # Inline search input component
│   │
│   ├── pages/
│   │   ├── Home.jsx          # Main landing page with blog grid
│   │   ├── BlogDetails.jsx   # Full article view with social share
│   │   └── Categories.jsx    # Browse by category page
│   │
│   ├── data/
│   │   └── blogs.js          # Sample blog data (12 full articles)
│   │
│   ├── styles/
│   │   └── main.css          # Global styles & CSS variables
│   │
│   ├── App.jsx               # Root with routing & theme context
│   └── main.jsx              # Entry point
│
├── vite.config.js
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Navbar** | Logo, nav links, search overlay, dark/light mode, mobile hamburger |
| **Hero** | Full-screen featured article with parallax-like zoom |
| **Blog Grid** | Responsive 3-col card layout, hover animations |
| **Category Filter** | One-click filter with animated active state |
| **Search** | Real-time title/author/tag search with overlay |
| **Blog Details** | Full article, social share, bookmark, related posts |
| **Dark Mode** | Full CSS variable-based theme, persisted in localStorage |
| **Animations** | Framer Motion page transitions, card fade-in, hero zoom |
| **Pagination** | "Load More" button with remaining count |
| **Responsive** | Fluid layout for desktop, tablet, mobile |

---

## 🎨 Design System

- **Typography**: Playfair Display (headings) + DM Sans (body)
- **Theme**: Warm editorial palette — cream/forest green/amber
- **Animations**: Framer Motion with staggered reveals
- **Approach**: CSS custom properties for seamless light/dark switching

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11",     // Animations & page transitions
  "react-router-dom": "^6",   // Client-side routing
  "react-icons": "^5"         // Icon library (Feather icons)
}
```
