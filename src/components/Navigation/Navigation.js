import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import './Navigation.scss';

const Navigation = () => {
    return (
        <div className="navigation_container">
            <input type="checkbox" id="check" />
            <label for="check" ><FontAwesomeIcon icon={faBars} className="checkbtn" style={{ 'width': '1.8rem', 'height': '1.5rem', 'float': 'right', 'marginTop': '.5rem','backgroundColor':'#554bb9','borderRadius':'5px', 'padding':'.2rem' }} /></label>
            <a href="https://ksa.futurebanksummit.com/">
                <img src="https://ksa.futurebanksummit.com/wp-content/uploads/2023/08/fbs-logo.png" alt="nav img" />
            </a>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">EVENT DETAILS <FontAwesomeIcon icon={faCaretDown} style={{ 'color': 'white' }} /></a> </li>
                <li><a href="/">SCHEDULE</a></li>
                <li><a href="/">SPEAKERS</a></li>
                <li><a href="/">PARTNERS</a></li>
                <li><a href="/">AWARDS</a></li>
                <li><a href="/">GALLERY</a></li>
                <li><a href="/">CONTACT US <FontAwesomeIcon icon={faCaretDown} style={{ 'color': 'white' }} /></a></li>
                <li><button>REGISTER</button></li>
            </ul>
            <div className="navbg"></div>
        </div>

    );
};

export default Navigation;