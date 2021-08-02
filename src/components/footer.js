import "../styles/_Footer.scss";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import FooterLink from "./footerLink";

const Footer = () => {
  const footerLinks = [
    {
      name: "Socialiniai Tinklai",
      links: [
        {
          text: "Instagram",
          link: "https://www.instagram.com/iearn_ziezmariai_lithuania/",
          iconSrc: null,
        },
        {
          text: "Facebook",
          link: "https://www.instagram.com/iearn_ziezmariai_lithuania/",
          iconSrc: null,
        },
        {
          text: "YouTube",
          link: "https://www.instagram.com/iearn_ziezmariai_lithuania/",
          iconSrc: null,
        },
        {
          text: "iEARN",
          link: "https://www.instagram.com/iearn_ziezmariai_lithuania/",
          iconSrc: null,
        },
      ],
    },
    {
      name: "Kontaktai",
      links: [
        {
          text: "Instagram",
          link: null,
          iconSrc: null,
        },
        {
          text: "Kocienė@gmail.com",
          link: null,
          iconSrc: null,
        },
        {
          text: "Bachūras420@bing.com",
          link: null,
          iconSrc: null,
        },
        {
          text: "+370 6841 2129",
          link: null,
          iconSrc: null,
        },
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-links">
        {footerLinks.map((list) => (
          <div key={uuidv4()}>
            <h3>{list.name}</h3>
            <ul>
              {list.links.map((item) => (
                <FooterLink
                  text={item.text}
                  link={item.link}
                  iconSrc={item.iconSrc}
                  key={uuidv4()}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
