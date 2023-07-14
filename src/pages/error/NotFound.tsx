import FlexContainer from "components/ui/layout/FlexContainer";
import { Box, styled, Typography } from "@mui/material";
import useThemeStore from "store/useTheme.store";

const NotFoundBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
`;

const NotFound = () => {
  const theme = useThemeStore((state: { theme: any }) => state.theme);
  console.log(theme);
  return (
    <FlexContainer sx={{ justifyContent: "center", alignItems: "center" }}>
      <NotFoundBox>
        <Typography variant={"h1"} color={"error"}>
          404
        </Typography>
        <Typography variant={"h3"}>Page not found</Typography>
      </NotFoundBox>
    </FlexContainer>
  );
};

export default NotFound;
