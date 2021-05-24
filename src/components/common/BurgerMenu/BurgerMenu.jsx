import React from "react";
import "./burgerMenu.scss"

export default function BurgerMenu({activeAdaptiveMenu}) {
    return (
        <>
            <input type="checkbox" id="hi" />
            <label onClick={activeAdaptiveMenu} className="menu" htmlFor="hi">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
        </>
    )
}