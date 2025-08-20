"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-gray-900/80 backdrop-blur-md shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center z-50 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className="text-xl font-bold text-white">
      <Link href="home">MyLogo</Link>  
      </div>
      <ul className="flex gap-6">
        <li>
          <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="resume" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Resume Builder
          </Link>
        </li>
        <li>
          <Link href="playground" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            Playground
          </Link>
        </li>
        <li>
          <Link href="sign-in" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}