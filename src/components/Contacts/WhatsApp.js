import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as classes from './Contacts.module.css';


const WhatsApp = () => {
    return (
        <div className={classes.wrapperImgSocial}>
            <a href="https://api.whatsapp.com/send?phone=5219983886735" rel="nofollow">
            <StaticImage
                placeholder="blurred"
                src="../../images/whatsapp-v2.png"
                alt="WhatsApp"
                formats={["AUTO", "WEBP", "AVIF"]}
                className={classes.imgSocial}
                layout="constrained"
                imgStyle={{ objectFit: `contain` }}
            />
            </a>
        </div>
    )
}

export default WhatsApp;
