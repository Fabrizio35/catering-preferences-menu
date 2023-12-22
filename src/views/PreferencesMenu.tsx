import { Box, Typography } from "@mui/material";

export default function PreferencesMenu() {
  return (
    <Box sx={{ marginTop: "119px", marginLeft: "393px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>Menu Name</Typography>
        <Typography>Description</Typography>
      </Box>
    </Box>
  );
}
