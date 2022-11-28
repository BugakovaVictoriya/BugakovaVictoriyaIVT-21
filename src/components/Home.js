import { useEffect, useState } from "react";
import AboutCoffee from "./AboutCoffee";
function Home() {

  const [coffeeName, setCoffeeName] = useState(null);
  const [aboutVis, setaboutVis] = useState(false);

  useEffect(() => {
    setaboutVis(false);
    const cup = document.getElementById("cup");
    cup.className = `machine__cup ${coffeeName}`;
  }, [coffeeName])

    return (
      <div >
      <div className="home">
        <div className="home__container container">
          <div className="menu">
            <h2>Classic</h2>
            <ul className="menu__list">
              <li className="menu__btn">
                <button onClick={() => setCoffeeName("espresso")} className="btn_drink">espresso</button>
              </li>
              <li className="menu__btn">
                <button onClick={() => setCoffeeName("cappuccino")} className="btn_drink">cappuccino</button>
              </li>
              <li className="menu__btn">
                <button onClick={() => setCoffeeName("latte")} className="btn_drink">latte</button>
              </li>
              <li className="menu__btn">
                <button onClick={() => setCoffeeName("americano")} className="btn_drink">americano</button>
              </li>
              <li className="menu__btn">
                <button onClick={() => setCoffeeName("flatwhite")} className="btn_drink">flat white</button>
              </li>
            </ul>
            <h2>Coffee drinks</h2>
              <ul className="menu__list">
                <li className="menu__btn">
                  <button onClick={() => setCoffeeName("raff")} className="btn_drink">raff</button>
                </li>
                <li className="menu__btn">
                  <button onClick={() => setCoffeeName("irish")} className="btn_drink">irish</button>
                </li>
                <li className="menu__btn">
                  <button onClick={() => setCoffeeName("mocha")} className="btn_drink">mocha</button>
                </li>
                <li className="menu__btn">
                  <button onClick={() => setCoffeeName("bambl")} className="btn_drink">bambl</button>
                </li>
              </ul>
          </div>
          <div className="machine">
            <div id="cup" className="machine__cup"></div>
            <img className="machine__img" src="machine.svg" alt=""></img>
          </div>
        </div>
        <button onClick={() => setaboutVis(true)} className="home__btn_about">about coffee</button>
      </div>
      {aboutVis &&
        <AboutCoffee strName={coffeeName}/>
      }
      </div>
    );
  }
  
  export default Home;