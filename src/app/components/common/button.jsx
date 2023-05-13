import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, calledFunction, name, type }) => {
    const buttonStyle = type === "rounded" ? " rounded-pill" : "";
    return (
        <div>
            <button
                type="button"
                className={`btn btn-outline-${color}${buttonStyle}`}
                onClick={calledFunction}
            >
                {name}
            </button>
        </div>
    );
};

Button.defaultProps = {
    color: "primary",
    type: "rounded"
};

Button.propTypes = {
    color: PropTypes.string,
    calledFunction: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Button;
