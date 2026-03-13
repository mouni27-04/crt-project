// =============================================
// App.jsx — Root Component with Routing & Theme
// =============================================

import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import Categories from './pages/Categories';

// ---- Theme Context ----
export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// ---- Animated Routes Wrapper ----
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </AnimatePresence>
  );
}

// ---- Root App ----
export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('blogspace-theme') || 'light';
  });

  // Apply theme to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('blogspace-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}
