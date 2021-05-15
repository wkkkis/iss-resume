import React, {useState} from "react";
import s from "./Header.module.css";
import {Link} from 'react-scroll'

export default function Header() {

    const [state, setState] = useState(false)

    let activeAdaptiveMenu = () => {
        setState(true)
    }
    let closeAdaptiveMenu = () => {
        setState(false)
    }

    return (
        <div className={s.mainHeader}>
            <div className={s.header}>
                <div className={s.logo}>
                    <span>ISS</span>
                </div>
                <div className={s.mainMenu}>
                    <div className={state ? s.doAdaptive : s.menu}>
                        <Link onClick={closeAdaptiveMenu} activeClass={s.active} offset={-65} to="contact" spy={true}
                              smooth={true}>СВЯЗАТЬСЯ</Link>
                        <Link onClick={closeAdaptiveMenu} activeClass={s.active} offset={-65} to="portfolio" spy={true}
                              smooth={true}>ПОРТФОЛИО</Link>
                        <Link onClick={closeAdaptiveMenu} activeClass={s.active} offset={-65} to="education" spy={true}
                              smooth={true}>ОБРАЗОВАНИЕ</Link>
                        <Link onClick={closeAdaptiveMenu} activeClass={s.active} offset={-65} to="skills" spy={true}
                              smooth={true}>НАВЫКИ</Link>
                        <Link onClick={closeAdaptiveMenu} activeClass={s.active} offset={-65} to="about" spy={true}
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
                        : <div onClick={closeAdaptiveMenu} className={s.closeMenu}>

                        </div>
                    }
                </div>
            </div>
        </div>
    )
}