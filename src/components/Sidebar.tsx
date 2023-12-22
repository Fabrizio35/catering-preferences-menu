import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { Logout } from "@mui/icons-material";

type ListNav = {
  label: string;
  icon: React.ElementType;
};

interface Props {
  listNav?: ListNav[];
}

const Sidebar: React.FC<Props> = ({ listNav }) => {
  const Nav = () => {
    return (
      <List
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
      >
        {listNav?.map((elem) => {
          const Icon = elem.icon;
          return (
            <ListItem key={elem.label} sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }}>
                <ListItemIcon sx={{ color: "#FFFFFF" }}>
                  <Icon />
                </ListItemIcon>
                <Typography sx={{ color: "#FFFFFF", fontSize: "20px" }}>
                  {elem.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <Box
      sx={{
        maxWidth: "287px",
        height: "829px",
        backgroundColor: "#F86260",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        padding: "32px",
        boxShadow: "10px 0 10px #88064D4D",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        fontSize="30px"
        fontWeight="700"
        color="#FFFFFF"
      >
        Logo
      </Typography>

      <Box sx={{ display: "flex", gap: "8px", marginY: "64px" }}>
        <Box
          sx={{
            width: "71px",
            height: "71px",
            borderRadius: "100%",
            backgroundColor: "#FFFFFF",
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
            sx={{ fontSize: "16px", color: "#FFFFFF" }}
          >
            Username
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: "12px", color: "#FFFFFF", opacity: "50%" }}
          >
            Edit profile
          </Typography>
        </Box>
      </Box>

      <Nav />

      <Box sx={{ marginTop: "auto" }}>
        <List>
          <ListItem sx={{ padding: 0 }}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon sx={{ color: "#FFFFFF" }}>
                <Logout />
              </ListItemIcon>
              <Typography
                component="span"
                sx={{ color: "#FFFFFF", fontSize: "20px" }}
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
