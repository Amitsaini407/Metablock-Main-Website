import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom";


const AppData = [
  {
    name: "Mobile Development",
    path: "./ApplicationDevelopment"
  },

  {
    name: "Cab Booking Apps",
    path: "/CabBookingApps",
  },
  {
    name: "Grocery Apps",
    path: "/GroceryApps",
  },
  {
    name: "Travelling Apps",
    path: "/TravellingApps",
  },
  {
    name: "Chatting Apps",
    path: "/ChattingApps",
  },
  {
    name: "Fitness Apps",
    path: "/FitnessApps",
  },
  {
    name: "Rental Apps",
    path: "/RentalApps",
  },
  {
    name: "Dating Apps",
    path: "/DatingApps",
  },
  {
    name: "Astrology Apps",
    path: "/AstrologyApps",
  },
  {
    name: "Food delivery Apps",
    path: "/FooddeliveryApps",
  },
  {
    name: "Social Media Apps",
    path: "/SocialMediaApps",
  },
  {
    name: "Learning Managment Apps",
    path: "/LearningManagmentApps",
  },
  {
    name: "Ecommerce Apps",
    path: "/EcommerceApps",
  },
  {
    name: "Multivendor Home Service Apps",
    path: "/MultivendorHomeServiceApps",
  },
];


export default function Application({ closesidebar }) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = () => {
    closesidebar();
    setOpen(false)
  };

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        {/* <ListItemIcon>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon> */}

        <ListItemText primary="Application" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List onClick={handleListItemClick} component="div" disablePadding>

          {
            AppData.map((item, index) => {
              return (


                <ListItemButton sx={{ pl: 4 }}
                  onClick={() => navigate(item.path)}
                >
                  {/* <PeopleIcon /> */}
                  {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
                  <ListItemText primary={item.name} />
                </ListItemButton>

              )
            })
          }



        </List>
      </Collapse>
    </List>
  );
}