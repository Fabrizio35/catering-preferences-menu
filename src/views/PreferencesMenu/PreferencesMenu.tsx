import { Box, Typography } from "@mui/material";
import DishName from "./DishName";

export default function PreferencesMenu() {
  return (
    <Box
      sx={{
        marginTop: "119px",
        marginLeft: "393px",
        width: "930px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography component="h3" fontSize="31.25px" fontWeight="700">
            Menu Name
          </Typography>
          <Typography component="p" fontSize="16px">
            Description
          </Typography>
        </Box>

        <DishName />
        <DishName />
        <DishName />
      </Box>
    </Box>
  );
}
