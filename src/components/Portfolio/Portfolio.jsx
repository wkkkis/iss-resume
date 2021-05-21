import React from "react";
import s from "./Portfolio.module.css";
import {ProjectBlock} from "../index";
import {project1} from "../../assets";

export default function Portfolio() {

    let items = [
        {
            id: 1,
            image: project1,
            span: "Социальная сеть",
            paragraph: "React.js, Redux, REST API, Thunk, Styled Components, CSS modules, Axios",
            link: "https://github.com/wkkkis/react-demo"
        },
        {
            id: 2,
            image: null,
            span: null,
            paragraph: null,
            link: null
        },
        {
            id: 3,
            image: null, span: null,
            paragraph: null,
            link: null
        }
    ]

    return (
        <div id="portfolio" className={s.mainPortfolio}>
            <div className={s.portfolio}>
                <span>Портфолио</span>
                <div className={s.allProject}>
                    {items.map(obj => (
                        <ProjectBlock key={obj.id} {...obj}/>
                    ))}
                </div>
            </div>
        </div>
    )
}