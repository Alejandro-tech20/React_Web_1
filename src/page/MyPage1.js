import React, { Fragment } from "react";
import "../main.css";
import logoframe from "../img/logo-frame.svg";
import arrow from "../img/down.svg";
import MyFirstRow from "../components/firstrow";
import imgrow1 from "../img/thumb4.jpg";
import dataJson from "../resources/data.json";
import Footer from "../components/footer";

function Mypage1() {
  return (
    <Fragment>
      <div className="hero">
        <div></div>
        <div></div>
        <div></div>
        <div className="hero-logo">
          <img src={logoframe} alt=""></img>
        </div>
        <a className="hero-down" href="#primera">
          <img src={arrow} alt="" />
        </a>
      </div>
       <MyFirstRow data={dataJson}></MyFirstRow>
      {/* {
          dataJson.map(
              (data, index)=>{
              return (<MyFirstRow
                 clas={data.class}
                 subClass1={data.subclass1}
                 text1={data.p1}
                 text2={data.p2}
                 subClass2={data.subclass2}
                 imgClass={data.imgclass}
                 img={data.img}
                 subsubclass1={data.subsubclass1}
                 imgSubSubClass={data.imgSubSubClass}
                 hrefSubSubClass={data.hrefSubSubClass}
                 textHrefSubSubClass={data.textHrefSubSubClass}
                 subsubclass2={data.subsubclass2}
                 srcImgSubSubClass2={data.srcImgSubSubClass2}
                 hrefSubSubClass2={data.hrefSubSubClass2}
                 textHrefSubSubClass2={data.textHrefSubSubClass2}
                 />);
              })
      } */}
      </Fragment>
  );
}
export default Mypage1;
