import React from "react";
import PropTypes from "prop-types";
import BadgeRole from "../common/badgeRole";

const PersonCardInfo = ({ person }) => {
    return (
        <div className="card-body">
            <h3 className="text-uppercase">
                {person.name} {person.surname}
            </h3>
            <BadgeRole role={person.role} />
            <p className="fst-italic"> {person.about}</p>
        </div>
    );
};

PersonCardInfo.propTypes = {
    person: PropTypes.object
};

export default PersonCardInfo;
