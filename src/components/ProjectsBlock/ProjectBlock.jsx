import React, {useEffect} from "react";
import s from "../Portfolio/Portfolio.module.css";
import Aos from "aos";
import "aos/dist/aos.css"

export default function ProjectBlock({image, span, paragraph, linkCode, linkView}) {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    let gitHub = linkCode => document.location.href = linkCode
    let viewLink = linkView => document.location.href = linkView

    return (
        <div data-aos="fade-up" className={s.project}>
            <div className={s.imgBlock}>
                {image != null ?
                    <img src={image} alt=""/>
                    : <div className={s.noProject}>
                        <span>SOON</span>
                    </div>

                }
            </div>
            {linkCode != null ?
                <div className={s.aboutIs}>
                    <span>{span}</span>
                    <div className={s.paragraph}>
                        <p>{paragraph}</p>
                    </div>
                    <div className={s.btn}>
                        <button disabled={linkView === null} onClick={() => viewLink(linkView)}>Посетить</button>
                        <button onClick={() => gitHub(linkCode)}>Исходник</button>
                    </div>
                </div>
                : <span>SOON</span>
            }
        </div>
    )
}