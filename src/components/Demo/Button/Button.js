import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled  } from "@mui/material/styles";
import MuiListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";


const CustomizedSlider = styled(Button)`
  color: #fff;
  background-color: #000;
  :hover {
    color: #000;
    background-color: #ccc;
  }
`;




const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application
        
      },
    },
  },
});

export default function ButtonApp() {


  return (
    <div>
      <Button variant="contained">This button has disabled ripples.</Button>
      <CustomizedSlider   >Helllo</CustomizedSlider>
    
      
    </div>
  );
}
