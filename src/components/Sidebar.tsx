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
import { SidebarProps, NavListItem } from "../types/Sidebar.types";
import colors from "../colors/colors";
import ProfileCard from "./ProfileCard";
import Logo from "./Logo";
import { user } from "../data/data";

const Sidebar: React.FC<SidebarProps> = ({ navList }) => {
  /* Sidebar Measurements */
  const SIDEBAR_WIDTH = 287;
  const SIDEBAR_MIN_HEIGHT = 829;

  /* Sidebar Nav */
  function Nav(list: NavListItem[] | undefined): JSX.Element {
    return (
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {list?.map((elem) => {
          const Icon = elem.icon;
          return (
            /* Link tag must be added */
            <ListItem key={elem.label} sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemIcon sx={{ color: colors.white }}>
                  <Icon />
                </ListItemIcon>
                <Typography sx={{ color: colors.white, fontSize: "20px" }}>
                  {elem.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    <Box
      component="aside"
      sx={{
        width: `${SIDEBAR_WIDTH}px`,
        minHeight: `${SIDEBAR_MIN_HEIGHT}px`,
        backgroundColor: colors.primary,
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "32px",
        boxShadow: `10px 0 10px ${colors.shadowSidebar}`,
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

      {Nav(navList)}

      {/* padding: 0 is to reset the default padding */}
      <Box sx={{ marginTop: "auto" }}>
        <List>
          <ListItem sx={{ padding: 0 }}>
            {/* Link tag must be added */}
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon sx={{ color: colors.white }}>
                <Logout />
              </ListItemIcon>
              <Typography
                component="span"
                sx={{ color: colors.white, fontSize: "20px" }}
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
