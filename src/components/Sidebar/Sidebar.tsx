import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { SidebarProps, NavListItem } from "../../types/Sidebar.types";
import colors from "../../colors";
import ProfileCard from "./ProfileCard";
import Logo from "../Logo";

const Sidebar: React.FC<SidebarProps> = ({ navList }) => {
  const SIDEBAR_WIDTH = 287;
  const SIDEBAR_MIN_HEIGHT = 829;

  /* Sidebar Nav */
  const Nav: React.FC<{ list: NavListItem[] | undefined }> = ({ list }) => {
    return (
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {list?.map((elem) => {
          const Icon = elem.icon;
          return (
            <ListItem key={elem.label} sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemIcon sx={{ color: colors.textAndIcons }}>
                  <Icon />
                </ListItemIcon>
                <Typography
                  sx={{ color: colors.textAndIcons, fontSize: "20px" }}
                >
                  {elem.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  };

  /* User Test */
  const user = {
    username: "Username",
    photo:
      "https://fastly.picsum.photos/id/8/100/100.jpg?hmac=57Kp0Mcu8uqmiBdlwOKBQESnKuBxVXpha1ZVTmaE9X0",
  };

  return (
    <Box
      sx={{
        width: `${SIDEBAR_WIDTH}px`,
        minHeight: `${SIDEBAR_MIN_HEIGHT}px`,
        backgroundColor: colors.background,
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "32px",
        boxShadow: `10px 0 10px ${colors.shadow}`,
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Logo />

      <ProfileCard user={user} />

      <Nav list={navList} />

      {/* padding: 0 is to reset the default padding */}
      <Box sx={{ marginTop: "auto" }}>
        <List>
          <ListItem sx={{ padding: 0 }}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon sx={{ color: colors.textAndIcons }}>
                <Logout />
              </ListItemIcon>
              <Typography
                component="span"
                sx={{ color: colors.textAndIcons, fontSize: "20px" }}
              >
                Log Out
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
