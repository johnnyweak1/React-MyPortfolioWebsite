import React from "react";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import ReposTable from "./ReposTable";


function PortfolioPanel(props){
    const [repo, repoState] = useState('DS');
    const matches = useMediaQuery("(min-width:1060px)");

    function changeToPython()
    {
        repoState("python")
        props.setTheme("python")
    }

    function changeToWD()
    {
        repoState("WD")
        props.setTheme("WD")
    }

    function changeToDS()
    {
        repoState("DS")
        props.setTheme("DS")
    }


    return(
        <div className="panel portfolio">
            <div className="header">
                <h3 className="page-header">My Portfolio</h3>
        </div>
            <ReposTable state={props.theme}/>
        </div>
    )
}

export default PortfolioPanel;