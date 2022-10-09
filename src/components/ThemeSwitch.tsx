import { useState, useEffect } from "react";

import '../styles/switch.css';

function matchTheme(matches: boolean) {
  const pageRoot = document.querySelector("html");

  if (!!pageRoot) {
    pageRoot.className = matches ? "dark" : "light";
  }
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(false);

  const changeColorScheme = () => {
    matchTheme(!darkMode);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", (event) => setDarkMode(event.matches));

    return () => matchMedia.removeEventListener("change", (event) => setDarkMode(event.matches));
  }, []);

  return (
    <button onClick={changeColorScheme} type="button" className="theme-switch">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>
  );
}

export default ThemeSwitch;
