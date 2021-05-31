import React, {useEffect, useState} from "react";
import s from "./Header.module.css";
import {Link} from 'react-scroll'
import MenuIcon from "@material-ui/icons/Menu"
import Fab from "@material-ui/core/Fab"

export default function Header() {

    const [state, setState] = useState(false)

    const [classFor, setClassFor] = useState(false)

    let activeAdaptiveMenu = () => {
        setState(!state)
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

    return (
        <div className={classFor ? s.mainActiveHeader : s.mainHeader}>
            <div className={s.header}>
                <div className={s.logo}>
                    <span>ISS</span>
                </div>
                <div className={s.mainMenu}>
                    <div className={state ? s.mainMenuBurgerBlock : ""}>
                        <div className={state ? s.doAdaptive : s.menu} >
                            <Link onClick={state ? activeAdaptiveMenu : ""} offset={-65} to="contact" spy={true}
                                  smooth={true}>СВЯЗАТЬСЯ</Link>
                            <Link onClick={state ? activeAdaptiveMenu : ""} offset={-65} to="portfolio" spy={true}
                                  smooth={true}>ПОРТФОЛИО</Link>
                            <Link onClick={state ? activeAdaptiveMenu : ""} offset={-65} to="education" spy={true}
                                  smooth={true}>ОБРАЗОВАНИЕ</Link>
                            <Link onClick={state ? activeAdaptiveMenu : ""} offset={-65} to="skills" spy={true}
                                  smooth={true}>НАВЫКИ</Link>
                            <Link onClick={state ? activeAdaptiveMenu : ""} offset={-65} to="about" spy={true}
                                  smooth={true}>ОБО МНЕ</Link>
                            {state &&
                                <div className={s.menuDarkMode}>
                                    <a href="https://github.com/wkkkis">github</a>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={s.menuBarBlock}>
                        <Fab onClick={activeAdaptiveMenu} className={s.menuButton}
                             variant="extended"
                             size="small"
                             aria-label="menu">
                            <MenuIcon/>
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}