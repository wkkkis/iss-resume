import React from "react";
import s from "./AboutMe.module.css"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import telegram from "../../assets/images/telegram.png"
import whatsapp from "../../assets/images/whatsapp.png"
import github from "../../assets/images/github.png"
import cv from "../../assets/cv/cv.pdf"

export default function AboutMe() {
    return (
        <div id="about" className={s.mainAboutMe}>
            <div className={s.aboutMe}>
                <div className={s.about}>
                    <div className={s.fullName}>
                        <span>Привет, Я Исхак 👋</span>
                    </div>
                    <div className={s.paragraph}>
                        <p>
                            Я веб-разработчик из Кыргызстана, Бишкек.
                            В настоящее время я учусь на младшего веб-разработчика.
                            Я хочу взять на себя больше работы и улучшить свои навыки.
                        </p>
                    </div>
                    <div className={s.contacts}>
                        <div className={s.phone}>
                                   <span>
                                       ТЕЛЕФОН
                                   </span>
                            <p>
                                +(996)-500-100-805
                            </p>
                        </div>
                        <div className={s.phone}>
                                    <span>
                                        ПОЧТА
                                    </span>
                            <p>
                                ishakishmahametov123@gmail.com
                            </p>
                        </div>
                        <div className={s.phone}>
                                    <span>
                                        АДРЕС
                                    </span>
                            <p>
                                Бишкек, Кыргызстан
                            </p>
                        </div>
                        <div className={s.phone}>
                                    <span>
                                        СОЦ СЕТИ
                                    </span>
                            <div className={s.social}>
                                <a href="https://github.com/wkkkis">
                                    <img src={github} alt=""/>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100026994910022">
                                    <img src={facebook} alt=""/>
                                </a>
                                <a href="https://www.instagram.com/layryc/">
                                    <img src={instagram} alt=""/>
                                </a>
                                <a href="https://t.me/hagelu">
                                    <img src={telegram} alt=""/>
                                </a>
                                <a href="https://wa.me/+996500100805">
                                    <img src={whatsapp} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <a href={cv}>
                            <button>
                                ПОСМОТРЕТЬ РЕЗЮМЕ
                            </button>
                        </a>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src="https://previews.aspirity.com/danny/media/hello-section/image.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}