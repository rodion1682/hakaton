import React, {useEffect, useState} from "react";
import Loading from "../components/common/loading";
import UserCard from "../components/ui/userCard";
import Button from "../components/common/button";
import API from "../api/user.api";

const Favorite = () => {
    const [users, setUsers] = useState();
    const [favoriteUsers, setFavoriteUsers] = useState();

    useEffect(() => {
        API.fetchAll().then((data) => {
            setUsers(data);
            setFavoriteUsers(data.filter((user) => user.favorite === true));
        });
    }, []);

    if (favoriteUsers) {
        const handleDelete = (id) => () => {
            const updatedUsers = [...users];
            const userIndex = updatedUsers.findIndex((user) => user.id === id);
            if (userIndex !== -1) {
                updatedUsers[userIndex] = { ...updatedUsers[userIndex], favorite: false };
                API.update(id, updatedUsers[userIndex]).then(() => {
                    setUsers(updatedUsers);
                    setFavoriteUsers(updatedUsers.filter((user) => user.favorite === true));
                });
            }
        }

        return (
            <div>
                {favoriteUsers.length > 0 ? (
                    favoriteUsers.map((user) => (
                        <div key={user.id}>
                            <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                                <UserCard user={user} />
                                <Button
                                    color={"danger"}
                                    calledFunction={handleDelete(user.id)}
                                    name={"Delete"}
                                    buttonStyle="position-absolute bottom-0 end-0 m-3"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You haven't favorited any users yet!</p>
                )}
                {users.length > 0 && favoriteUsers.length === 0 && <p>No favorite users found.</p>}
                {!users.length && <Loading />}
            </div>
        );
    }
    return <Loading/>
};

export default Favorite;