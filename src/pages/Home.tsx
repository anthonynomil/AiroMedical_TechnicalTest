import useFetchBeers from "hooks/useFetchBeers";
import { useEffect, useState } from "react";
import useBeersStore from "store/useBeers.store";
import BeersLayout from "components/beer/BeersLayout";
import FlexContainer from "components/ui/layout/FlexContainer";
import FullBox from "components/ui/layout/FullBox";
import Appbar from "components/ui/layout/Appbar";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import DeleteButton from "components/ui/buttons/DeleteButton";
import ClearSelectionButton from "components/ui/buttons/ClearSelectionButton";
import CenterBox from "components/ui/layout/CenterBox";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

const Home = () => {
  const [page, setPage] = useState(1);
  const [isLoading, data, error, endOfData] = useFetchBeers(page);
  const { beers, addBeers } = useBeersStore((state) => state);
  const [offset, setOffset] = useState({ offset: 300, viewOffset: 0 });

  useEffect(() => {
    if (data) {
      addBeers(data);
    }
  }, [addBeers, data]);

  useEffect(() => {
    if (beers.length !== 0 && beers.length / (offset.offset + 16) < 1) {
      setPage((prev) => prev + 1);
    }
  }, [offset, beers]);

  const handleOffsetBack = () => {
    if (offset.viewOffset - 1 < 0) {
      setOffset({ offset: offset.offset - 15, viewOffset: 2 });
      return;
    }
    setOffset({ offset: offset.offset, viewOffset: offset.viewOffset - 1 });
  };

  const handleOffsetForward = () => {
    if (offset.viewOffset + 1 > 2) {
      setOffset({ offset: offset.offset + 15, viewOffset: 0 });
      return;
    }
    setOffset({ offset: offset.offset, viewOffset: offset.viewOffset + 1 });
  };

  const renderBeersLayout = (index: number) => {
    let sliceBegin = offset.offset + index * 5;
    let sliceEnd = sliceBegin + 5;
    return (
      <BeersLayout
        key={index}
        beers={beers.slice(sliceBegin, sliceEnd)}
        isShown={index === offset.viewOffset}
      />
    );
  };

  if (isLoading) {
    return (
      <FullBox>
        <Appbar />
        <FlexContainer sx={{ mt: 5 }}>
          <CenterBox>
            <CircularProgress />
          </CenterBox>
        </FlexContainer>
      </FullBox>
    );
  }

  if (error) {
    return (
      <FullBox>
        <Appbar />
        <FlexContainer sx={{ mt: 5 }}>
          <CenterBox>
            <Typography variant={"h5"} color={"error"}>
              An error has occurred, please try again later...
            </Typography>
          </CenterBox>
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
      <Box
        width={"80%"}
        mb={3}
        mx={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {offset.offset !== 0 || offset.viewOffset !== 0 ? (
          <IconButton onClick={handleOffsetBack}>
            <ArrowBackRounded />
          </IconButton>
        ) : (
          <Box />
        )}
        {!endOfData ? (
          <IconButton onClick={handleOffsetForward}>
            <ArrowForwardRounded />
          </IconButton>
        ) : (
          <Box />
        )}
      </Box>
      <DeleteButton />
      <ClearSelectionButton />
    </FullBox>
  );
};

export default Home;
