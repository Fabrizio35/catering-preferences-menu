import { Box, Typography } from "@mui/material";
import Logo from "./Logo";
import { dataFooter } from "../data/data";
import colors from "../colors/colors";

export default function Footer() {
  /* List of Footer elements */
  const DataList = (firstIndex: number, lastIndex: number) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {dataFooter.slice(firstIndex, lastIndex).map((data) => (
          /* They should be changed to Link tags */
          <Typography
            key={data.id}
            component="span"
            fontSize="16px"
            sx={{ cursor: "pointer" }}
          >
            {data.label}
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.primary,
        width: "100%",
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "32px",
        padding: "32px",
      }}
    >
      <Box
        sx={{
          color: colors.white,
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        {DataList(0, 3)}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "68px",
          }}
        >
          <Logo />
          <Typography component="span" fontSize="16px">
            correo@correo.com
          </Typography>
        </Box>
        {DataList(3, 6)}
      </Box>
      <Typography component="h6" fontSize="16px" color={colors.white}>
        2023 LOGO All right reserved
      </Typography>
    </Box>
  );
}
