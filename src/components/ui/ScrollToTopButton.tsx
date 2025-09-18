"use client";
import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("services");
      if (serviceSection) {
        setShow(window.scrollY >= serviceSection.offsetTop - 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 bg-cyan-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-cyan-700 transition"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
