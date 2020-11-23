import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix-logo"
            ></img>

            <div className="nav__search">
                <input className="nav__searchInput" type="text" />
                <SearchIcon className="nav__searchIcon"></SearchIcon>
            </div>

            <img
                className="nav__avatar"
                src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
                alt="Netflix-logo"
            ></img>
        </div>
    );
}

export default Nav;
