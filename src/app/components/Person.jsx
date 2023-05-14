import React, { useEffect, useState } from "react";
import Loading from "./common/loading";
import { useParams } from "react-router";
import PersonPage from "./page/personPage";
import EditPage from "./page/editPage";

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
                    <EditPage personId={personId} handleFile={handleFile} />
                ) : (
                    <PersonPage personId={personId} backImg={backImg} />
                )
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Person;
