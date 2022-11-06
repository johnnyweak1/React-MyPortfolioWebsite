import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";


const theme = createTheme({
    palette: {
      secondary: {
        main: '#FFFFFF',
      },
    },
  });


const buttonStyle = {
    backgroundColor: "#CAF0F8",
    color: 'white',
    width: "100px",
    height: "50px",
    "&:hover": {
        backgroundColor: "#00b4d8",
        borderColor: "white"
    }
}

function Navbar()
{
    const matches = useMediaQuery("(min-width:1060px)");

    return(
        <div className="navbar">
            <ThemeProvider theme={theme}>
                <ButtonGroup 
                    orientation={matches ?  "horizontal" : "vertical"}
                    variant="text"
                    color="secondary"
                    >
                        <Button sx={buttonStyle}>Portfolio</Button>
                        <Button sx={buttonStyle}>CV</Button>
                        <Button sx={buttonStyle}>About Me</Button>
                        <Button sx={buttonStyle}>Contact</Button>
                        
                </ButtonGroup>
            </ThemeProvider>
            
        </div>
    )
}

export default Navbar;