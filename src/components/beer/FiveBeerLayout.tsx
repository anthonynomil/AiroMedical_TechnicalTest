import { TBeer } from "types/Beer.type";
import FullBox from "components/ui/layout/FullBox";
import BeerComponent from "components/beer/BeerComponent";

type FiveBeerLayoutProps = {
  beers: TBeer[];
  isShown?: boolean;
};

const FiveBeerLayout = ({ beers, isShown = false }: FiveBeerLayoutProps) => {
  return (
    <FullBox display={isShown ? "flex" : "none"}>
      {beers.map((beer) => (
        <BeerComponent key={beer.id} beer={beer} />
      ))}
    </FullBox>
  );
};
