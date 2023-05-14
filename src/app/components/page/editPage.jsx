import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const EditPage = ({ personId, handleFile }) => {
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState();
    const hiddenFileInput = useRef();
    const history = useHistory();

    useEffect(() => {
        if (file) {
            handleFile(file);
            history.push(`/person/${personId}`);
        }
    }, [file, handleFile, history, personId]);

    const handleDragStart = (e) => {
        e.preventDefault();
        setDrag(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setDrag(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        let dropFiles = [...e.dataTransfer.files];
        setFile(dropFiles[0]);
        setDrag(false);
    };
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files.length === 0) {
            // No file selected? -> ignore
            return;
        }
        let inputFile = e.target.files;
        setFile(inputFile[0]);
    };
    const handleClick = (e) => {
        e.preventDefault();
        hiddenFileInput.current.click();
    };
    const classesForArea = () => "fileArea " + (drag ? "hover" : "");

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <form style={{ cursor: "pointer" }}>
                        <div
                            className={classesForArea()}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragStart}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={handleClick}
                        >
                            <i className="bi bi-upload fs-1"></i>
                            {drag ? (
                                <p>Отпустите файл, чтобы загрузить его</p>
                            ) : (
                                <p>
                                    Перетащите файл, или кликните для загрузки
                                </p>
                            )}
                        </div>
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            style={{ display: "none" }}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
EditPage.propTypes = {
    personId: PropTypes.string.isRequired
};

export default EditPage;
