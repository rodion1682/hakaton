import React, {useEffect, useState} from "react";
import Loading from "../components/common/loading";
import userApi from "../api/user.api";
import UserCard from "../components/ui/userCard";

const Favorite = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    if (users) {
        const favoriteUsers = users.filter(user => user.favorite === true);
        return (
            <div>
                {favoriteUsers.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <UserCard user={user}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return <Loading/>
};

export default Favorite;