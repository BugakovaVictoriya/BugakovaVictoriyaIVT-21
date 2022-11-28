import Espresso from "./Espresso";
import Cappuccino from "./Cappuccino";
import Latte from "./Latte";
import Americano from "./Americano";
import Flatwhite from "./Flatwhite";
import Raff from "./Raff";
import Irish from "./Irish";
import Mocha from "./Mocha";
import Bambl from "./Bambl";

function AboutCoffee(props) {
    const name = props.strName;
    
    let template = {
        espresso: <Espresso strName={name}/>,
        cappuccino: <Cappuccino strName={name}/>,
        latte: <Latte strName={name}/>,
        americano: <Americano strName={name}/>,
        flatwhite: <Flatwhite/>,
        raff: <Raff strName={name}/>,
        irish: <Irish strName={name}/>,
        mocha: <Mocha strName={name}/>,
        bambl: <Bambl strName={name}/>
    }[name]

    return (
        <div className="about_coffee__container container">
            {template}
        </div>
    );
  }
  
  export default AboutCoffee;