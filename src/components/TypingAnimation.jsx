import React from "react"
import Typed from "typed.js"
import {useEffect, useRef} from "react"

function TypingAnimation()
{
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Data Science.", "Web Developent.", "Python"],
            startDelay: 200,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 3000,
            loop: true
        })

        return () => {
            typed.destroy();
        }
    }, [])

    return(
        <div className="container">
            <h4><span ref={el}></span></h4>
            
        </div>
    )
    
}

export default TypingAnimation;