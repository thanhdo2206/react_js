import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import { NavLink } from "react-router-dom";
// import { white } from '@mui/material/colors';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0px 16px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const ListItemCustomize = styled(ListItem)`
  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
  &.Mui-selected {
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

const IconButtonLeft = styled(IconButton)`
  color: #fff;
  :hover {
    background-color: rgb(186 179 179 / 40%);
  }
`;

const cssNavLink = {
  width: "100%",
  color: "#fff",
  textDecoration: "none",
};

const cssIcon = { color: "#fff", fontSize: "22px" };

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* side bar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e1f21",
            color: "#ffff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            component="img"
            sx={{
              maxWidth: "80px",
              float: "left",
              flex: 1,
            }}
            alt="Logo"
            src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6622ad572b5223bcb1ad696eae8f988e5dd04631/Asana-Logo-Horizontal-Coral-White.svg"
          />
          <IconButtonLeft onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButtonLeft>
        </DrawerHeader>

        <List>
          <ListItemCustomize
            disablePadding
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <NavLink to="/main-page/home" style={cssNavLink}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon sx={cssIcon}></HomeOutlinedIcon>
                </ListItemIcon>
                <span>Home</span>
              </ListItemButton>
            </NavLink>
          </ListItemCustomize>

          <ListItemCustomize
            disablePadding
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <NavLink to="/main-page/my-task" style={cssNavLink}>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutlineOutlinedIcon
                    sx={cssIcon}
                  ></CheckCircleOutlineOutlinedIcon>
                </ListItemIcon>
                <span>My Task</span>
              </ListItemButton>
            </NavLink>
          </ListItemCustomize>

          <ListItemCustomize
            disablePadding
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <NavLink to="#" style={cssNavLink}>
              <ListItemButton>
                <ListItemIcon>
                  <OutlinedFlagIcon sx={cssIcon}></OutlinedFlagIcon>
                </ListItemIcon>
                <span>Reporting</span>
              </ListItemButton>
            </NavLink>
          </ListItemCustomize>
        </List>

        <Divider sx={{ borderColor: "#f5f4f361" }} />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>

      <Main open={open}>
        {/* header (toolbar) */}
        <AppBar
          position="fixed"
          open={open}
          sx={{ backgroundColor: "#fff", boxShadow: "none", color: "#000" }}
        >
          <Toolbar>
            <IconButton
              onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              {theme.direction === "ltr" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
            <p>toolbar </p>
            <p>Avatar</p>
          </Toolbar>

          {/* content */}
        </AppBar>
        <DrawerHeader />
        <Outlet></Outlet>
      </Main>
    </Box>
  );
}
