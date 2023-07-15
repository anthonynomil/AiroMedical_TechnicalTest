import {TBeer} from "types/Beer.type";
import BeerComponent from "components/beer/BeerComponent";
import Grid2 from "@mui/material/Unstable_Grid2";

/**
 * BeersLayout
 *
 * @description
 * This component render a list of beers in a grid layout.
 * @param beers
 * @param isShown
 * @constructor
 */

const BeersLayout = ({
  beers,
  isShown,
}: {
  beers: TBeer[];
  isShown?: boolean;
}) => {
  return (
    <Grid2
      display={isShown ? "flex" : "none"}
      container
      spacing={2}
      justifyContent={"center"}
    >
      {beers.map((beer) => (
        <Grid2 xs={6} key={beer.id}>
          <BeerComponent beer={beer} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BeersLayout;
