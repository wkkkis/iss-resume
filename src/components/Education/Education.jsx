import React from "react";
import design from "../../assets/images/design.png";
import s from "./Eduction.module.css";

export default function Education(){

    return(
        <div id="education" className={s.mainEducation}>
            <div className={s.education}>
                <div data-aos="fade-right" className={s.educationAbout}>
                    <span>Образование</span>
                    <div className={s.paragraph}>
                        <p>
                            Всю свою жизнь я был убежден<br/> в важности образования.
                            Я стараюсь узнавать<br/> что-то новое каждый божий день.
                        </p>
                    </div>
                    <div className={s.design}>
                        <img src={design} alt="" width="100px" />
                    </div>
                </div>
                <div data-aos="fade-left" className={s.aboutCollage}>
                    <div className={s.spanCollage}>
                        <span>Политехнический колледж МУКР</span>
                    </div>
                    <div className={s.paragraph}>
                        <p>
                            сентябь, 2020- июнь, 2023
                        </p><br/>
                        <p>
                            Международный Университет Кыргызстана - Западный кампус.<br/>
                            255 просп. Чуй, Бишкек.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}