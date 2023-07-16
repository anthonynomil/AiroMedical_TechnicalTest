import { useNavigate, useParams } from "react-router-dom";
import { Button, Divider, Stack, Typography } from "@mui/material";
import FullBox from "components/ui/layout/FullBox";
import useFetchBeer from "hooks/useFetchBeer";
import Loading from "pages/error/Loading";
import ErrorDefault from "pages/error/ErrorDefault";
import FlexContainer from "components/ui/layout/FlexContainer";
import Grid2 from "@mui/material/Unstable_Grid2";
import Appbar from "components/ui/layout/Appbar";

const BeerPage = () => {
  const navigate = useNavigate();
  const id = Number(useParams<{ id: string }>().id);
  const [isLoading, beer, error] = useFetchBeer(id);
  console.log(beer);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDefault />;

  return (
    <FullBox>
      <Appbar />
      <FlexContainer sx={{ mt: 5 }}>
        <Grid2 container>
          <Grid2 xs={6}>
            <img src={beer?.image_url} alt={`${beer.name} image`} />
          </Grid2>
          <Grid2 xs={6}>
            <Stack spacing={2}>
              <Typography variant={"h1"} align={"center"} color={"primary"}>
                {beer.name}
              </Typography>
              <Divider />
              <Typography variant={"body1"}>
                <Typography variant={"h6"} color={"primary"}>
                  Description :
                </Typography>
                {beer.description}
              </Typography>
              <Typography variant={"body1"}>
                <Typography variant={"h6"} color={"primary"}>
                  Brewer's tips :
                </Typography>
                {beer?.brewers_tips}
              </Typography>
              <Grid2 container>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <Typography variant={"h6"} color={"primary"} mr={2}>
                    Volume :
                  </Typography>
                  <Typography variant={"body1"}>
                    {beer.volume.value} {beer.volume.unit}
                  </Typography>
                </Grid2>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <Typography variant={"h6"} color={"primary"} mr={2}>
                    Alcohol By Volume :
                  </Typography>
                  <Typography variant={"body1"}>{beer.abv} %</Typography>
                </Grid2>
              </Grid2>
            </Stack>
          </Grid2>
        </Grid2>
      </FlexContainer>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </FullBox>
  );
};

export default BeerPage;
