import React from "react";
import Loading from "../components/common/loading";
import UserCard from "../components/ui/userCard";
import Button from "../components/common/button";
import { useUsers } from "../hooks/useUsers";
import { useHistory } from "react-router-dom";

const Favorite = () => {
    const history = useHistory();
    const { favoriteUsers, deleteFavorite } = useUsers();
    const handleDelete = (id) => () => {
        deleteFavorite({ id });
    };
    const backToMainPage = () => {
        history.push("/");
    };
    if (favoriteUsers) {
        return (
            <div className="h-100">
                <div className="mb-2">
                    <h1 className="text-center text-uppercase">
                        YOUR SELECTED MEMBERS
                    </h1>
                    <div>
                        {favoriteUsers.length > 0 ? (
                            favoriteUsers.map((favUser) => (
                                <div key={favUser.id}>
                                    <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                                        <UserCard
                                            name={favUser.name}
                                            surname={favUser.surname}
                                            image={favUser.image}
                                            imageWidth="90"
                                            id={favUser.id}
                                        />
                                        <Button
                                            color={"danger"}
                                            calledFunction={handleDelete(
                                                favUser.id
                                            )}
                                            name={"Delete"}
                                            buttonStyle="position-absolute bottom-0 end-0 m-3"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <div className="container shadow-sm p-4 bg-light rounded position-relative">
                                    <div className="row gutters-sm text-center">
                                        <div className="col">
                                            <p className="mb-3">
                                                You haven't added any developers
                                                to favorites!
                                            </p>
                                            <Button
                                                color={"secondary"}
                                                calledFunction={backToMainPage}
                                                name={"Back to developers list"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    return <Loading />;
};

export default Favorite;
