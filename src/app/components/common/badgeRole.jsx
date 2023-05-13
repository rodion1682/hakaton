import React from "react";
import PropTypes from "prop-types";

const BadgeRole = ({ role }) => {
    const roleStyle = role === "danger" ? "Тимлид" : "Разработчик";
    return (
        <div>
            <span className={`badge rounded-pill bg-${role}`}>{roleStyle}</span>
        </div>
    );
};

BadgeRole.propTypes = {
    role: PropTypes.string.isRequired
};

export default BadgeRole;
