import React, { useState } from "react";
import Loading from "../common/loading";
import { useParams } from "react-router";
import PersonPage from "./personPage";
import EditPage from "./editPage";

const Person = () => {
    const { personId, edit } = useParams();
    const [backImg, setBackImg] = useState();

    const handleFile = (file) => {
        setBackImg(URL.createObjectURL(file));
    };
    return (
        <>
            {personId ? (
                edit ? (
                    <EditPage
                        key="edit"
                        personId={personId}
                        handleFile={handleFile}
                    />
                ) : (
                    <PersonPage
                        key="person"
                        personId={personId}
                        backImg={backImg}
                    />
                )
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Person;
