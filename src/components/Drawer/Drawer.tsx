import React from "react";
import { Link } from "react-router-dom";

import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

interface DrawerProps {
  drawerWitdh: number;
  isOpen: boolean;
  toggleDrawer: () => void;
}

const StyledMuiDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, width }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: width,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function Dashboard({
  drawerWitdh,
  isOpen,
  toggleDrawer,
}: DrawerProps) {
  return (
    <StyledMuiDrawer variant="permanent" open={isOpen} width={drawerWitdh}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <React.Fragment>
          <Link to="/solar">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Solar" />
            </ListItemButton>
          </Link>
          <Link to="/gas">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText primary="Gas" />
            </ListItemButton>
          </Link>
          <Link to="/hydro">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Hydro" />
            </ListItemButton>
          </Link>
          <Link to="/real-time">
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Real time information" />
            </ListItemButton>
          </Link>
        </React.Fragment>
      </List>
    </StyledMuiDrawer>
  );
}
