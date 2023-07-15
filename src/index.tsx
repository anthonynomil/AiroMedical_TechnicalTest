import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import useThemeStore from "store/useTheme.store";
import { RouterProvider } from "react-router-dom";
import router from "router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = createRoot(document.getElementById("root")!);

const Root = () => {
  const themeStore = useThemeStore((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode: themeStore,
    },
  });

  return (
    // <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    // </StrictMode>
  );
};

root.render(<Root />);
