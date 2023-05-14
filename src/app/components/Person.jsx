import React from "react";
import Loading from "./common/loading";
import { useParams } from "react-router";
import PersonPage from "./page/personPage";
import EditPage from "./page/editPage";

const Person = () => {
    const { personId, edit } = useParams();

    return (
        <>
            {personId ? (
                edit ? (
                    <EditPage personId={personId} />
                ) : (
                    <PersonPage personId={personId} />
                )
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Person;
