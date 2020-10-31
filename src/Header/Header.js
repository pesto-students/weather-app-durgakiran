import React from "react";
import "./Header.css";

export default function Header({children}) {
    return (
        <div className="header">
            <div className="header__content">
                <div className="header__logo">
                    <img src="./thermometer.svg" height="2rem" alt="vathavaran logo"/>
                    <div className="header__title">
                        Vathavaran
                    </div>
                </div>
                <div className="header__occ-space"></div>
                {children}
            </div>
        </div>
    );
}
