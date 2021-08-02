import React from "react";

const Narys = ({ name, description, imgLink }) => {
  return (
    <div>
      <div className="Nariai-card">
        <div>
          {imgLink ? (
            <img src={imgLink} alt="Icon" />
          ) : (
            <i className="fa fa-user" aria-hidden="true" />
          )}
        </div>
        <h2>{name ? name : "No Data"}</h2>
        <p>{description ? description : "No Data"}</p>
      </div>
    </div>
  );
};

export default Narys;
