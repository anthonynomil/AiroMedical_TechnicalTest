const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme === "dark" || theme === "light" ? theme : "light";
};

export default getTheme;
