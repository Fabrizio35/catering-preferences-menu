import { Box, Typography } from "@mui/material";
import Dish from "./Dish";
import { MenuProps } from "../types/PreferencesMenu.types";

/* Menu name, description and dishes */
const Menu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography component="h3" fontSize="31.25px" fontWeight="700">
          {menu.name}
        </Typography>
        <Typography component="p" fontSize="16px">
          {menu.description}
        </Typography>
      </Box>

      {menu.dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </Box>
  );
};

export default Menu;
