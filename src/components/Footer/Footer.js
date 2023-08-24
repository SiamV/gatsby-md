import React from 'react';
import WhatsApp from '../Contacts/WhatsApp';
import * as classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.wrapperFooter}>
            <WhatsApp/>
        </div>
    )
}

export default Footer;
