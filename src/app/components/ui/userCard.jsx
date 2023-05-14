import React from "react";
import Button from "../common/button";
import UserAvatar from "./userAvatar";
import UserCardInfo from "./userCardInfo";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserCard = ({user}) => {
    const history = useHistory();
    const handleClick = (id) => () => {
        console.log("Работает!");
        history.push(`/memberPage/${id}`);
    };
    return <>
        <Button calledFunction={handleClick(user.id)} name={"Show more"} buttonStyle="position-absolute m-3 top-0 end-0"/>
        <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
                <UserAvatar user={user}/>
            </div>
            <div className="col-md-8">
                <UserCardInfo user={user}/>
            </div>
        </div>

    </>
};

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserCard;