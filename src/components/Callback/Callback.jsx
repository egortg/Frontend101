import React from "react"
import "./callback.css"

export default function Callback (){
    return(
        <>
        <div  className="Callback_head"><h1>Обратная связь</h1></div>

        <div className="Callback_subhead">
        <h3>Заполните форму чтобы мы могли связаться с вами</h3>
        </div>

        <div className="Callback_items">
            <div className="Callback_list">
                <div className="Callback_list_items">
                <label for="name">Ваше имя</label>
                <input placeholder="Введите имя"></input>
                <label for="mail">Email</label>
                <input placeholder="Введите адрес электронной почты"></input>
                <label for="number">Телефон</label>
                <input type="password" placeholder="Введите номер телефона"></input>
                </div>
                <div className="Callback_button_block">
                    <a className="Callback_button">отправить</a>
                </div>
            </div>
        </div>
        
        </>
    )
}