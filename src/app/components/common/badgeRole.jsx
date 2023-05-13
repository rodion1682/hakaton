import React from "react";
import PropTypes from "prop-types";

const BadgeRole = ({ role }) => {
    const roleStyle = role === "Team Lead" ? "danger" : "primary";
    return <div>
        <span className={`badge rounded-pill bg-${roleStyle}`}>{role}</span>
    </div>
};

BadgeRole.propTypes = {
    role: PropTypes.string.isRequired
}

export default BadgeRole;