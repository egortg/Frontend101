import React from "react";
import "./tests.css"
export default function TestsRedactor() {
    return(
        <><h1 className="TestsRedactor_head">Тесты по теме: HTML5/CSS</h1>
            <p className="TestsRedactor_Test_bar">Что такое HTML?
            
            <button className="TestRedactor_button_change">Изменить</button>
            
            </p>
            <p className="TestsRedactor_Test_bar">Что из них не относится к типу данных Js

                <button className="TestRedactor_button_change">Изменить</button></p>
                
                <button className="TestRedactor_button_add">Добавить тест</button></>
        
        
    )
}