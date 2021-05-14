import React from "react";
import s from "./AboutMe.module.css"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import telegram from "../../assets/images/telegram.png"
import whatsapp from "../../assets/images/whatsapp.png"
import github from "../../assets/images/github.png"

export default function AboutMe() {
    return (
        <div id="about" className={s.mainAboutMe}>
            <div className={s.aboutMe}>
                <div className={s.about}>
                    <div className={s.fullName}>
                        <span>Я Исхак Ишмахаметов</span>
                    </div>
                    <div className={s.paragraph}>
                        <p>
                            Я веб-разработчик из Кыргызстана, Бишкек.
                            В настоящее время я учусь на младшего веб-разработчика.
                            Я хочу взять на себя больше работы и улучшить свои навыки веб-разработчика.
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
                                <div className={s.facebook}>
                                    <img src={facebook} alt=""/>
                                </div>
                                <div className={s.github}>
                                    <img src={instagram} alt=""/>
                                </div>
                                <div className={s.instagram}>
                                    <img src={whatsapp} alt=""/>
                                </div>
                                <div className={s.telegram}>
                                    <img src={telegram} alt=""/>
                                </div>
                                <div className={s.whatsapp}>
                                    <img src={github} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <button>
                            ПОСМОТРЕТЬ РЕЗЮМЕ
                        </button>
                        <button>
                            СВЯЗАТЬСЯ СО МНОЙ
                        </button>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src="https://previews.aspirity.com/danny/media/hello-section/image.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}