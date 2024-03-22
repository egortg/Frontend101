import React from "react";
import "./test.css"
export default function Test() {
    return(
<div>
    <div>
    <div>
    <div className="Test_head">
   <h1 className="Test_head_header">Тест по теме:HTML/CSS</h1>
   <h2 className="Test_head_subheader">Что такое html?</h2>
   </div>
   <div className="Test_texts">
   <p className="Test_texts_words"><span>Как поменять цвет на сайте при помощи CSS</span></p>
   <br/>
   <p className="Test_texts_words"><span>Что означает тег div в HTML5</span></p>
   <br/>
   <p className="Test_texts_words"><span>Что означает тег white-space: nowrap в Css</span> </p>
   </div>
<div className="Test_button_box">
   <button className="Test_button">Ответить</button>
</div>
   </div>

   <p className="Test_number_question">1/10</p>

   </div>
</div>
    )
}
