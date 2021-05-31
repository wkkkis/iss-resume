import React from "react";
import s from "./Header.module.css";
import {Link} from "react-scroll";
import {CSSTransition} from "react-transition-group";
import "./styles.css"

import active from "../../assets/images/free-icon-menu.svg"
import close from "../../assets/images/free-icon-close.svg"

import call from "../../assets/images/- (1).svg"
import portfolio from "../../assets/images/coding (1).svg"
import education from "../../assets/images/graduation-hat.svg"
import skills from "../../assets/images/pencil.svg"
import aboutMe from "../../assets/images/user.svg"
import whiteDark from "../../assets/images/switch.svg"

export default function HeaderBurgerBar({menu, activeAdaptiveMenu, classFor}) {
    return (
        <>
            <div className={classFor ? s.mainTransparentBar : s.mainMenuBar}>
                <div className={s.miniMenuBar}>
                    <div className={s.logo}>
                        <span>ISS</span>
                    </div>
                    <div className={s.menuBurgerBar}>
                        {menu ?
                            <div className={s.activeBar} onClick={() => activeAdaptiveMenu(false)}>
                                <img src={close} width="22px" alt=""/>
                            </div>
                            : <div className={s.closeBar} onClick={() => activeAdaptiveMenu(true)}>
                                <img src={active} width="25px" alt=""/>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <CSSTransition in={menu} classNames="alert" timeout={300} unmountOnExit>
                <div style={{
                    position: 'fixed',
                    left: '50%',
                    top: '230px',
                    transform: 'translate(-50%, -50%)'
                }} className={s.mainLinkBlockActive}>
                    <Link onClick={() => activeAdaptiveMenu(false)} offset={-65} to="contact" spy={true}
                          smooth={true}>
                        <img src={call} width="20px" alt=""/>
                        СВЯЗАТЬСЯ
                    </Link>
                    <Link onClick={() => activeAdaptiveMenu(false)} offset={-65} to="portfolio" spy={true}
                          smooth={true}>
                        <img src={portfolio} width="20px" alt=""/>
                        ПОРТФОЛИО
                    </Link>
                    <Link onClick={() => activeAdaptiveMenu(false)} offset={-65} to="education" spy={true}
                          smooth={true}>
                        <img src={education} width="20px" alt=""/>
                        ОБРАЗОВАНИЕ
                    </Link>
                    <Link onClick={() => activeAdaptiveMenu(false)} offset={-65} to="skills" spy={true}
                          smooth={true}>
                        <img src={skills} width="20px" alt=""/>
                        НАВЫКИ
                    </Link>
                    <Link onClick={() => activeAdaptiveMenu(false)} offset={-65} to="about" spy={true}
                          smooth={true}>
                        <img src={aboutMe} width="20px" alt=""/>
                        ОБО МНЕ
                    </Link>
                    <div className={s.darkLinkBlock}>
                        <div className={s.darkLinkMiniBlock}>
                            <img src={whiteDark} width="35px" alt=""/>
                            <span>
                                Switch theme
                            </span>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}