"use client";

import React, { useEffect } from "react";

import { navLinks } from "@constants";
import { LogoPlaceholder } from "@layouts";

const Header: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 px-8 py-4 bg-white/30 backdrop-blur-none">
      <div className="flex items-center justify-between w-full">
        <LogoPlaceholder />
        <nav aria-label="Main navigation" className="flex-1 flex justify-center">
          <ul className="text-lg font-medium list-none flex gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-cyan-600 transition focus:outline-none focus:text-cyan-700 capitalize no-underline"
                  onClick={e => {
                    const targetId = href.startsWith('#') ? href.slice(1) : null;
                    if (targetId) {
                      e.preventDefault();
                      const el = document.getElementById(targetId);

                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="ml-6 px-5 py-2 rounded-full bg-cyan-600 text-white font-semibold flex items-center gap-2 hover:bg-cyan-700 transition cursor-pointer"
          onClick={e => {
            e.preventDefault();
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Us
          <span className="inline-block align-middle">
            <svg className="w-4 h-4 text-white group-hover:text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
