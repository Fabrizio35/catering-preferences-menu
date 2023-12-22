import { Box, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import colors from "../colors";

interface TitleViewProps {
  title: string;
}

/* Title Menu */
const TitleView: React.FC<TitleViewProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "24px",
        color: colors.background,
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
