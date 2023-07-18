import {Box, styled} from "@mui/material";

/**
 * CenterBox
 * @description CenterBox is a Box that centers its children.
 * @returns {JSX.Element} CenterBox
 * @constructor
 */
const CenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default CenterBox;
