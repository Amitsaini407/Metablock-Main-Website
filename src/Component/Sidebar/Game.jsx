import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import GameCasinoList from "./GameCasinoList"
import CasinoGames from "./CasinoGames/Casinogames";


const GAME = [
    {
        name: "Game Development",
        path: "/GameDevelopment",
    },

    {
        name: "Metaverse Games Development",
        path: "/MetaverseGame",
    },
    // {
    //     name: "Web3 Games Development",
    //     path: "/BlockchainGame",
    // },
]



// import { Navigate, useNavigate } from "react-router-dom";

export default function Game({ closesidebar }) {
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

    const handleclicknew = () => {
        setOpen(false)
        closesidebar();
    }

    return (
        <List sx={{ paddingBlock: '0px' }}>
            <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
                {/* <ListItemIcon>
          <KeyboardBackspaceIcon sx={{ color: "white" }} />
        </ListItemIcon> */}

                <ListItemText primary="Game" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                    {
                        GAME.map((item, index) => {
                            return (


                                <ListItemButton sx={{ pl: 4 }}
                                    onClick={() => { navigate(item.path); handleclicknew(); }}
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


                    <ListItemButton sx={{ pl: 2 }}
                    >
                        <CasinoGames casinogamelist={handleListItemClick} />
                    </ListItemButton>


                </List>
            </Collapse >
        </List >
    );
}