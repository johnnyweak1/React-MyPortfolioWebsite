import React from "react";
import Hello from "./Hello"

function MainPanel()
{
    return (
        <div className="panel">
            <div className="panel side left">
                <Hello/>
            </div>
            <div className="panel side right">
                
            </div>
        </div>
    )
}

export default MainPanel;