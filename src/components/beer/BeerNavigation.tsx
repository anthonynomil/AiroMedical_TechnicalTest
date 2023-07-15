import DeleteButton from "components/ui/buttons/DeleteButton";
import ClearSelectionButton from "components/ui/buttons/ClearSelectionButton";
import useBeersStore from "store/useBeers.store";
import { useEffect, useMemo, useState } from "react";
import useFetchBeers from "hooks/useFetchBeers";
import FullBox from "components/ui/layout/FullBox";
import BeersLayout from "components/beer/BeersLayout";
import { TBeer } from "types/Beer.type";
import BeersNavigationButtons from "components/ui/buttons/BeersNavigationButtons";
import FlexContainer from "components/ui/layout/FlexContainer";
import CenterBox from "components/ui/layout/CenterBox";
import { CircularProgress, Typography } from "@mui/material";

const BeerNavigation = () => {
  const { beers, addBeers, clearSelectedBeers } = useBeersStore();
  const [renderedBeers, setRenderedBeers] = useState<TBeer[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, data, error, endOfData] = useFetchBeers(page);
  const [offset, setOffset] = useState(0);
  const isLastElement = useMemo(() => {
    const lastElementSlice = beers.slice(offset, offset + 15);
    return (
      lastElementSlice.length < 15 ||
      lastElementSlice[lastElementSlice.length - 1] === beers[beers.length - 1]
    );
  }, [offset, beers]);

  useEffect(() => {
    if (!endOfData && data) {
      addBeers(data);
    }
  }, [data]);

  useEffect(() => {
    if (beers.length === 0) return;
    if (beers.slice(offset, offset + 15).length === 0) {
      setOffset((prev) => prev - 15);
      return;
    }
    if (offset + 31 > beers.length) {
      setPage((prev) => prev + 1);
    }
    setRenderedBeers(beers.slice(offset, offset + 15));
    return clearSelectedBeers();
  }, [offset, beers]);

  const handleBack = () => {
    setOffset((prev) => prev - 15);
  };

  const handleForward = () => {
    setOffset((prev) => prev + 15);
  };

  if (isLoading) {
    return (
      <FullBox>
        <CenterBox>
          <CircularProgress />
        </CenterBox>
      </FullBox>
    );
  }

  if (error) {
    return (
      <FullBox>
        <CenterBox>
          <Typography variant={"h4"} color={"error"}>
            Something went wrong! Please try again later.
          </Typography>
        </CenterBox>
      </FullBox>
    );
  }

  return (
    <FullBox>
      <FlexContainer sx={{ mt: 5 }}>
        <BeersLayout beers={renderedBeers} />
      </FlexContainer>
      <BeersNavigationButtons
        back={handleBack}
        forward={handleForward}
        backVisible={offset !== 0}
        forwardVisible={!isLastElement}
      />
      <DeleteButton />
      <ClearSelectionButton />
    </FullBox>
  );
};

export default BeerNavigation;
