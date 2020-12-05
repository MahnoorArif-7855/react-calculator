import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FadeTransform } from "react-animation-components";

export default function Help(props){
    const googleStyle = {
        backgroundColor : "var(--gBlue)",
        color : "var(--gaWhite)"
    };
    const androidStyle = {
        backgroundColor : "var(--aGreen)",
        color : "var(--gaWhite)"
    };
    return(
        <FadeTransform 
        in
        transformProps = {{
            exitTransform : "scale(0.5) translateY(-50%)"
        }}
        >
            <div className="App">
            <div className="calculator">
            <div
            style = {
                props.theme ==="google-theme"
                ? googleStyle
                : props.theme === "android"
                ?androidStyle
                :null
            }
            className= "top-pane"
            >
                <div className="backButton">
                    <Link to="/main">
                        <FontAwesomeIcon icon ={faArrowLeft} color ="var(--mainWhite)"/> 
                    </Link>
                </div>
                <div className="title">Help</div>
            </div>
            <div className="helpSec">
                <ul>
                    <li>You can do simple or advanced calculations with your phone's Calculator app </li>
                    <li>Important: Settings can vary by phone. For more info, contact your device manufacturer.</li>
                    <p>To use advanced operators and functions, tap the bar on the right or hold your phone sideways.

You'll see buttons including percentage (%), pi (π), superscript for exponents (^), and parentheses for grouping. Functions include cosine (cos), tangent (tan), logarithm (ln, log), and square root (√).
To switch between degree and radian units, tap DEG or RAD. (The current mode shows at the top left.)
To see more buttons, tap INV.
You can use mathematical constants, like pi and Euler's number. You can make complicated calculations, including trigonometric, logarithmic, exponential, and factorial calculations.

If your result is a long number, you can scroll to see more digits</p>
                </ul>
                </div>
            </div> 
            </div>   
        
        </FadeTransform>
    );
    
}