import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../../api/user.api";
import Loading from "../common/loading";
import { useHistory } from "react-router";

const PersonPage = ({ personId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.getById(+personId).then((data) => setUser(data));
        console.log(user);
    }, [personId]);

    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div
                                    className="rounded-top text-white d-flex flex-row"
                                    style={{
                                        backgroundColor: "#000",
                                        height: "200px"
                                    }}
                                >
                                    <button
                                        className="position-absolute top-0 end-0 btn btn-dark btn-sm"
                                        onClick={handleClick}
                                    >
                                        <i className="bi bi-gear"></i>
                                    </button>
                                    <div
                                        className="ms-4 mt-5 d-flex flex-column"
                                        style={{ width: "150px" }}
                                    >
                                        <img
                                            src={user.image}
                                            alt="Generic placeholder"
                                            className="img-fluid img-thumbnail mt-4 mb-2"
                                            style={{
                                                width: "150px",
                                                zIndex: 1
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark"
                                            data-mdb-ripple-color="dark"
                                            style={{ zIndex: 1 }}
                                        >
                                            Add to favorite
                                        </button>
                                    </div>
                                    <div
                                        className="ms-3"
                                        style={{ marginTop: "130px" }}
                                    >
                                        <h5>
                                            {user.name} {user.surname}
                                        </h5>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div
                                    className="p-4 text-black"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                >
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <button className="btn btn-light">
                                            <i className="bi bi-telegram"></i>
                                        </button>
                                        <button className="btn btn-light">
                                            <i className="bi bi-github"></i>
                                        </button>
                                        <button className="btn btn-light">
                                            <i className="bi bi-discord"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">
                                            О себе
                                        </p>
                                        <div
                                            className="p-4"
                                            style={{
                                                backgroundColor: "#f8f9fa"
                                            }}
                                        >
                                            <p className="font-italic mb-1">
                                                {user.about}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">
                                            Recent photos
                                        </p>
                                        <p className="mb-0">
                                            <a href="#!" className="text-muted">
                                                Show all
                                            </a>
                                        </p>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                                alt=""
                                                className="w-100 rounded-3"
                                            />
                                        </div>
                                        <div className="col mb-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                                alt=""
                                                className="w-100 rounded-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                                alt=""
                                                className="w-100 rounded-3"
                                            />
                                        </div>
                                        <div className="col">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                                alt=""
                                                className="w-100 rounded-3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return <Loading />;
    }
};
PersonPage.propTypes = {
    personId: PropTypes.string.isRequired
};

export default PersonPage;
