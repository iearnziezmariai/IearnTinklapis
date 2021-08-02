import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/card";
import "./proj_style.scss";

function Projektai() {
  const Korteles = [
    {
      title: "Ekologinis Projektas",
      description:
        "Pas mus vyko mainų programa. m Ir Dar Daugiau Dirbom! Les Ifs Parees Gronde. Faite Armes Nul Garde Sur Elles Court. Caractere Oui Viendrait Vin Accoudees Tot Cert",
      projectLink: null,
    },
    {
      title: "24 Valandos Mokykloje",
      description:
        "Dirbom, Dirbom Ir Dar Daugiau Dirbom! Les Ifs Parees Gronde. Faite Armes Nul Garde Sur Elles Court. Caractere Oui Viendrait Vin Accoudees Tot Certitude.",
      projectLink: null,
    },
  ];

  return (
    <>
      <div className="base">
        <section className="pad projects">
          <div className="container-2">
            <h1>Projektai</h1>
            <div className="content">
              {Korteles.map((Korta) => (
                <Card
                  key={uuidv4()}
                  title={Korta.title}
                  description={Korta.description}
                  projectLink={Korta.projectLink}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projektai;
