import { Typography } from "@mui/material";

const DescriptionTitle = ({ children, sx }: { children: any; sx?: any }) => {
  return (
    <Typography variant={"h6"} color={"primary"} mr={1} sx={sx}>
      {children}
    </Typography>
  );
};

export default DescriptionTitle;
