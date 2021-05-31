import React, {useEffect, useState} from "react";
import s from "./Header.module.css";
import {Link} from 'react-scroll'

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
                    <div className={state ? s.doAdaptive : s.menu}>
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
                    </div>
                    {!state ?
                        <div onClick={activeAdaptiveMenu} className={s.burgerMenu}>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        : <div onClick={activeAdaptiveMenu} className={s.closeMenu}>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}