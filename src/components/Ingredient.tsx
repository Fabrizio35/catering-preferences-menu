import { Box, Typography } from "@mui/material";
import colors from "../colors";
import { IngredientProps } from "../types/PreferencesMenu.types";

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Box
        sx={{
          width: "21px",
          height: "21px",
          border: `2px solid ${colors.background}`,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          style={{
            width: "15px",
            height: "15px",
            appearance: "none",
            borderRadius: "100%",
            cursor: "pointer",
          }}
          className="checkbox-ingredients"
        />
      </Box>
      <Typography fontSize="12px">{ingredient.name}</Typography>
    </Box>
  );
};

export default Ingredient;
