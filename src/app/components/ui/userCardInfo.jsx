import React from "react";
import PropTypes from "prop-types";

const UserCardInfo = ({ user }) => {
    return (
        <div className="card-body">
            <div className="">
                <h3 className="text-uppercase">
                    {user.name} {user.surname}
                </h3>
                <h6>Роль в каманде: {user.role}</h6>
                <p className="fst-italic"> {user.about}</p>
            </div>
        </div>
    );
};

UserCardInfo.propTypes = {
    user: PropTypes.object
};

export default UserCardInfo;
