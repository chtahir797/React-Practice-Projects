import { useState, useEffect } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      const isDarkMode = savedMode === "true";
      setDarkMode(isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
  };

  return (
    <button
      onClick={handleToggle}
      className={` fixed top-1 right-1.5 p-2 rounded-md transition-colors duration-300 ${
        darkMode ? "bg-indigo-600 text-gray-200" : "bg-indigo-500 text-white"
      } hover:bg-indigo-700 dark:hover:bg-indigo-700`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkMode;
