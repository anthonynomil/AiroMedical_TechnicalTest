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

type TBeersLayoutProps = {
  beers: TBeer[];
};

const BeersLayout = ({ beers }: TBeersLayoutProps) => {
  return (
    <Grid2 container spacing={2} justifyContent={"center"}>
      {beers.map((beer) => (
        <Grid2 xs={12} sm={12} md={6} lg={4} key={beer.id}>
          <BeerComponent beer={beer} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BeersLayout;
