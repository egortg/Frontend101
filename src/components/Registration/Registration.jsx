import React from "react"
import "./registration.css"

export default function Registration (){
    return(
        <><h1 className="Registration_Head">Регистрация</h1>
            <div className="Registration_list">
                <div className="Registration_list_items">
                <label for="name">Ваше имя </label>
                <input placeholder="Введите имя"></input>
                <label for="username">Придумайте UserName </label>
                <input placeholder="Введите свой userName"></input>
                <label for="mail">Mail</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="name">Пароль</label>
                <input type="password" placeholder="Введите ваш пароль"></input>
                <label for="name">Повторите пароль</label>
                <input type="password" placeholder="Введите повторно пароль"></input>
                </div>
                <div className="Registration_button_block">
                    <a className="Registration_button">Зарегистрироваться</a>
                </div>
            </div>
       </>)
}