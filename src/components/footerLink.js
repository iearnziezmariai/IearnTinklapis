import React from "react";

const FooterLink = ({iconSrc, link, text}) => {

    return(
        <li>
            <a rel="noopener noreferrer" target="_blank" href={`${link ? link : "#"}`}>
                {iconSrc ? <img src={iconSrc} alt="Icon"></img> : null}
                <span>{text}</span>
            </a>
        </li>
    );
}

export default FooterLink;