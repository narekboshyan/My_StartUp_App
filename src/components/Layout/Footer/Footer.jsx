import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={classes.footer}>
          
            <menu className={classes.menu}>

                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Link to="/">Adventures</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Tours</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Hiking</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Art</Link>
                        </li>
                    </ul>
                </nav>

                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        <li className={classes.li}>
                            <Link to="/">Game</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Sport</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Nature</Link>
                        </li>
                        <li className={classes.li}>
                            <Link to="/">Recommendations</Link>
                        </li>
                    </ul>
                </nav>

            </menu>
        </footer>
    );
};

export default Footer;
