import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classes.header}>
            <menu className={classes.main}>
                <nav className={classes.nav}>
                    <li className={classes.link}>
                        <Link to="/">Main</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">Activities</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To Watch</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To Visit</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To Eat</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To Drink</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To be Healthy</Link>
                    </li>
                    <li className={classes.link}>
                        <Link to="/">To Rest</Link>
                    </li>
                </nav>

                <nav className={classes.nav}>
                    <li className={classes.link}>
                        <Link to="/">Sign In</Link>
                    </li>
                    <div className={classes.link}>
                        <Link to="/">Sign Up</Link>
                    </div>
                </nav>
            </menu>
        </header>
    );
};

export default Header;
