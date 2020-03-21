import React from "react";
import maplogo from "../img/map.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import whatsapp from "../img/whatsapp.svg";
import instagram from "../img/instagram.svg";
import "../main.css";

const dataa= {
  class:"columna",
  p1:"Imperial Real State",
  classP2:"centrado",
  classImg1:"m-r-small",
  srcImg1:"{maplogo}",
  p2:"Paseo de la Constitucion, 12",
  p3:"29600 Marbella",
  classP4:"centrado",
  classImg2:"m-r-small",
  srcImg2:"phone",
  p4:"+34951100100",
  classP5:"centrado",
  classImg3:"m-r-small",
  srcImg3:"mail",
  p5:"info@imperial.com"

};

function Derecha(prosp) {
  return (
    <div className={prosp.data.class}>
      <p>{prosp.data.p1}</p>
      <p className={prosp.data.classP2}>
        <img className={prosp.data.classImg1} src={maplogo} alt="" />
        {prosp.data.p2}
      </p> 
      <p>{prosp.data.p3}</p>
      <p className={prosp.data.classP4}>
        <img className={prosp.data.classImg2} src={phone} alt=""/>
        {prosp.data.p4} 
      </p>
      <p className={prosp.data.classP5}>
        <img className={prosp.data.classImg3} src={mail} alt=""/>
        {prosp.data.p5}
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <Derecha data={dataa}/>
      
      <div className="columna">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1604.0327445850285!2d-4.992248454957925!3d36.48013429734221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732a3c30267927%3A0x33f2b5abc505d1ef!2sBoulevard%20de%20San%20Pedro%20de%20Alc%C3%A1ntara!5e0!3m2!1ses!2ses!4v1583846377776!5m2!1ses!2ses"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: "0px" }}
          allowfullscreen=""
          title="mapa"
        ></iframe>
      </div>
      <div className="columna">
        <p className="justificados">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsapp} alt="" />
          <img src={instagram} alt="" />
        </p>
        <p className="justificados">
          <a href="contacto.html#legal">Aviso Legal</a>
          <a href="contacto.html#cookies">Política de Cookies</a>
        </p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Imperial Real State{" "}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
