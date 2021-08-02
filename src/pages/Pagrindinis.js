import React from "react";
import Nariai from "../components/Nariai";
import Projektai from "../components/Projektai";
import "./pagr_style.scss";

function Pagrindinis() {
  return (
    <>
      <div className="base">
        <section className="top">
          <div className="landing-img"></div>
        </section>
        <Projektai />
        <Nariai />
      </div>
    </>
  );
}

export default Pagrindinis;
