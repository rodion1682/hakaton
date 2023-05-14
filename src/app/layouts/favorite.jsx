import React from "react";
import Loading from "../components/common/loading";
import PersonCard from "../components/ui/personCard";
import Button from "../components/common/button";
import { usePerson } from "../hooks/usePerson";
import { useHistory } from "react-router-dom";

const Favorite = () => {
    const history = useHistory();
    const { favoritePersons, deleteFavorite } = usePerson();
    const handleDelete = (id) => () => {
        deleteFavorite({ id });
    };
    const backToMainPage = () => {
        history.push("/");
    };
    if (favoritePersons) {
        return (
            <div className="h-100">
                <div className="mb-2">
                    <h1 className="text-center text-uppercase">
                        YOUR SELECTED MEMBERS
                    </h1>
                    <div>
                        {favoritePersons.length > 0 ? (
                            favoritePersons.map((favPerson) => (
                                <div key={favPerson.id}>
                                    <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                                        <PersonCard
                                            name={favPerson.name}
                                            surname={favPerson.surname}
                                            image={favPerson.image}
                                            imageWidth="90"
                                            id={favPerson.id}
                                        />
                                        <Button
                                            color={"danger"}
                                            calledFunction={handleDelete(
                                                favPerson.id
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
