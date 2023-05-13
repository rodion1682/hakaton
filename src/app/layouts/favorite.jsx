import React, {useEffect, useState} from "react";
import UserAvatar from "../components/ui/userAvatar";
import UserCardInfo from "../components/ui/userCardInfo";
import Loading from "../components/common/loading";
import userApi from "../api/user.api";

const Favorite = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, [])
    const handleClick = () => {
        console.log("click");
    };
    if (users) {
        const favoriteUsers = users.filter(user => user.favorite === true);
        return (
            <div>
                {favoriteUsers.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <button
                                className="position-absolute top-0 end-0 btn"
                                onClick={handleClick}
                            >
                                <i className="bi bi-info-square"></i>
                            </button>
                            <div className="row gutters-sm">
                                <div className="col-md-4 mb-3">
                                    <UserAvatar user={user}/>
                                </div>
                                <div className="col-md-8">
                                    <UserCardInfo user={user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return <Loading/>
};

export default Favorite;