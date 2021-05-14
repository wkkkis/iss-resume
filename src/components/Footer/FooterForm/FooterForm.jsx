import React from "react";
import { useForm} from "react-hook-form";
import s from "./FooterForm.module.css"

export default function FooterForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.formBlock}>
                <div className={s.columns1}>
                    <div>
                        <span>{errors.name?.type === 'required' && "Name is required"}</span>
                        <textarea placeholder="имя" {...register("name", { required: true })} />
                    </div>

                    <div>
                        <span>{errors.email && "Email is required"}</span>
                        <textarea placeholder="почта" {...register("email", { required: true })} />
                    </div>
                </div>

                <div className={s.columns2}>
                    <div>
                        <span>{errors.messages && "Messages is required"}</span>
                        <textarea placeholder="сообщение" {...register("messages", { required: true })} />
                    </div>
                </div>
            </div>
            <div>
                <button type="submit">Отправить</button>
            </div>
        </form>
    );
}
