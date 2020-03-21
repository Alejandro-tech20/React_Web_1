import React from "react";
import "./main.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo1 from "./img/logo-white.svg";
import logo2 from "./img/logo.svg";
import MyPage1 from "./page/MyPage1";
import Ventas from './page/Ventas';

function Header() {
  return (
    <Router>
      <header className="white">
        <img className="white" src={logo1} alt="logo" />
        <img className="normal" src={logo2} alt="logo" />
        <nav>
          <Link className="activo" to="/">Inicio</Link>
          <Link to="/ventas">Ventas</Link>
          <Link to="/alquiler">Alquiler</Link>
          <Link to="/contactos">Contacto</Link>
        </nav>
        </header>
        <Switch>
          <Route  path="/" component={MyPage1} />
          {/* <MyPage1/> */}
          <Route exact path="/ventas" component={Ventas}  />
          {/* <Ventas/> */}
          <Route exact path="/alquiler" />
          <Route exact path="/contacto" />
        </Switch>
      
      <MyPage1/>
    </Router>
  );
}
export default Header;
