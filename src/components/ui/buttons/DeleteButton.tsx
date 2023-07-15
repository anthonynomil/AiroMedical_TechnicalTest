import {Button, styled} from "@mui/material";
import useBeersStore from "store/useBeers.store";

/**
 * DeleteButton
 *
 * DeleteButton is a styled Button component.
 *
 * It is used to delete selected beers.
 *
 * Its position is at the bottom right of the screen.
 *
 * @returns {JSX.Element} - DeleteButton component
 * @see https://mui.com/components/buttons/
 * @see https://mui.com/customization/components/
 */

const DeleteButtonStyled = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const DeleteButton = () => {
  const { selectedBeers, deleteBeers } = useBeersStore();

  const handleDelete = () => {
    deleteBeers(selectedBeers);
  };

  if (selectedBeers.length === 0) {
    return null;
  }

  return (
    <DeleteButtonStyled
      variant="contained"
      color="error"
      onClick={handleDelete}
    >
      Delete
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
