import { Link } from 'gatsby';
import React from 'react';
// import { StaticImage } from "gatsby-plugin-image";
import * as classes from './BackButton.module.css';


const BackButton = ({ path }) => {
    return (
        <div className={classes.wrapperBackButton}>
            <Link to={path}>
                Button
            </Link>
            {/* <StaticImage
                placeholder="blurred"
                src="../../images/whatsapp-v2.png"
                alt="WhatsApp"
                formats={["AUTO", "WEBP", "AVIF"]}
                className={classes.imgSocial}
                layout="constrained"
                imgStyle={{ objectFit: `contain` }}
            /> */}
        </div>
    )
}

export default BackButton;
