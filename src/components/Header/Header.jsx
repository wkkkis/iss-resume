import React from "react";
import s from "./Header.module.css";
import {Link} from 'react-scroll'

const Header = () => {
    return (
        <div className={s.mainHeader}>
            <div className={s.header}>
                <div className={s.logo}>
                    <span>ISS</span>
                </div>
                <div className={s.menu}>
                    <Link activeClass={s.active} offset={-65} to="contact" spy={true} smooth={true}>СВЯЗАТЬСЯ</Link>
                    <Link activeClass={s.active} offset={-65} to="portfolio" spy={true} smooth={true}>ПОРТФОЛИО</Link>
                    <Link activeClass={s.active} offset={-65} to="education" spy={true} smooth={true}>ОБРАЗОВАНИЕ</Link>
                    <Link activeClass={s.active} offset={-65} to="skills" spy={true} smooth={true}>НАВЫКИ</Link>
                    <Link activeClass={s.active} offset={-65} to="about" spy={true} smooth={true}>ОБО МНЕ</Link>
                </div>
            </div>
        </div>
    )
}
export default Header