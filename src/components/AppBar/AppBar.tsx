import React from "react";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "../Drawer/Drawer.tsx";
import { styled } from "@mui/material/styles";

const DRAWERWIDTH: number = 260;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledMuiAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWERWIDTH,
    width: `calc(100% - ${DRAWERWIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBar() {
  const [isOpen, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <StyledMuiAppBar position="absolute" open={isOpen}>
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(isOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            AxGrid
          </Typography>
        </Toolbar>
      </StyledMuiAppBar>
      <Drawer
        drawerWitdh={DRAWERWIDTH}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}
