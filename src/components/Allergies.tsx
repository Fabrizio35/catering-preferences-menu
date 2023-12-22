import { Box, Typography, Input } from "@mui/material";
import { useState } from "react";

const Allergies: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [allergies, setAllergies] = useState<string[]>([]);

  const changeHandler = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = evt.target.value;

    setInput(value);
  };

  const enterAllergies = (
    evt: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = evt.key;

    if (key === "Enter") {
      setAllergies([...allergies, input]);
      setInput("");
    }
  };

  return (
    <Box
      component="article"
      sx={{ display: "flex", flexDirection: "column", gap: "32px" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography fontSize="31.25px" fontWeight="700">
          Allergies
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography fontSize="12px" color="#9295AA">
            Specify if you suffer from any type of allergy
          </Typography>
          <Input
            type="text"
            name="allergies"
            id="allergies"
            disableUnderline
            sx={{
              backgroundColor: "#F86260",
              width: "100%",
              height: "38px",
              borderRadius: "10px",
              color: "#FFFFFF",
              paddingX: "8px",
            }}
            value={input}
            onChange={changeHandler}
            onKeyDown={enterAllergies}
          />
        </Box>
      </Box>

      <Box component="ul">
        {allergies.map((allergie, index) => (
          <Typography
            component="li"
            key={index}
            fontSize="20px"
            sx={{ listStyle: "none" }}
          >
            {allergie}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Allergies;
