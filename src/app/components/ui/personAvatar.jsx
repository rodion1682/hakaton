import React from "react";
import PropTypes from "prop-types";

const PersonAvatar = ({ image, imageWidth }) => {
    return (
        <div className="card-body px-5">
            <div className="d-flex flex-column align-items-center text-center position-relative">
                <img
                    src={image}
                    className="rounded-circle"
                    width={imageWidth}
                    alt="My Avatar"
                />
            </div>
        </div>
    );
};

PersonAvatar.defaultProps = {
    imageWidth: "180"
};

PersonAvatar.propTypes = {
    image: PropTypes.string,
    imageWidth: PropTypes.string
};

export default PersonAvatar;
