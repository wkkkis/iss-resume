import React from "react";
import s from "./Overlay.module.css"

export default function Overlay({messagesCode, setCLoseCode}) {
    return (
        <>
            {messagesCode &&
            <>
                <div className={s.stylesDiv}>
                </div>
                <div className={s.stylesOverlay}>
                    <div className={s.stylesBlock}>
                        <span>{messagesCode}</span><br/>
                        <button onClick={setCLoseCode}>
                            ок
                        </button>
                    </div>
                </div>
            </>
            }
        </>
    )
}