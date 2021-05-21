import React from "react";
import s from "../Portfolio/Portfolio.module.css";

export default function ProjectBlock({image, span, paragraph, link}) {

    let gitHub = link => document.location.href = link

    return (
        <div className={s.project}>
            <div className={s.imgBlock}>
                {image != null ?
                    <img src={image} alt=""/>
                    : <span>SOON</span>
                }
            </div>
            {link != null ?
                <div className={s.aboutIs}>
                    <span>{span}</span>
                    <div className={s.paragraph}>
                        <p>{paragraph}</p>
                    </div>
                    <div className={s.btn}>
                        <button>Посетить</button>
                        <button onClick={() => gitHub(link)}>Исходник</button>
                    </div>
                </div>
                : <span>SOON</span>
            }
        </div>
    )
}