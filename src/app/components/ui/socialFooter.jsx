import React from "react";
import PropTypes from "prop-types";

const SocialFooter = ({ social }) => {
    return (
        <ul className="nav justify-content-center fs-6">
            {social &&
                social.map((soc) => (
                    <li className="nav-item">
                        <a
                            className="btn"
                            target="_blank"
                            href={soc.url}
                            rel="noreferrer"
                        >
                            {soc.name} <i className={`bi bi-${soc.name}`}></i>
                        </a>
                    </li>
                ))}
        </ul>

        // <>
        //     <ul className="nav justify-content-center fs-6">
        //         <li className="nav-item">
        //             <a className="btn" target="_blank" href="#">
        //                 Instagram <i className="bi bi-instagram"></i>
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="btn" target="_blank" href="#">
        //                 Telegram <i className="bi bi-telegram"></i>
        //             </a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="btn" target="_blank" href="#">
        //                 В контакте <i className="bi bi-bootstrap"></i>
        //             </a>
        //         </li>
        //     </ul>
        // </>
    );
};

SocialFooter.propTypes = {
    user: PropTypes.object
};

export default SocialFooter;
