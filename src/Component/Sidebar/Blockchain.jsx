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
import Blockchain1 from "./BlockChainInner/Blockchain1";
import Website from "./Website";
import Launchapd from "./BlockChainInner/Launchpad";
import Nft from "./BlockChainInner/NFT";
import DEFI from "./BlockChainInner/Defi";
import Dex from "./BlockChainInner/DEX";
import TOken from "./BlockChainInner/Token";
import Wallet from "./BlockChainInner/Wallet";
// import { Navigate, useNavigate } from "react-router-dom";


const BlockChain = [
  {
    name: "",
    path: ""
  },
  {
    name: "Smart Contract Developemnt",
    path: "/SmartContractDevelopemnt",
  },
  {
    name: "Private / Public Blockchain Development",
    path: "/Private/PublicBlockchainDevelopment",
  },
  {
    name: "DAO Blockchain Developmnent",
    path: "/DAOBlockchainDevelopmnent",
  },
  {
    name: "Blockchain in SupplyChain",
    path: "/BlockchainSupply",
  },
  {
    name: "Blockchain in Voting ",
    path: "/BlockchainVoting",
  },
  {
    name: "Blockchain in Live Aution",
    path: "/BlockchainLiveAution",
  },
  {
    name: "Blockchain in Document Verifiction",
    path: "/BlockchainDocument",
  },
  {
    name: "Blockchain in  Identity Verifiction",
    path: "/BlockchainIdentityVerifiction",
  },
];

export default function Blockchain({ closesidebar }) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = () => {
    closesidebar();
  };

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        {/* <ListItemIcon>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon> */}

        <ListItemText primary="BlockChain " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/* <ListItemButton   >
                                   
                                    <ListItemText >
            Blockchain Development

                                    </ListItemText >

                                </ListItemButton> */}
          <Blockchain1 blockchainlists={handleListItemClick} />
          <Launchapd blockchainlists={handleListItemClick} />
          <Nft blockchainlists={handleListItemClick} />
          <DEFI blockchainlists={handleListItemClick} />
          <Dex blockchainlists={handleListItemClick} />
          <TOken blockchainlists={handleListItemClick} />
          <Wallet blockchainlists={handleListItemClick} />
        </List>
      </Collapse>
    </List>
  );
}