import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const MetaData = [

  {
    name: "Metaverse Development",
    path: "/MetaverseDevelopment",
  },
  {
    name: "Metaverse Game Development",
    path: "/MetaverseGameDevelopment",
  },
  {
    name: "Metaverse NFT Marketplace Development",
    path: "/MetaverseNFTMarketplaceDevelopment",
  },
  {
    name: "Metaverse Virtual Showroom  Development",
    path: "/MetaverseVirtualShowroomDevelopment",
  },
  {
    name: "Metaverse Event Platform Development",
    path: "/MetaverseEventPlatformDevelopment",
  },
  {
    name: "Metaverse Avatar Development",
    path: "/MetaverseAvatarDevelopment",
  },
  {
    name: "Metaverse Social Media Platform Development",
    path: "/MetaverseSocialMediaPlatformDevelopment",
  },
  {
    name: "Metaverse Real Estate Development",
    path: "/MetaverseRealEstateDevelopment",
  },
  {
    name: "Metaverse Virtual Land Development",
    path: "/MetaverseVirtualLandDevelopment",
  },
  {
    name: "Metaverse Launchpad Development",
    path: "/MetaverseLaunchpadDevelopment",
  },
];

export default function Metaverse({ closesidebar }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
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

        <ListItemText primary="Metaverse" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List onClick={handleListItemClick} component="div" disablePadding>

          {
            MetaData.map((item, index) => {
              return (


                <ListItemButton key={index} sx={{ pl: 4 }}
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