import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import colors from "../colors";
import { ExpandMore } from "@mui/icons-material";
import { DishProps } from "../types/PreferencesMenu.types";
import Ingredient from "./Ingredient";

const Dish: React.FC<DishProps> = ({ dish }) => {
  return (
    <Accordion
      sx={{
        boxShadow: `5px 4px 10px #88064D40`,
        borderRadius: "20px",
        backgroundColor: "#FFFCF8",
        "&.MuiAccordion-root:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMore
            sx={{
              color: colors.background,
              width: "38px",
              height: "38px",
            }}
          />
        }
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography component="h4" fontSize="20px" fontWeight="700">
            {dish.name}
          </Typography>
          <Typography component="p" fontSize="12px">
            {dish.description}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography component="span" fontSize="16px" fontWeight="600">
            Ingredients
          </Typography>
          <Box
            component="ul"
            sx={{ display: "flex", flexDirection: "column", gap: "9px" }}
          >
            {dish.ingredients.map((ingredient) => (
              <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
          </Box>
        </Box>
        <img
          src={dish.image}
          alt={`${dish.name} image`}
          title={`${dish.name} image`}
          style={{
            width: "375px",
            height: "375px",
            borderRadius: "20px",
            boxShadow: `10px 0 10px #88064D4D`,
            marginRight: "32px",
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Dish;
