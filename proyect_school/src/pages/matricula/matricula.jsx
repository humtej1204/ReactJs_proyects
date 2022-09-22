import React, { Fragment } from "react";

/* Styles */
import './matricula.scss'

export function Matricula() {
  return (
    <Fragment>
      <div className="matricula">
        <section className="matricula-s1">
          <div className="header-sep" />
          <div className="container">
            <div className="fadeSlider"></div>
            <div className="matriculaForm"></div>
          </div>
        </section>
        <section className="matricula-s2">
          <div className="propEdu"></div>
          <div className="morePropEdu"></div>
          <div className="moreAbout"></div>
        </section>
      </div>
    </Fragment>
  );
}