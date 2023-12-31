import { Box } from "@mui/material";
import Menu from "../../components/Menu";
import { argentineMenu } from "../../data/data";
import Allergies from "../../components/Allergies";
import AddCart from "../../components/AddCart";

/* Preferences Menu Section */
const PreferencesMenu: React.FC = () => {
  return (
    <Box
      sx={{
        marginTop: "119px",
        marginLeft: "393px",
        width: "930px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <Menu menu={argentineMenu} />

      <Allergies />

      <AddCart />
    </Box>
  );
};

export default PreferencesMenu;
