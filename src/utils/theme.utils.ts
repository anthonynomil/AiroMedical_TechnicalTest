/**
 * Get theme from local storage
 * @returns {string} theme
 * @example
 * getTheme(); // => "dark"
 * getTheme(); // => "light"
 */

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme === "dark" || theme === "light" ? theme : "light";
};

export default getTheme;
