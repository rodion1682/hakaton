import React, {useEffect, useState} from "react";
import Loading from "../components/common/loading";
import userApi from "../api/user.api";
import UserCard from "../components/ui/userCard";
import Button from "../components/common/button";

const Favorite = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (id) => () => {
        console.log(id);
    }

    if (users) {
        const favoriteUsers = users.filter(user => user.favorite === true);
        return (
            <div>
                {favoriteUsers.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <UserCard user={user}/>
                            <Button color={"danger"} calledFunction={handleDelete(user.id)} name={"Delete"} buttonStyle="position-absolute bottom-0 end-0 m-3"/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return <Loading/>
};

export default Favorite;