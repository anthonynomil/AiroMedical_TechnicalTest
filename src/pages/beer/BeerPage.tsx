import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import FullBox from "components/ui/layout/FullBox";
import useFetchBeer from "hooks/useFetchBeer";
import Loading from "pages/error/Loading";
import ErrorDefault from "pages/error/ErrorDefault";
import Grid2 from "@mui/material/Unstable_Grid2";
import Appbar from "components/ui/layout/Appbar";
import MockUpBeer from "assets/img/mockup_beer.png";
import DescriptionTitle from "components/ui/text/DescriptionTitle";
import DescriptionText from "components/ui/text/DescriptionText";
import Ingredients from "components/beer/Ingredients";
import FlexContainer from "components/ui/layout/FlexContainer";
import { ArrowBackRounded } from "@mui/icons-material";

const BoxTitleText = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ButtonBack = styled(IconButton)`
  position: absolute;
  top: 100px;
  left: 10px;
`;

const BeerPage = () => {
  const navigate = useNavigate();
  const id = Number(useParams<{ id: string }>().id);
  const [isLoading, beer, error] = useFetchBeer(id);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDefault />;

  return (
    <FullBox>
      <Appbar />
      <FlexContainer sx={{ my: 4 }}>
        <Grid2 container>
          <Grid2 xs={6} display={"flex"} justifyContent={"center"}>
            <img src={beer?.image_url ?? MockUpBeer} alt={`${beer.name}`} />
          </Grid2>
          <Grid2 xs={6}>
            <Stack spacing={2}>
              <Typography variant={"h4"} align={"center"} color={"primary"}>
                {beer.name}
              </Typography>
              <Divider />
              <BoxTitleText>
                <DescriptionTitle>Description :</DescriptionTitle>
                <DescriptionText>{beer.description}</DescriptionText>
              </BoxTitleText>
              <BoxTitleText>
                <DescriptionTitle>Brewer's tips :</DescriptionTitle>
                <DescriptionText>{beer?.brewers_tips}</DescriptionText>
              </BoxTitleText>
              <Grid2 container>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <DescriptionTitle>Volume :</DescriptionTitle>
                  <DescriptionText>
                    {beer.volume.value} {beer.volume.unit}
                  </DescriptionText>
                </Grid2>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <DescriptionTitle>Alcohol by volume :</DescriptionTitle>
                  <DescriptionText>{beer.abv} %</DescriptionText>
                </Grid2>
              </Grid2>
              <Grid2 container>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <DescriptionTitle>First Brewed :</DescriptionTitle>
                  <DescriptionText>{beer.first_brewed}</DescriptionText>
                </Grid2>
                <Grid2 xs={6} display={"flex"} alignItems={"center"}>
                  <DescriptionTitle>Attenuation :</DescriptionTitle>
                  <DescriptionText>{beer?.attenuation_level} %</DescriptionText>
                </Grid2>
              </Grid2>
              <DescriptionTitle>Food pairing :</DescriptionTitle>
              <Grid2 container spacing={2}>
                {beer.food_pairing.map((food: string, index: number) => (
                  <Grid2 key={index} xs={4}>
                    <Paper
                      sx={{
                        p: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      elevation={5}
                    >
                      <DescriptionText>{food}</DescriptionText>
                    </Paper>
                  </Grid2>
                ))}
              </Grid2>
              <Divider />
              <Typography variant={"h4"} color={"primary"}>
                Ingredients :
              </Typography>
              <Ingredients ingredients={beer.ingredients} />
            </Stack>
          </Grid2>
        </Grid2>
      </FlexContainer>
      <ButtonBack onClick={() => navigate(-1)}>
        <ArrowBackRounded />
      </ButtonBack>
    </FullBox>
  );
};

export default BeerPage;
