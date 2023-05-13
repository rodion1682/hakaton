import React from "react";
import PropTypes from "prop-types";

const UserAvatar = ({ user }) => {
    return (
        <div className="card-body px-5">
            <div className="d-flex flex-column align-items-center text-center position-relative">
                <img
                    src={user.image}
                    className="rounded-circle"
                    width="180"
                    alt="My Avatar"
                />
            </div>
        </div>
    );
};

UserAvatar.propTypes = {
    user: PropTypes.object
};

export default UserAvatar;
