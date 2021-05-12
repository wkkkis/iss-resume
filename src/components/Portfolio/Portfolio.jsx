import React from "react";
import s from "./Portfolio.module.css";
import project1 from "../../assets/project_image/iss_social_network.png"

export default function Portfolio() {

    let gitHub = () => document.location.href = "https://github.com/wkkkis/react-demo"

    return (
        <div id="portfolio" className={s.mainPortfolio}>
            <div className={s.portfolio}>
                <span>Портфолио</span>
                <div className={s.allProject}>
                    <div className={s.project}>
                        <div className={s.imgBlock}>
                            <img src={project1} alt=""/>
                        </div>
                        <div className={s.aboutIs}>
                            <span>Социальная сеть</span>
                            <div className={s.paragraph}>
                                <p>
                                    React.js, Redux, REST API, Thunk, Styled Components, CSS modules, Axios
                                </p>
                            </div>
                            <div className={s.btn}>
                                <button>Посетить</button>
                                <button onClick={gitHub}>Исходник</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.project}>
                        <div className={s.imgBlock}>
                            <span>SOON</span>
                        </div>
                        <div className={s.aboutIs}>
                            <span>Soon</span>
                        </div>
                    </div>
                    <div className={s.project}>
                        <div className={s.imgBlock}>
                            <span>SOON</span>
                        </div>
                        <div className={s.aboutIs}>
                            <span>Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}