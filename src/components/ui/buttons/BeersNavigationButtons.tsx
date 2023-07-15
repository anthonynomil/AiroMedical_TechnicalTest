import { Box, IconButton } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

const BeersNavigationButtons = ({
  back,
  forward,
  backVisible = true,
  forwardVisible = true,
}: any) => {
  return (
    <Box
      position={"fixed"}
      bottom={window.innerHeight / 2}
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      {backVisible ? (
        <IconButton onClick={back} sx={{ ml: 3 }}>
          <ArrowBackRounded />
        </IconButton>
      ) : (
        <Box />
      )}
      {forwardVisible ? (
        <IconButton onClick={forward} sx={{ mr: 3 }}>
          <ArrowForwardRounded />
        </IconButton>
      ) : (
        <Box />
      )}
    </Box>
  );
};

export default BeersNavigationButtons;
