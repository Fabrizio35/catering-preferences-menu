import { Box, Typography, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import colors from "../colors/colors";
import { AddCartProps } from "../types/PreferencesMenu.types";

/* Add to cart Button and Price */
const AddCart: React.FC<AddCartProps> = ({ price }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-end",
        alignItems: "flex-end",
        gap: "16px",
      }}
    >
      <Typography
        component="span"
        fontSize="31.25px"
        color={colors.primary}
        fontWeight="700"
      >
        {price ? `$${price}` : "$00"}
      </Typography>
      <Button
        sx={{
          backgroundColor: colors.primary,
          width: "297px",
          height: "36px",
          color: colors.white,
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: colors.primary,
          },
        }}
        endIcon={
          <ShoppingCart
            sx={{
              backgroundColor: colors.white,
              color: colors.addCart,
              borderRadius: "3px",
              padding: "2px",
            }}
          />
        }
      >
        Add to cart
      </Button>
    </Box>
  );
};

export default AddCart;
