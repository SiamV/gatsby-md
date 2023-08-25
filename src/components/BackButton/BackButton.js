import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as classes from './BackButton.module.css';


const BackButton = ({ path }) => {
    return (
        <div className={classes.wrapperBackButton}>
            <Link to={path}>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/back.png"
                    alt="Назад"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    className={classes.imgBack}
                    layout="constrained"
                    imgStyle={{ objectFit: `contain` }}
                />
            </Link>
        </div>
    )
}

export default BackButton;
