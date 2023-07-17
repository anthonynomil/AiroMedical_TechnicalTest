import { Box, Chip, Stack } from "@mui/material";
import DescriptionTitle from "components/ui/text/DescriptionTitle";
import Ingredient from "components/beer/Ingredient";
import { firstLetterUpperCase } from "utils/string.utils";

const Ingredients = ({ ingredients }: any) => {
  return (
    <Stack spacing={2}>
      {Object.keys(ingredients).map((key: any) => {
        return (
          <div key={key}>
            <DescriptionTitle key={key} sx={{ mb: 2 }}>
              {firstLetterUpperCase(key)} :
            </DescriptionTitle>
            <Box display={"flex"} sx={{ flexWrap: "wrap" }}>
              {typeof ingredients[key] === "string" ? (
                <Chip variant={"outlined"} label={ingredients[key]} />
              ) : (
                Object.keys(ingredients[key]).map((key2: any) => {
                  return (
                    <Ingredient
                      key={key2}
                      ingredient={ingredients[key][key2]}
                    />
                  );
                })
              )}
            </Box>
          </div>
        );
      })}
    </Stack>
  );
};

export default Ingredients;
