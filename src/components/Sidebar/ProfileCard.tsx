import React from "react";
import { Box, Typography } from "@mui/material";
import colors from "../../colors";
import { ProfileCardProps } from "../../types/Sidebar.types";

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const PHOTO_SIZE = 71;

  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <img
        src={user.photo}
        alt={`${user.username} photo`}
        title={`${user.username} photo`}
        style={{
          width: `${PHOTO_SIZE}px`,
          height: `${PHOTO_SIZE}px`,
          borderRadius: "100%",
          backgroundColor: colors.textAndIcons,
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography
          component="span"
          sx={{ fontSize: "16px", color: colors.textAndIcons }}
        >
          {user.username}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontSize: "12px",
            color: colors.textAndIcons,
            opacity: "50%",
          }}
        >
          Edit profile
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
