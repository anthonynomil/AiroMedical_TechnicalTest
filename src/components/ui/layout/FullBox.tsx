import {Box, styled} from "@mui/material";

/**
 * FullBox
 *
 * A Box styled component that takes up the full height and width of the screen.
 * This is useful for creating layouts that take up the full screen.
 * It uses display flex and flex-direction column to achieve this.
 *
 */
const FullBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

export default FullBox;
