import React from "react";
import PropTypes from "prop-types";
import BadgeRole from "../common/badgeRole";

const UserCardInfo = ({ user }) => {
    return (
        <div className="card-body">
            <h3 className="text-uppercase">
                {user.name} {user.surname}
            </h3>
            <BadgeRole role={user.role} />
            <p className="fst-italic mt-2"> {user.about}</p>
        </div>
    );
};

UserCardInfo.propTypes = {
    user: PropTypes.object
};

export default UserCardInfo;
