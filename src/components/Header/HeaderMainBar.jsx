import React from "react";
import {Link} from "react-scroll";
import s from "./Header.module.css"

export default function HeaderMainBar({classFor}) {
    return (
        <div className={classFor ? s.mainTransparentBar : s.mainMenuBar}>
            <div className={s.miniMenuBar}>
                <div className={s.logo}>
                    <span>ISS</span>
                </div>
                <div className={s.miniMenuLink}>
                    <Link offset={-65} to="contact" spy={true}
                          smooth={true}>СВЯЗАТЬСЯ</Link>
                    <Link offset={-65} to="portfolio" spy={true}
                          smooth={true}>ПОРТФОЛИО</Link>
                    <Link offset={-65} to="education" spy={true}
                          smooth={true}>ОБРАЗОВАНИЕ</Link>
                    <Link offset={-65} to="skills" spy={true}
                          smooth={true}>НАВЫКИ</Link>
                    <Link offset={-65} to="about" spy={true}
                          smooth={true}>ОБО МНЕ</Link>
                </div>
            </div>
        </div>
    )
}