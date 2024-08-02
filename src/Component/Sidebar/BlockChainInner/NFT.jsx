import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarBorder from "@mui/icons-material/StarBorder";

import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";


const NFT = [
  {
    name: "NFT Token Development",
    path: "/NFTToken",
  },
  {
    name: "NFT Marketplace Development",
    path: "/NFTMarketplace",
  },
  {
    name: "NFT Crosschain Platfrom Development",
    path: "/NFTCrosschainPlatfromDevelopment",
  },
  { name: "NFT Minting Development", path: "/NFTMintingDevelopment" },
  {
    name: "NFT Art Marketplace Development",
    path: "/NFTArtMarketplaceDevelopment",
  },
  {
    name: "NFT Music Marketplace Development",
    path: "/NFTMusicMarketplaceDevelopment",
  },
  {
    name: "NFT Fantasy Sports Platform Development",
    path: "/NFTFantasySportsPlatformDevelopment",
  },
  { name: "NFT Lending Platform Development", path: "/NFTLendingPlatform" },
  { name: "Binance NFT Marketplace Development", path: "/BinanceNFT" },
  // { name: "Polygon NFT Marketplace Development", path: "/PolygonNFT" },
];

export default function Nft({ blockchainlists }) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  const handlenewfunction = () => {
    blockchainlists();
    setOpen(false)
  }

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        {/* <ListItemIcon>
        <KeyboardBackspaceIcon sx={{ color: "white" }} />
      </ListItemIcon> */}

        <ListItemText primary="NFT Development " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List onClick={handlenewfunction} component="div" disablePadding>

          {
            NFT.map((item, index) => {
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