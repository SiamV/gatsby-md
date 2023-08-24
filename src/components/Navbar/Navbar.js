import { Link } from "gatsby";
import React from "react";
import *as classes from "./Navbar.module.css";

const Navbar = () => {

    return (
        <div className={classes.navbarMainBlock}>
            <Link to={"/"} >
                <button className={classes.menuButton}>
                    ГЛАВНАЯ
                </button>
            </Link>
            <Link to={"/search"} >
                <button className={classes.menuButton}>
                    ПОИСК
                </button>
            </Link>
        </div>

    )
}

export default Navbar
