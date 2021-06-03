import React from "react";
import s from "./Skills.module.css"
import design from "../../assets/images/design.png";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Skills() {

    React.useEffect(() => {
        AOS.init({
            duration : 2000
        })
    }, [])

    return (
        <div id="skills" className={s.mainSkills}>
            <div className={s.skills}>
                <div data-aos="zoom-in-right" className={s.skillsAbout}>
                    <span>Навыки</span>
                    <div className={s.paragraph}>
                        <p>
                            Меня вдохновляет создание отличной работы с людьми,
                            которые так же страстно увлечены созданием
                            чего-то потрясающего
                        </p>
                    </div>
                    <div className={s.design}>
                        <img src={design} alt="" width="100px"/>
                    </div>
                </div>
                <div data-aos="zoom-in-left" className={s.languagesSkills}>
                    <div className={s.web}>
                        <span>Web Development</span>
                        <div className={s.paragraph}>
                            <p>
                                Javascript, Node.js, React.js, Redux, REST API, Thunk, Styled Components, CSS modules, Axios
                            </p>
                        </div>
                    </div>
                    <div className={s.front}>
                        <span>Frontend Development</span>
                        <div className={s.paragraph}>
                            <p>
                                HTML, CSS, SASS, Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}