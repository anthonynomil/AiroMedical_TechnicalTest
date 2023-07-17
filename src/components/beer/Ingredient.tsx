import { Chip } from "@mui/material";

const Ingredient = ({ ingredient }: any) => {
  return <Chip variant={"outlined"} sx={{ m: 1 }} label={ingredient.name} />;
};

export default Ingredient;
