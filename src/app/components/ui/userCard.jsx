import React from "react";
import Button from "../common/button";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import BadgeRole from "../common/badgeRole";
import SocialFooter from "./socialFooter";

const UserCard = ({
    name,
    surname,
    image,
    imageWidth,
    about,
    role,
    social,
    id
}) => {
    const history = useHistory();
    const handleClick = (id) => () => {
        history.push(`/person/${id}`);
    };
    return (
        <>
            <div>
                <Button
                    calledFunction={handleClick(id)}
                    name={"Show more"}
                    buttonStyle="position-absolute m-3 top-0 end-0"
                />
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
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
                    </div>
                    <div className="col-md-8 d-flex">
                        <div className="card-body d-flex flex-column justify-content-center me-5">
                            <h3 className="text-uppercase me-5">
                                {name} {surname}
                            </h3>
                            {role && <BadgeRole role={role} />}
                            {about && (
                                <p className="fst-italic mt-2">{about}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {social && <SocialFooter social={social} />}
        </>
    );
};

UserCard.defaultProps = {
    imageWidth: "180"
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageWidth: PropTypes.string,
    about: PropTypes.string,
    role: PropTypes.string,
    social: PropTypes.array,
    id: PropTypes.number.isRequired
};

export default UserCard;
