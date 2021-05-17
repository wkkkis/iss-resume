import React from "react";
import {useForm} from "react-hook-form";
import s from "./FooterForm.module.css"

function FooterForm(props) {

    const {register, formState: {errors}, handleSubmit, reset} = useForm();

    const handleReset = () => {
        reset({ GeneralInfo: { name: "", email: "", messages: "" } });
      };

    return (
        <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.formBlock}>
                <div className={s.columns1}>
                    <div>
                        <span>{errors.name?.type === 'required' && "Name is required"}</span>
                        <textarea placeholder="имя" {...register("name", {required: true})} />
                    </div>

                    <div>
                        <span>{errors.email && "Email is required"}</span>
                        <textarea placeholder="почта" {...register("email", {required: true})} />
                    </div>
                </div>

                <div className={s.columns2}>
                    <div>
                        <span>{errors.messages && "Messages is required"}</span>
                        <textarea placeholder="сообщение" {...register("messages", {required: true})} />
                    </div>
                </div>
            </div>
            <div className={s.formBtn}>
                <button type="submit">Отправить</button>
                <button onClick={handleReset} type="reset">Очистить</button>
            </div>
        </form>
    );
}


export default FooterForm;
