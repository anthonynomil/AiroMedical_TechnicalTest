import {Container, styled} from "@mui/material";

/**
 * FlexContainer
 *
 * A Container styled component that uses the full height,
 * it also uses display flex and flex-direction column to achieve this.
 */

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default FlexContainer;
