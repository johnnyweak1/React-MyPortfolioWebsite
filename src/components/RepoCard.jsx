import React from "react"

function RepoCard(props)
{
    const [description, setDescription] = React.useState(false);
    const [GitButtonState, setButton] = React.useState(false);

    function handleButtonMouse()
    {
        setButton(true);
    }

    function handleButtonMouseOut()
    {
        setButton(false);
    }

    function handleMouseOver()
    {
        setDescription(true)
    }
    function handleMouseOut()
    {
        setDescription(false)
    }
    function handleClick()
    {
        window.open(props.project.link, '_blank', 'noopener,noreferrer')
    }
    
    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={description ? "CardDesc" : "Card"}>
            <div className="CardTitle">
                <h5>
                    {description ? 
                    <ul>
                        <dt>Technologies: </dt>
                        <ul>
                        {props.project.technologies.map(item => <li>{item}</li>)}
                        </ul>
                    </ul> : 
                    props.project.title}
                </h5>
            </div>
            <div className="CardBody">
                <h5>
                {description ? 
                <button
                className={GitButtonState ? "GitButtonMouse" : "GitButton"}
                onMouseOver={handleButtonMouse}
                onMouseOut={handleButtonMouseOut}
                onClick={handleClick}>Github</button> 
                : props.project.description
                }</h5>
            </div>
        </div>
    )
}

export default RepoCard;