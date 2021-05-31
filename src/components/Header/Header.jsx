import React, {useEffect, useState} from "react";
import HeaderMainBar from "./HeaderMainBar";
import HeaderBurgerBar from "./HeaderBurgerBar";

export default function Header() {

    const [state, setState] = useState(false)
    const [classFor, setClassFor] = useState(false)
    const [menu, setMenu] = useState(false)

    let activeAdaptiveMenu = (bool) => {
        setMenu(bool)
    }

    let scrollHandler = (e) => {
        if (e.target.documentElement.scrollTop > 10) {
            setClassFor(true)
        } else {
            setClassFor(false)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    useEffect(() => {
        if(window.matchMedia("(max-width: 900px)").matches){
            console.log("render")
            setState(false)
        }else{
            setState(true)
        }
    }, [window.matchMedia("(max-width: 900px)").matches])

    return (
        <>
            {state
                ? <HeaderMainBar classFor={classFor}/>
                : <HeaderBurgerBar menu={menu} classFor={classFor} activeAdaptiveMenu={activeAdaptiveMenu}/>
            }
        </>
    )
}