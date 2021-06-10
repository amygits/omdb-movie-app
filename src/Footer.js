import React from 'react';
import footer from './Footer.css'
import FooterLinks from './FooterLinks';


function Footer(props) {
    return(
        <div className="footer">
            {props.title}
            <FooterLinks></FooterLinks>
        </div>
    );
}

export default Footer;