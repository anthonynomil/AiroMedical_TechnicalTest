import {TBeer} from "types/Beer.type";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import {grey} from "@mui/material/colors";
import useThemeStore from "store/useTheme.store";
import useBeersStore from "store/useBeers.store";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

/**
 * BeerCard
 *
 * This component is a styled Card component from MUI.
 * It uses the styled function from MUI to create a styled component.
 * - https://mui.com/system/styled/
 */

const BeerCard = styled(Card)`
  width: 100%;
  height: ${window.innerHeight / 4}px;
`;

type TBeerComponentProps = {
  beer: TBeer;
  isSelected?: boolean;
};

/**
 *
 * @param beer
 * @param isSelected
 * @constructor
 *
 * BeerComponent
 *
 * This component handles the rendering of a single beer.
 * onClick goes to the beer page.
 * onContextMenu toggles the selected state of the beer.
 */

const BeerComponent = ({ beer }: TBeerComponentProps) => {
  const { toggleSelectedBeer, selectedBeers } = useBeersStore();
  const isSelected = selectedBeers.some(
    (selectedBeer) => selectedBeer.id === beer.id,
  );
  const theme = useThemeStore((state) => state.theme);
  const backgroundColor = theme === "dark" ? grey[800] : grey[400];
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/beer/${beer.id}`);
  };

  const handleContextMenu = (e: any) => {
    e.preventDefault();
    toggleSelectedBeer(beer);
  };

  return (
    <BeerCard
      sx={{ backgroundColor: isSelected ? backgroundColor : "inherit" }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          p: 2,
        }}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        <CardMedia
          component={"img"}
          src={beer?.image_url}
          sx={{ width: "auto", height: "100%", objectFit: "fill", m: "auto" }}
        />
        <CardContent sx={{ width: "60%", height: "100%", overflow: "scroll" }}>
          <Stack spacing={1}>
            <Typography variant={"h5"} color={"primary"} gutterBottom>
              {beer.name}
            </Typography>
            <Divider />
            <Grid2 container>
              <Grid2
                xs={12}
                display={"flex"}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Typography variant={"h6"} color={"primary"} mr={2}>
                  Volume :
                </Typography>
                <Typography variant={"body2"}>
                  {beer.volume.value} {beer.volume.unit}
                </Typography>
              </Grid2>
              <Grid2
                xs={12}
                display={"flex"}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Typography variant={"h6"} color={"primary"} mr={2}>
                  ABV :
                </Typography>
                <Typography variant={"body2"}>{beer.abv} %</Typography>
              </Grid2>
            </Grid2>
          </Stack>
        </CardContent>
      </CardActionArea>
    </BeerCard>
  );
};

export default BeerComponent;
