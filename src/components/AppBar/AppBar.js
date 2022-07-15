import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open, drawerWidth  }) => ({
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

