import React from "react";
import s from "./Portfolio.module.css";
import {ProjectBlock} from "../index";
import {project1, project2} from "../../assets";

export default function Portfolio() {

    let items = [
        {
            id: 1,
            image: project1,
            span: "Социальная сеть",
            paragraph: "React.js, Redux, REST API, Thunk, Styled Components, CSS modules, Axios",
            linkCode: "https://github.com/wkkkis/react-demo",
            linkView: null,

        },
        {
            id: 2,
            image: project2,
            span: "Онлайн пиццерия",
            paragraph: "React.js Redux, REST API, Thunk, Axios, SASS, Node.js",
            linkCode: "https://github.com/wkkkis/react-pizza",
            linkView: "https://react-pizza-iss.herokuapp.com/"
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