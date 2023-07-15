import useFetchBeers from "hooks/useFetchBeers";
import { useEffect, useState } from "react";
import useBeersStore from "store/useBeers.store";
import { TBeer } from "types/Beer.type";
import BeersLayout from "components/beer/BeersLayout";
import FlexContainer from "components/ui/layout/FlexContainer";
import FullBox from "components/ui/layout/FullBox";
import Appbar from "components/ui/layout/Appbar";
import { CircularProgress } from "@mui/material";
import DeleteButton from "components/ui/buttons/DeleteButton";
import ClearSelectionButton from "components/ui/buttons/ClearSelectionButton";

const Home = () => {
  const [page, setPage] = useState(1);
  const [isLoading, data, error, endOfData] = useFetchBeers(page);
  const {
    totalBeers,
    selectedBeers,
    beers,
    addBeers,
    setBeers,
    toggleSelectedBeer,
    deleteBeers,
  } = useBeersStore((state) => state);
  const [viewBeers, setViewBeers] = useState<TBeer[]>([]);
  const [offset, setOffset] = useState(0);
  const [viewOffset, setViewOffset] = useState(0);

  useEffect(() => {
    if (data) {
      addBeers(data);
    }
  }, [addBeers, data]);

  useEffect(() => {
    if (beers.length !== 0) {
      if (beers.length / (offset + 15) >= 1) {
        setViewBeers(beers.slice(offset, offset + 15));
      } else {
        setPage((prev) => prev + 1);
      }
    }
  }, [offset, beers]);

  const renderBeersLayout = (index: number) => {
    return (
      <BeersLayout
        key={index}
        beers={viewBeers.slice(index, index + 5)}
        isShown={index === viewOffset}
      />
    );
  };

  if (isLoading) {
    return (
      <FullBox>
        <Appbar />
        <FlexContainer sx={{ mt: 5 }}>
          <CircularProgress />
        </FlexContainer>
      </FullBox>
    );
  }

  return (
    <FullBox>
      <Appbar />
      <FlexContainer sx={{ mt: 5 }}>
        {renderBeersLayout(0)}
        {renderBeersLayout(1)}
        {renderBeersLayout(2)}
      </FlexContainer>
      <DeleteButton />
      <ClearSelectionButton />
    </FullBox>
  );
};

export default Home;
