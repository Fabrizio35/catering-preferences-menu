import { Typography } from "@mui/material";
import colors from "../colors/colors";

/* The Logo right now is a JSX, but it can be an image, svg, etc. */

export default function Logo(): JSX.Element {
  return (
    <Typography
      variant="h1"
      component="h1"
      fontSize="30px"
      fontWeight="700"
      color={colors.white}
      sx={{ userSelect: "none" }}
    >
      Logo
    </Typography>
  );
}
