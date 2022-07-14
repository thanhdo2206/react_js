import React from "react";
import SideBar from "../../components/MainPage/SideBar/SideBar";
import SideBarM from "../../components/MainPage/SideBar/SideBarM";
import Content from "../../components/MainPage/Content/Content";
import Box from "@mui/material/Box";


const drawerWidth = 240;

export default function MainPage() {
  const [open, setOpen] = React.useState(true);

  
  
  return (
    <Box sx={{ display: "flex" }}>
      <SideBarM
        drawerWidth={drawerWidth}
        setOpen={setOpen}
        open={open}
        
      ></SideBarM>
      
      <Content
        drawerWidth={drawerWidth}
        setOpen={setOpen}
        open={open}
        
      ></Content>
      
    </Box>
  );
}
