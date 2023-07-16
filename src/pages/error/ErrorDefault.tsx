import FullBox from "components/ui/layout/FullBox";
import CenterBox from "components/ui/layout/CenterBox";
import { Typography } from "@mui/material";

const ErrorDefault = () => {
  return (
    <FullBox>
      <CenterBox>
        <Typography variant={"h4"} color={"error"}>
          An error has occurred, please try again later
        </Typography>
      </CenterBox>
    </FullBox>
  );
};

export default ErrorDefault;
