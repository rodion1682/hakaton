import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, calledFunction, name, type, buttonStyle }) => {
    const buttonRound = type === "rounded" ? " rounded-pill" : "";
    return (
        <div>
            <button
                type="button"
                className={`${buttonStyle} btn btn-outline-${color}${buttonRound}`}
                onClick={calledFunction}
            >
                {name}
            </button>
        </div>
    );
};

Button.defaultProps = {
    color: "secondary",
    type: "rounded"
};

Button.propTypes = {
    color: PropTypes.string,
    calledFunction: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    textStyle: PropTypes.string
};

export default Button;
