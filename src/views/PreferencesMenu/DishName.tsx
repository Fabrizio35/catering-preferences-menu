import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import colors from "../../colors";
import { ExpandMore } from "@mui/icons-material";

const DishName: React.FC = () => {
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
            Name of the dish
          </Typography>
          <Typography component="p" fontSize="12px">
            Description
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
                  }}
                  className="checkbox-ingredients"
                />
              </Box>
              <Typography fontSize="12px">Ingredient</Typography>
            </Box>
          </Box>
        </Box>
        <img
          src="https://fastly.picsum.photos/id/220/400/400.jpg?hmac=TZxXlzOtXbltfQjPEQ7DnsOcm4b0BNwUvXdtmJeIwGw"
          alt=""
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

export default DishName;
