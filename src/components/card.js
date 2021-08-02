import React from "react";
import "../styles/_Projektai.scss";

const Card = ({ title, description, imgLink, projectLink }) => {
  return (
    <div className="card">
      <a href={projectLink ? projectLink : "#"}>
        <div className="outer">
          <div className="inner">
            {imgLink ? (
              <img src={imgLink} alt="Nuotrauka" />
            ) : (
              <i className="fas fa-file-image" />
            )}
          </div>
        </div>
        <h2>{title ? title : "No Data"}</h2>
        <p>{description ? description : "No Data"}</p>
      </a>
    </div>
  );
};

export default Card;
