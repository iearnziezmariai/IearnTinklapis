import React from "react";
import Narys from "./narys";
import { v4 as uuidv4 } from "uuid";
import "../styles/_Nariai.scss";

const Nariai = () => {
  const visiNariai = [
    {
      name: "Gytis Kaulakis",
      description: "Jaunikis Jonas",
      imgLink: null,
    },
    {
      name: "Gabija Kaulakyte",
      description: "Panelė",
      imgLink: null,
    },
    {
      name: "Justas Kaulakis",
      description: "Vaikas",
      imgLink: null,
    },
    {
      name: "Gytis Kaulakis",
      description: "Jaunikis Jonas",
      imgLink: null,
    },
    {
      name: "Gabija Kaulakyte",
      description: "Panelė",
      imgLink: null,
    },
    {
      name: "Justas Kaulakis",
      description: "Vaikas",
      imgLink: null,
    },
  ];

  return (
    <section id="Nariai">
      <div className="container-3">
        <h1>Komandos nariai</h1>
        <div className="carousel">
          {visiNariai.map((narys) => (
            <Narys
              key={uuidv4()}
              name={narys.name}
              description={narys.description}
              imgLink={narys.imgLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nariai;
