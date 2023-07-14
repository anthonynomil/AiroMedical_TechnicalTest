import { TBeer } from "types/Beer.type";
import {
  Card,
  CardActionArea,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import useThemeStore from "store/useTheme.store";

const BeerCard = styled(Card)`
  width: 100%;
  height: ${window.innerHeight / 4}px;
`;

type TBeerComponentProps = {
  beer: TBeer;
  isSelected?: boolean;
};

const BeerComponent = ({ beer, isSelected = false }: TBeerComponentProps) => {
  const theme = useThemeStore((state) => state.theme);
  const backgroundColor = theme === "dark" ? grey[800] : grey[400];

  return (
    <BeerCard
      sx={{ backgroundColor: isSelected ? backgroundColor : "inherit" }}
    >
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <CardContent sx={{ width: "100%", height: "100%" }}>
          <Typography variant={"h5"} color={"primary"} gutterBottom>
            {beer.name}
          </Typography>
          <Typography variant={"body2"}>{beer.description}</Typography>
        </CardContent>
      </CardActionArea>
    </BeerCard>
  );
};

export default BeerComponent;
