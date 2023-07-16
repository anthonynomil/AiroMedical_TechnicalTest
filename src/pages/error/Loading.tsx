import FullBox from "components/ui/layout/FullBox";
import CenterBox from "components/ui/layout/CenterBox";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <FullBox>
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    </FullBox>
  );
};

export default Loading;
