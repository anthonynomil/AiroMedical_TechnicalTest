import FlexContainer from "components/ui/layout/FlexContainer";
import Appbar from "components/ui/layout/Appbar";
import useBeersStore from "store/useBeers.store";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import BeerComponent from "components/beer/BeerComponent";
import Grid2 from "@mui/material/Unstable_Grid2";
import { TBeer } from "types/Beer.type";
import { useNavigate } from "react-router-dom";
import { removeElements, toggleElement } from "utils/arrays.utils";
import FullBox from "components/ui/layout/FullBox";
import useFetchData from "hooks/useFetchData";
import { API_URLS } from "config/api/apiUrls.config";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
import CenterBox from "components/ui/layout/CenterBox";
import DeleteButton from "components/ui/buttons/DeleteButton";
import { showBeers } from "utils/beers.utils";

const Home = () => {
  const beers = useBeersStore((state) => state.beers);
  const setBeers = useBeersStore((state) => state.setBeers);
  const [selectedBeers, setSelectedBeers] = useState<TBeer[]>([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const options = useMemo(
    () => ({
      method: "GET",
      params: {
        page,
        per_page: 15,
      },
    }),
    [page],
  );
  const { isLoading, error, data } = useFetchData(API_URLS.beers, options);
  const navigate = useNavigate();

  const handleClick = (e: any, beer: TBeer) => navigate(`/beer/${beer.id}`);

  const handleContextMenu = (e: any, beer: TBeer) => {
    e.preventDefault();
    setSelectedBeers(toggleElement(selectedBeers, beer));
  };

  const handleDelete = () => {
    setBeers(removeElements(beers, selectedBeers));
    setSelectedBeers([]);
  };

  const addOffset = () => {
    console.log("Clicked");
    const newOffset = offset + 5;
    if (newOffset % 20 === 0) {
      setPage(page + 1);
    }
    setOffset(newOffset);
  };

  const removeOffset = () => {
    const newOffset = offset - 5;
    if (newOffset % 20 === 0) {
      setPage(page - 1);
    }
    setOffset(offset - 5);
  };

  useEffect(() => {
    console.log(offset);
    if (data) {
      let realOffset = offset > 15 ? offset / (15 * (page - 1)) : offset;
      const offsetBeers = showBeers(data, realOffset);
      if (offsetBeers.length === 0) {
        return;
      }
      setBeers(offsetBeers);
    }
  }, [data, setBeers, offset]);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  if (isLoading) {
    return (
      <FullBox>
        <Appbar />
        <CenterBox>
          <CircularProgress />
        </CenterBox>
      </FullBox>
    );
  }

  if (error) {
    return (
      <FullBox>
        <Appbar />
        <CenterBox>
          <Typography variant={"h1"} color={"error"}>
            Error please try again later
          </Typography>
        </CenterBox>
      </FullBox>
    );
  }

  if (!beers || beers.length === 0) {
    return (
      <FullBox>
        <Appbar />
        <CenterBox>
          <Typography variant={"h1"} color={"infos"}>
            No beers found
          </Typography>
        </CenterBox>
      </FullBox>
    );
  }

  return (
    <FullBox>
      <Appbar />
      <FlexContainer sx={{ justifyContent: "center" }}>
        <Grid2 container spacing={2} mt={4} sx={{ justifyContent: "center" }}>
          {beers.map((beer) => (
            <Grid2
              xs={6}
              key={beer.id}
              onClick={(e) => handleClick(e, beer)}
              onContextMenu={(e) => handleContextMenu(e, beer)}
            >
              <BeerComponent
                beer={beer}
                isSelected={selectedBeers.includes(beer)}
              />
            </Grid2>
          ))}
          <Box width={"80%"} display={"flex"} justifyContent={"space-between"}>
            {offset === 0 ? (
              <Box />
            ) : (
              <IconButton onClick={removeOffset}>
                <ArrowBackRounded />
              </IconButton>
            )}
            <IconButton onClick={addOffset}>
              <ArrowForwardRounded />
            </IconButton>
          </Box>
        </Grid2>
      </FlexContainer>
      {selectedBeers.length > 0 && (
        <DeleteButton
          variant={"contained"}
          color={"error"}
          onClick={handleDelete}
        >
          Delete
        </DeleteButton>
      )}
    </FullBox>
  );
};

export default Home;
