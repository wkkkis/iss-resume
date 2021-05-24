import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-scroll'
import "./sidebar.css"

export default props => {
    return (
        <Menu {...props}>
            <Link className="menu-item" offset={-65} to="contact" spy={true}
                  smooth={true}>СВЯЗАТЬСЯ</Link>
            <Link className="menu-item" offset={-65} to="portfolio" spy={true}
                  smooth={true}>ПОРТФОЛИО</Link>
            <Link className="menu-item" offset={-65} to="education" spy={true}
                  smooth={true}>ОБРАЗОВАНИЕ</Link>
            <Link className="menu-item" offset={-65} to="skills" spy={true}
                  smooth={true}>НАВЫКИ</Link>
            <Link className="menu-item" offset={-65} to="about" spy={true}
                  smooth={true}>ОБО МНЕ</Link>
        </Menu>
    );
};