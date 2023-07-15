import useThemeStore, {TTheme} from "store/useTheme.store";
import {IconButton} from "@mui/material";
import {Brightness4Rounded, Brightness7Rounded} from "@mui/icons-material";

/**
 * ThemeButton
 *
 * @description ThemeButton is a button that toggles the theme of the app.
 * @returns {JSX.Element} ThemeButton
 */

const ThemeButton = () => {
  const theme: TTheme = useThemeStore((state: { theme: any }) => state.theme);
  const setTheme = useThemeStore((state: { setTheme: any }) => state.setTheme);

  const toggleTheme = () => {
    const newTheme: TTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <IconButton
      sx={{ padding: 2, margin: 1 }}
      onClick={() => toggleTheme()}
      color="inherit"
    >
      {theme === "dark" ? <Brightness7Rounded /> : <Brightness4Rounded />}
    </IconButton>
  );
};

export default ThemeButton;
