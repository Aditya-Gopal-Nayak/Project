import { useState, useEffect } from "react";

export function ThemeToggle() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(prefersDark);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#1a202c"; 
      document.body.style.color = "#ffffff"; 
    } else {
      document.body.style.backgroundColor = "#ffffff"; 
      document.body.style.color = "#000000"; 
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="">
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: isDark ? "#4A5568" : "#E2E8F0",
          color: isDark ? "#ffffff" : "#000000",
          padding: "10px 20px",
          borderRadius: "8px",
        }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
