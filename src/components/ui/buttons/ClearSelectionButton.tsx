import { Button, styled } from "@mui/material";
import useBeersStore from "store/useBeers.store";

const ClearSelectionButtonStyled = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 110px;
`;

const ClearSelectionButton = () => {
  const { selectedBeers, clearSelectedBeers } = useBeersStore();

  const handleClearSelection = () => {
    clearSelectedBeers();
  };

  if (selectedBeers.length === 0) {
    return null;
  }

  return (
    <ClearSelectionButtonStyled
      variant="contained"
      color="info"
      onClick={handleClearSelection}
    >
      Clear
    </ClearSelectionButtonStyled>
  );
};

export default ClearSelectionButton;
