import FullBox from "components/ui/layout/FullBox";
import Appbar from "components/ui/layout/Appbar";
import BeerNavigation from "components/beer/BeerNavigation";

const Home = () => {
  return (
    <FullBox>
      <Appbar />
      <BeerNavigation />
    </FullBox>
  );
};

export default Home;
