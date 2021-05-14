import React from "react";
import s from "./Footer.module.css"
import FooterForm from "./FooterForm/FooterForm";
import design from "../../assets/images/design.png";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import telegram from "../../assets/images/telegram.png"
import whatsapp from "../../assets/images/whatsapp.png"
import github from "../../assets/images/github.png"

export default function Footer() {
    return (
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
                            <img src={design} alt="" width="100px"/>
                        </div>
                    </div>
                    <div className={s.contactsFooter}>
                        <FooterForm/>
                    </div>
                </div>
            </div>
            <div className={s.socialNetwork}>
                <div className={s.block}>
                    <a href="https://github.com/wkkkis">
                        <img className={s.github} src={github} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100026994910022">
                        <img className={s.facebook} src={facebook} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/layryc/">
                        <img className={s.instagram} src={instagram} alt=""/>
                    </a>
                    <a href="https://t.me/hagelu">
                        <img className={s.telegram} src={telegram} alt=""/>
                    </a>
                    <a href="https://wa.me/+996500100805">
                        <img className={s.whatsapp} src={whatsapp} alt=""/>
                    </a>
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