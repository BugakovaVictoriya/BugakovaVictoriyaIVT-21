import { useEffect, useState } from "react";
function Info() {
    const [posX, setposX] = useState(0);
    const [posY, setposY] = useState(0);
    let left = posX + 'px';
    let top = posY + 'px';

    useEffect(() => {
        setposY(Math.random() * (100 - (-400))+ (-400));
        top = posY + 'px';
        left = posX + 'px';
      }, [posX])

    return (
        <div className="readme__container container">
            <h2>read me</h2>
            <p>На сайте есть два раздела. Home и Info.</p>
            <h3>Home</h3>
            <p>Раздел Home - стартовая страница. Она открывается по умолчанию или на нее можно попасть, нажав на черный стаканчик в левом верхнем углу.</p>
            <p>Функционал:</p>
            <ol>
                <li>При нажатии на кнопку с названием кофе справа в чашке отображается его состав.</li>
                <li>При нажатии кнопки "about coffe" появляется раздел с информацией о выбранном напитке.</li>
            </ol>
            <h3>Info</h3>
            <p>Раздел Info - страница с общей информацией о сайте. Она открывается при нажатии на знак вопроса в правом верхнем углу. Здесь можно половить кнопочку. </p>
            <button style={{position: 'relative', left, top}} onMouseEnter={()=>setposX(Math.floor(Math.random() * (400 - (-400))+ (-400)))} className="btn_catch" id="btn_catch">catch me</button>
        </div>
    );
  }
  
  export default Info;