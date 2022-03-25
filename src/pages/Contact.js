import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/src";


const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">

                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-mobile-alt"></i>
                            <CopyToClipboard text="0612532988">
                                <span className="clickInputTel"
                                      onClick={() => {
                                          alert('Téléphone copié !');
                                        }}>06 12 53 29 88
                                </span>
                            </CopyToClipboard>

                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="mathieu.jaupitre@gmail.com">
                                <span className="clickInput"
                                      onClick={() => {
                                          alert('E-mail copié !');
                                      }}>mathieu.jaupitre@gmail.com
                                </span>
                            </CopyToClipboard>

                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                            <a href="https://www.linkedin.com/in/mathieu-jaupitre-650a2190/" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Contact;