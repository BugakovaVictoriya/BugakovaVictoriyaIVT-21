import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="head">
            <div className="head__container container">
                <Link className="link" to="/"><img className="logo" src="logo.svg" alt=""></img></Link>
                <h1>COFFEE TIME</h1>
                <Link className="link" to="/info"><div className="info">?</div></Link>
            </div>
        </header>
    );
  }
  
  export default Header;