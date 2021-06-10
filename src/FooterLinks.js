import React from 'react';
import footer from './FooterLinks.css'


function FooterLinks(props) {
    return(
        <div className="footerLinks">
            |<a href ="mailto:amyma402@gmail.com" target = "blank" rel = "noopener noreferrer">Email Me</a>| |
            <a href ="https://www.linkedin.com/in/1amyma/" target = "blank" rel = "noopener noreferrer">LinkedIn</a>|
        </div>
    );
}

export default FooterLinks;