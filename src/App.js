import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import Home from "./page/MyPage1";
import Ventas from "./page/Ventas";
import "./main.css";
import Footer from "./components/footer";
import logo1 from "./img/logo-white.svg";
import logo2 from "./img/logo.svg";

function App() {
  return (
    <BrowserRouter>
      <header className="white">
        <img className="white" src={logo1} alt="logo" />
        <img className="normal" src={logo2} alt="logo" />
        <nav>
          <Link className="activo" to="/home">
            Inicio
          </Link>
          <Link to="/ventas">Ventas</Link>
          <Link to="/alquiler">Alquiler</Link>
          <Link to="/contactos">Contacto</Link>
        </nav>
      </header>
      <Redirect from="/" to="/home" />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/ventas" component={Ventas} />
        <Route path="/alquiler" render={() => <Footer />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
