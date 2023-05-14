//import React, { useEffect, useState } from "react";
//// import PropTypes from "prop-types";
//import API from "../../api/user.api";
//import Loading from "../common/loading";
//import ProgressBar from "../common/progressBar";
//import { useParams, useHistory } from "react-router-dom";
//import { useUsers } from "../../hooks/useUsers";

//const PersonPage = ({ backImg }) => {
//    const { personId } = useParams();
//    const id = Number(personId);
//    const [user, setUser] = useState();
//    const { addFavorite } = useUsers();

//    const localStorageTechnologies = localStorage.getItem("technologies");
//    const technologies = JSON.parse(localStorageTechnologies);

//    useEffect(() => {
//        API.fetchAll().then((users) => {
//            setUser(users[id]);
//        });
//    }, []);

//    const handleFavorite = (id) => () => {
//        addFavorite({ id });
//    };

//    const history = useHistory();
//    const handleClick = () => {
//        history.push(history.location.pathname + "/edit");
//    };

//    if (user) {
//        return (
//            <section className="h-100">
//                <div className="container py-5 h-100">
//                    <div className="row d-flex justify-content-center align-items-center h-100">
//                        <div className="col col-lg-9 col-xl-7">
//                            <div className="card">
//                                <div
//                                    className="rounded-top text-white d-flex flex-row"
//                                    style={{
//                                        backgroundColor: "#000",
//                                        height: "200px"
//                                    }}
//                                >
//                                    {backImg && (
//                                        <div
//                                            className="img-fluid position-absolute"
//                                            style={{
//                                                height: "200px",
//                                                width: "100%"
//                                            }}
//                                        >
//                                            <img
//                                                src={backImg}
//                                                alt="nothing"
//                                                className=""
//                                                style={{
//                                                    width: "100%",
//                                                    height: "100%",
//                                                    objectFit: "cover"
//                                                }}
//                                            ></img>
//                                        </div>
//                                    )}
//                                    <button
//                                        className="position-absolute top-0 end-0 btn btn-dark btn-sm"
//                                        onClick={handleClick}
//                                    >
//                                        <i className="bi bi-gear"></i>
//                                    </button>
//                                    <div
//                                        className="ms-4 mt-5 d-flex flex-column"
//                                        style={{ width: "150px" }}
//                                    >
//                                        <img
//                                            src={user.image}
//                                            alt="Generic placeholder"
//                                            className="img-fluid img-thumbnail mt-4 mb-2"
//                                            style={{
//                                                width: "150px",
//                                                zIndex: 1
//                                            }}
//                                        />
//                                        <button
//                                            type="button"
//                                            className="btn btn-outline-dark"
//                                            data-mdb-ripple-color="dark"
//                                            style={{ zIndex: 1 }}
//                                            onClick={handleFavorite(id)}
//                                        >
//                                            Add to favorite
//                                        </button>
//                                    </div>
//                                    <div
//                                        className="ms-3"
//                                        style={{
//                                            marginTop: "130px",
//                                            position: "relative",
//                                            textShadow: "0 5px 15px #000"
//                                        }}
//                                    >
//                                        <h5>
//                                            {user.name} {user.surname}
//                                        </h5>
//                                        <p>New York</p>
//                                    </div>
//                                </div>
//                                <div
//                                    className="p-4 text-black"
//                                    style={{ backgroundColor: "#f8f9fa" }}
//                                >
//                                    <div className="d-flex justify-content-end text-center py-1">
//                                        <button className="btn btn-light">
//                                            <i className="bi bi-telegram"></i>
//                                        </button>
//                                        <button className="btn btn-light">
//                                            <i className="bi bi-github"></i>
//                                        </button>
//                                        <button className="btn btn-light">
//                                            <i className="bi bi-discord"></i>
//                                        </button>
//                                    </div>
//                                </div>
//                                <div className="card-body p-4 text-black">
//                                    <div className="mb-5">
//                                        <p className="lead fw-normal mb-1">
//                                            О себе
//                                        </p>
//                                        <div
//                                            className="p-4"
//                                            style={{
//                                                backgroundColor: "#f8f9fa"
//                                            }}
//                                        >
//                                            <p className="font-italic mb-1">
//                                                {user.about}
//                                            </p>
//                                        </div>
//                                    </div>
//                                    <div className="d-flex justify-content-between align-items-center mb-4">
//                                        <p className="lead fw-normal mb-0">
//                                            Technologies
//                                        </p>
//                                        <p className="mb-0">
//                                            <a href="#!" className="text-muted">
//                                                Show all
//                                            </a>
//                                        </p>
//                                    </div>
//                                    {Object.values(technologies).map((tech) => (
//                                        <ProgressBar
//                                            key={tech.id}
//                                            currentMember={user}
//                                            technology={tech}
//                                        />
//                                    ))}
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//            </section>
//        );
//    } else {
//        return <Loading />;
//    }
//};
////PersonPage.propTypes = {
////    userId: PropTypes.number.isRequired
////};

//export default PersonPage;

import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import API from "../../api/user.api";
import Loading from "../common/loading";
import ProgressBar from "../common/progressBar";
import { useParams, useHistory } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";
import SocialFooter from "../ui/socialFooter";

const PersonPage = ({ backImg }) => {
    const { personId } = useParams();
    const id = Number(personId);
    const [user, setUser] = useState();
    const { addFavorite } = useUsers();

    const localStorageTechnologies = localStorage.getItem("technologies");
    const technologies = JSON.parse(localStorageTechnologies);

    useEffect(() => {
        API.fetchAll().then((users) => {
            setUser(users[id]);
        });
    }, []);

    const handleFavorite = (id) => () => {
        addFavorite({ id });
    };

    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    if (user) {
        return (
            <section className="h-100">
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
                                    {backImg && (
                                        <div
                                            className="img-fluid position-absolute"
                                            style={{
                                                height: "200px",
                                                width: "100%"
                                            }}
                                        >
                                            <img
                                                src={backImg}
                                                alt="nothing"
                                                className=""
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover"
                                                }}
                                            ></img>
                                        </div>
                                    )}
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
                                            onClick={handleFavorite(id)}
                                        >
                                            Add to favorite
                                        </button>
                                    </div>
                                    <div
                                        className="ms-3"
                                        style={{
                                            marginTop: "130px",
                                            position: "relative",
                                            textShadow: "0 5px 15px #000"
                                        }}
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
                                        <SocialFooter social={user.social} />
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
                                            Technologies
                                        </p>
                                    </div>
                                    {Object.values(technologies).map((tech) => (
                                        <ProgressBar
                                            key={tech.id}
                                            currentMember={user}
                                            technology={tech}
                                        />
                                    ))}
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
//PersonPage.propTypes = {
//    userId: PropTypes.number.isRequired
//};

export default PersonPage;
