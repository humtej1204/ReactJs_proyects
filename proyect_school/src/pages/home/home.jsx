import React, { Fragment } from "react";

/* Pages Views */
import { Slider } from "./components/slider";
import { Content } from "./components/content";
import { slides } from "./sliderInfo";

/* Styles */
import './home.scss'

export function Home() {
  return (
    <Fragment>
      <div className="index">
        <section className="home-s1">
          <div className="header-sep"></div>
          <Slider 
            slides={slides}
            interval={8000}
            controls={true} 
            indicators={true}
          />
        </section>
        <section className="home-s2">
          <Content />
        </section>
      </div>
    </Fragment>
  );
}