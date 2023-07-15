import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import ThemeButton from "components/ui/buttons/ThemeButton";

const AppBarBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

/**
 * Appbar
 * @description Appbar is the top bar of the app.
 * @returns {JSX.Element} Appbar
 * @constructor
 */

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppBarBox>
            <Typography variant={"h6"} sx={{ userSelect: "none" }}>
              AiroMedical Test
            </Typography>
            <ThemeButton />
          </AppBarBox>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
