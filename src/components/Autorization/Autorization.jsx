import React from "react"
import "./autorization.css"

export default function Autorization (){
    return(
        <><div  className="Autorization_head"><h1>Войти</h1></div>
        <div className="Autorization_items">
            <div className="Autorization_list">
                <div className="Autorization_list_items">
                <label for="mail">Mail</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="name">Пароль</label>
                <input type="password" placeholder="Введите ваш пароль"></input>
                </div>
                <div className="button_Autorization_Block">
                    <a className="button_Autorization">отправить</a>
                </div>
            </div>
        </div></>)
}