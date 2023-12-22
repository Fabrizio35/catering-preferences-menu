import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import colors from "../colors/colors";
import { ExpandMore } from "@mui/icons-material";
import { DishProps } from "../types/PreferencesMenu.types";
import Ingredient from "./Ingredient";

/* Dish Detail (Accordion) */
const Dish: React.FC<DishProps> = ({ dish }) => {
  const PHOTO_SIZE = 375;

  return (
    <Accordion
      sx={{
        boxShadow: `5px 4px 10px ${colors.shadowAccordion}`,
        borderRadius: "20px",
        backgroundColor: colors.accordion,
        "&.MuiAccordion-root:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMore
            sx={{
              color: colors.primary,
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
            width: `${PHOTO_SIZE}px`,
            height: `${PHOTO_SIZE}px`,
            borderRadius: "20px",
            boxShadow: `10px 0 10px ${colors.shadowImage}`,
            marginRight: "32px",
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Dish;
