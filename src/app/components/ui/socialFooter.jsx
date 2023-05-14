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
    );
};

SocialFooter.propTypes = {
    user: PropTypes.object
};

export default SocialFooter;
