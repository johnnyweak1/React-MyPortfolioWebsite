import React from "react";
import Button from "@mui/material/Button"
import { useState } from "react";
import { ButtonGroup } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import ReposTable from "./ReposTable";

const buttonStyle = {
    borderRadius: 10,
    backgroundColor: "#90E0EF",
    padding: "18px 36px",
    fontSize: "18px",
    width: "200px",
    height: "100px",
    boxShadow: 0,
    "&:hover": {
        backgroundColor: "#CAF0F8",
        fontSize: "17px",
        boxShadow: 0,
    }
}

const clickedButton = {
    borderRadius: 10,
    backgroundColor: "#CAF0F8",
    padding: "18px 36px",
    fontSize: "18px",
    width: "200px",
    height: "100px",
    boxShadow: 0,
    "&:hover": {
        backgroundColor: "#CAF0F8",
        fontSize: "17px",
        boxShadow: 0,
    }
}

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