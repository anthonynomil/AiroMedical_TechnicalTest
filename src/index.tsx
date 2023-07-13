import { createRoot } from "react-dom/client";
import Home from "pages/Home";
import { StrictMode } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import useThemeStore from "store/useTheme.store";

const root = createRoot(document.getElementById("root")!);

const Root = () => {
  const themeStore = useThemeStore((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode: themeStore,
    },
  });

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </StrictMode>
  );
};

root.render(<Root />);
