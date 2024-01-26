'use client'
import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    }
});

export default function Burger() {

    //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
    const [open, setState] = useState(false);

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open:any) => (event:any) => {
        if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
        ) {
        return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    return (
        <ThemeProvider theme={theme}>
            <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
                p:0,
                display: {
                    '@media (min-width: 640px)': {display: 'none'},
                    '@media (max-width: 640px)': {display:'block'}
                }
            }}
            >
                <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            // onOpen={toggleDrawer(true)}
            >
            {/* The inside of the drawer */}
            <Box
                sx={{
                p: 2,
                // px: 10,
                height: 1,
                width: "250px",
                background: "linear-gradient(to bottom, #E50AA7, rgba(208, 17, 204, 0.6))",
                color: "#fff",
                fontFamily: "Poppins, sans-serif",
                }}
            >
                {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                <IconButton sx={{ mb: 2, color: "#fff" }}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>

                <Divider sx={{ mb: 2, background: "#fff" }} />

                <Box sx={{ mb: 2 }}>
                    <ListItemButton>
                        <ListItemText primary="Home" sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="All NFTs" sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="Team" sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="Home" sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="Terms & Co." sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="Contact" sx={{ fontFamily: 'Poppins, sans-serif' }}/>
                    </ListItemButton>
                </Box>

                <Box
                    sx={{
                        width: "150px",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translate(-50%, 0)",
                        fontFamily: "Poppins",
                    }}
                    >
                    <Button className='focus:bg-[#07003E] hover:bg-[#07003E]' variant="contained" sx={{ mb: 2, width: 1 }}>
                        Gen in touch
                    </Button>
                </Box>
            </Box>
            </Drawer>
        </ThemeProvider>
    )
}
