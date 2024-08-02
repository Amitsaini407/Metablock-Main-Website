import * as React from "react"; import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import StarBorder from "@mui/icons-material/StarBorder";

// import PeopleIcon from '@mui/icons-material/People';
// import { Navigate, useNavigate } from "react-router-dom";

export default function Website({ closesidebar }) {

    const navigate = useNavigate();

    const Websitedata = [
        {
            name: 'Website Development',
            path: "./WebsiteDevelopment"
        },
        {
            name: 'Static Website',
            path: '/staticwebsite'

        },
        {
            name: 'Dynamic Website',
            path: '/DynamicWebsite'

        }
        ,
        {
            name: 'E-Commerce Website Single & Multi Wendor',
            path: '/Ecommerce-website'

        }
    ]

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

                <ListItemText primary="Website " />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List onClick={handleListItemClick} component="div" disablePadding>

                    {
                        Websitedata.map((item, index) => {
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