// Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Smooth scroll function for same page navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setMenuOpen(false);
  };

  // Handle navigation - either scroll on same page or navigate to home and scroll
  const handleNavigation = (sectionId) => {
    if (location.pathname === '/') {
      // On home page, just scroll
      scrollToSection(sectionId);
    } else {
      // On other pages, navigate to home and scroll
      window.location.href = `/#${sectionId}`;
    }
    setMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY > heroHeight - 80) {
      setIsScrolled(true); // scrolled past home
    } else {
      setIsScrolled(false); // still in hero/home
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Data = { name: "Abdul", loggedIn: true };
      resolve(Data);
    }, 2000); // 2 second delay
  });
};
useEffect(() => {
  fetchUserData()
    .then((data) => {
      console.log("Fetched user data:", data);
      alert(`Name: ${data.name}\nLogged In: ${data.loggedIn}`);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);



  

  return (
    <nav className={`w-full fixed top-0 z-50 px-6 py-4 transition-all duration-300 ${
  isScrolled
    ? "bg-[#0f1d2ecc] backdrop-blur-md shadow-md"
    : "bg-transparent"
}`}>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
          <img
            src="https://www.airportlondonuktaxi.co.uk/_next/static/media/logo.8517b473.svg"
            alt="Royals"
            className="ml-10 h-[60px]"
          /></Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a onClick={() => handleNavigation('home')} className="text-white cursor-pointer">Home</a>
          <a onClick={() => handleNavigation('cartypes')} className="text-white cursor-pointer">Car Types</a>
          <a onClick={() => handleNavigation('cities')} className="text-white cursor-pointer">Cities</a>
      { /*  <Link to="/about" className="text-white">About</Link> */}
          <a onClick={() => handleNavigation('Terms')} className="text-white cursor-pointer">T&C</a>

        </div>

        
        {/* Button */}
<div className="hidden md:block">
  <a href="#footer"> 
    <button className="bg-[#d9b66c] text-white px-6 py-2 rounded-full font-medium">
      Get in Touch
    </button>
  </a>
</div>


        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
       <div className="md:hidden mt-2 px-4 py-4 space-y-4 font-medium bg-[#0f1d2ecc] rounded-b-lg flex flex-col">
        <a onClick={() => handleNavigation('home')} className="text-white cursor-pointer">Home</a>
          <a onClick={() => handleNavigation('cartypes')} className="text-white cursor-pointer">Car Types</a>
          <a onClick={() => handleNavigation('cities')} className="text-white cursor-pointer">Cities</a>
        
          <Link to="/about" className="text-white">About</Link>
          <a onClick={() => handleNavigation('Terms')} className="text-white cursor-pointer">T&C</a>
          <button className="bg-[#d9b66c] text-white px-6 py-2 rounded-full block w-full text-center font-medium">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}
