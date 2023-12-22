import { Box, Typography, Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const AddCart: React.FC = () => {
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
        color="#F86260"
        fontWeight="700"
      >
        $00
      </Typography>
      <Button
        sx={{
          backgroundColor: "#F86260",
          width: "297px",
          height: "36px",
          color: "#FFFFFF",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#F86260",
          },
        }}
        endIcon={
          <ShoppingCart
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#F39060",
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
