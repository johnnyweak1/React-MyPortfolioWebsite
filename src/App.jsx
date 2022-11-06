import React from "react";
import MainPanel from "./components/MainPanel";
import PortfolioPanel from "./components/PortfolioPanel";
import Footer from "./components/Footer";
import { createContext } from "react";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import TopNavbar from "./components/TopNavbar"

export const ThemeContext = createContext(null);


function App()
{
    const [theme, setTheme] = useState('DS')
    return(
        <div id={theme}>
        <ThemeContext.Provider>
            <TopNavbar setTheme={setTheme}/>
            <MainPanel/>
            <PortfolioPanel setTheme={setTheme} theme={theme}/>
            <Footer/>
        </ThemeContext.Provider>  
        </div>
        
        )
    
}

export default App;