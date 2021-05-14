import React from "react";
import s from "./Footer.module.css"
import FooterForm from "./FooterForm/FooterForm";
import design from "../../assets/images/design.png";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import telegram from "../../assets/images/telegram.png"
import whatsapp from "../../assets/images/whatsapp.png"
import github from "../../assets/images/github.png"

export default function Footer(){
    return(
        <>
            <div id="contact" className={s.mainFooter}>
                <div className={s.footer}>
                    <div className="textFooter">
                    <span>
                        Контакты
                    </span>
                        <div className={s.paragraph}>
                            <p>
                                Вы работаете над чем-то великим?
                                Я бы с удовольствием помог это сделать!
                                Напишите мне письмо и начните свой проект прямо сейчас!
                                Просто сделай это.
                            </p>
                        </div>
                        <div className={s.design}>
                            <img src={design} alt="" width="100px" />
                        </div>
                    </div>
                    <div className={s.contactsFooter}>
                        <FooterForm/>
                    </div>
                </div>
            </div>
            <div className={s.socialNetwork}>
                <div className={s.block}>
                    <img src={facebook} alt=""/>
                    <img src={instagram} alt=""/>
                    <img src={telegram} alt=""/>
                    <img src={whatsapp} alt=""/>
                    <img src={github} alt=""/>
                </div>
            </div>
            <div className={s.copyright}>
                <span>
                    Copyright 2021 ISS.
                </span>
            </div>
        </>
    )
}