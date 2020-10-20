import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__copyright">
                &copy; 2020 Made with ❤ by{" "}
                <a
                    className="footer__copyright--link"
                    href="https://kamrulsh.github.io/"
                >
                    {" "}
                    Kamrul Islam Shahin
                </a>
            </div>
        </footer>
    );
}

export default Footer;
