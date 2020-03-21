import React, { Fragment } from "react";
import "../main.css";

function FirstRow(props) {
  return props.data.map(data => {
    // console.log(data);
    return (
      <div className={data.class}>
        <div className={data.subclass1}>
          {!data.subsubclass1 ? (
            <Fragment>
              <p>{data.p1}</p>
              <p>{data.p2}</p>
              {data.classForm ? (
                <form>
                  <div className={data.classForm}>
                    <div className={data.classInputForm}>
                      <input
                        type={data.typeImput}
                        placeholder={data.placeholderInput}
                      />
                    </div>
                    <div className={data.classButtomForm}>
                      <button type={data.typeButtom}>
                        {data.textButtomForm}
                      </button>
                    </div>
                  </div>
                  <div className={data.classForm}>
                    <div className={data.classInputForm}>
                      <input type="checkbox" id="condiciones"/>
                      <label for="condiciones">
                        Acepto las
                        <a href="contacto.html#legal">condiciones legales</a>
                      </label>
                    </div>
                    <div className="columna"></div>
                  </div>
                </form>
              ) : (
                <Fragment></Fragment>
              )}
            </Fragment>
          ) : (
            <Fragment>
              <div className={data.subsubclass1}>
                <Fragment>
                  <img src={data.imgSubSubClass1} alt="" />
                  <a href={data.hrefSubSubClass}>{data.textHrefSubSubClass}</a>
                </Fragment>
              </div>
            </Fragment>
          )}
        </div>
        <div className={data.subclass2}>
          {!data.subsubclass2 ? (
            <Fragment>
              <img className={data.imgClass} src={data.img} alt="" />
            </Fragment>
          ) : (
            <Fragment>
              <div className={data.subsubclass2}>
                <img src={data.srcImgSubSubClass2} alt=""></img>
                <a href={data.hrefSubSubClass2}>{data.textHrefSubSubClass2}</a>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  });
}
export default FirstRow;
