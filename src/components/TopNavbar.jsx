import React from "react";

function TopNavbar(props)
{
    function changeToPython()
    {
        props.setTheme("python")
    }

    function changeToWD()
    {
        props.setTheme("WD")
    }

    function changeToDS()
    {
        props.setTheme("DS")
    }

    return(
        <div className="navbar">
            <div className="navbar-row" onClick={changeToDS}><a>Data Science</a></div>
            <div className="navbar-row" onClick={changeToPython}><a>Python</a></div>
            <div className="navbar-row" onClick={changeToWD}><a>Web Development</a></div>
            
        </div>
    )
}

export default TopNavbar;