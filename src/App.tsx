import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Home, ShoppingCart } from "@mui/icons-material";
import PreferencesMenu from "./views/PreferencesMenu/PreferencesMenu";
import { Box, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import colors from "./colors";

/* Sidebar Navbar Component List */
const navList = [
  { label: "Home", icon: Home },
  { label: "Cart", icon: ShoppingCart },
];

function App() {
  return (
    <>
      <Sidebar navList={navList} />
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
          Preferences
        </Typography>
      </Box>
      <PreferencesMenu />
    </>
  );
}

export default App;
