import { Box, Typography } from "@mui/material";
import Logo from "./Logo";
import { dataFooter } from "../data/data";

export default function Footer() {
  const DataList = (firstIndex: number, lastIndex: number) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {dataFooter.slice(firstIndex, lastIndex).map((data) => (
          <Typography fontSize="16px">{data.label}</Typography>
        ))}
      </Box>
    );
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F86260",
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
          color: "#FFFFFF",
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
          <Typography>correo@correo.com</Typography>
        </Box>
        {DataList(3, 6)}
      </Box>
      <Typography fontSize="16px" color="#FFFFFF">
        2023 LOGO All right reserved
      </Typography>
    </Box>
  );
}
