import React from "react";
import Loading from "../components/common/loading";
import UserCard from "../components/ui/userCard";
import Button from "../components/common/button";
import { useUsers } from "../hooks/useUsers";

const Favorite = () => {
    const { favoriteUsers, deleteFavorite } = useUsers();
    const handleDelete = (id) => () => {
        deleteFavorite({ id });
    };
    if (favoriteUsers) {
        return (
            <div>
                {favoriteUsers.length > 0 ? (
                    favoriteUsers.map((favUser) => (
                        <div key={favUser.id}>
                            <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                                <UserCard user={favUser} />
                                <Button
                                    color={"danger"}
                                    calledFunction={handleDelete(favUser.id)}
                                    name={"Delete"}
                                    buttonStyle="position-absolute bottom-0 end-0 m-3"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="position-absolute top-50 start-50 translate-middle">
                        You haven't favorited any users yet!
                    </div>
                )}
            </div>
        );
    }
    return <Loading />;
};

export default Favorite;
