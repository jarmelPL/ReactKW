import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div>
            <footer>
                <ul>
                    <li>Regulamin</li>
                    <li>FAQ</li>
                    <li>Info</li>
                </ul>
                <div>Contact: {props.contactEmail},
                Contact2: {props.companyData.email + ' ' + props.companyData.city}</div>
            </footer>
        </div>
    )
}

export default Footer;