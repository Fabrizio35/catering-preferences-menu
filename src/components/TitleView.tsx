import { Box, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import colors from "../colors/colors";
import { TitleViewProps } from "../types/PreferencesMenu.types";

/* Title Menu */
const TitleView: React.FC<TitleViewProps> = ({ title }) => {
  return (
    /* Link tag must be added */
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        color: colors.primary,
        position: "absolute",
        top: "32px",
        left: "316px",
        cursor: "pointer",
      }}
    >
      <ArrowBackIos />
      <Typography
        component="h2"
        sx={{ fontSize: "31.25px", fontWeight: "700" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TitleView;
