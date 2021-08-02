import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";
import "../styles/_Projektai.scss";

const Projektai = () => {
  const Korteles = [
    {
      title: "Ekologinis Projektas",
      description:
        "Pas mus vyko mainų programa. m Ir Dar Daugiau Dirbom! Les Ifs Parees Gronde. Faite Armes Nul Garde Sur Elles Court. Caractere Oui Viendrait Vin Accoudees Tot Cert",
    },
    {
      title: "24 Valandos Mokykloje",
      description:
        "Dirbom, Dirbom Ir Dar Daugiau Dirbom! Les Ifs Parees Gronde. Faite Armes Nul Garde Sur Elles Court. Caractere Oui Viendrait Vin Accoudees Tot Certitude.",
    },
    {
      title: "Dovana Islandijai",
      description:
        "Domino  Iš Lietuviškų Tautinių Juostų Les Ifs Parees Gronde. Faite Armes Nul Garde Sur Elles Court. Caractere Oui Viendrait Vin Accoudees Tot Certitude.",
    },
  ];

  const Kortos = () => {
    const items = [];
    for (let i = 0; i < Math.min(3, Korteles.length); i++) {
      items.push(Korteles[i]);
    }
    return items;
  };

  return (
    <section className="projects">
      <div className="container-2">
        <h1>Naujausi Projektai</h1>
        <div className="content">
          {Kortos().map((Korta) => (
            <Card
              key={uuidv4()}
              title={Korta.title}
              description={Korta.description}
            />
          ))}

          <a className="card daugiau_projektu" href="/">
            <h2>Daugiau projektų</h2>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projektai;
