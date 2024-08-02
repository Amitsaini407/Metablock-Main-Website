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


const casinogamesdevelopment = [

    {
        name: "Ludo Game Development",
        path: "/LudoGameDevelopment"
    },
    {
        name: "Rummy Game Development",
        path: "/RummyGameDevelopment"
    },
    {
        name: "Teenpatti Game Development",
        path: "/TeenpattiGameDevelopment"
    },
    {
        name: "Dragon & Tiger Game Development",
        path: "/DragonTiger"
    },
    {
        name: "Poker Game Development",
        path: "/PokerGameDevelopment"

    },
    {
        name: "Baccarat Game Development",
        path: "/BaccaratGameDevelopment"
    },
    {
        name: "Roulette Game Development",
        path: "/RouletteGameDevelopment"
    },
    {
        name: "Tournament Development",
        path: "/TournamentDevelopment"
    },
    {
        name: "Andar Bahar Game Development",
        path: "/AndarBaharGameDevelopment"
    },
    {
        name: "Fantasy Cricket Game Development",
        path: "/FantasyCricketGameDevelopment"
    }
];

export default function CasinoGames({ casinogamelist }) {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    // const navigate = useNavigate()
    const handleClick = () => {
        setOpen(!open);
    };

    const handlenewfunction = () => {
        casinogamelist();
        setOpen(false)
    }

    return (
        <List sx={{ paddingBlock: '0px' }}>
            <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>


                <ListItemText primary="Casino Games Development " />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List onClick={handlenewfunction} component="div" disablePadding>
                    {
                        casinogamesdevelopment.map((item, index) => {
                            return (


                                <ListItemButton sx={{ pl: 4 }}
                                    onClick={() => navigate(item.path)}
                                >

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