import React, { useEffect, useState } from "react";
import API from "../../api/person.api";
import Loading from "../common/loading";
import ProgressBar from "../common/progressBar";
import { useParams, useHistory } from "react-router-dom";
import { usePerson } from "../../hooks/usePerson";
import SocialFooter from "../ui/socialFooter";
import Slider from "../ui/slider";
import PropTypes from "prop-types";

const PersonPage = ({ backImg }) => {
    const { personId } = useParams();
    const id = Number(personId);
    const [person, setPerson] = useState();
    const [favorite, setFavorite] = useState(false);
    const { addFavorite, deleteFavorite } = usePerson();
    const localStorageTechnologies = localStorage.getItem("technologies");
    const technologies = JSON.parse(localStorageTechnologies);

    useEffect(() => {
        API.fetchAll().then((persons) => {
            setPerson(persons[id]);
            setFavorite(persons[id].favorite);
        });
    }, []);

    const handleFavorite = (id, favoriteStatus) => () => {
        if (!favoriteStatus) {
            addFavorite({ id });
        } else {
            deleteFavorite({ id });
        }
        setFavorite(!favoriteStatus);
        setPerson((prevPerson) => ({ ...prevPerson, favorite: !favoriteStatus }));
    };

    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    const colorOfStar = favorite === true ? "-fill" : "";

    if (person) {
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
                                            src={person.image}
                                            alt="Generic placeholder"
                                            className="img-fluid img-thumbnail mt-4 mb-2"
                                            style={{
                                                width: "150px",
                                                zIndex: 1
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark d-flex justify-content-center"
                                            data-mdb-ripple-color="dark"
                                            style={{ zIndex: 1 }}
                                            onClick={handleFavorite(
                                                id,
                                                person.favorite
                                            )}
                                        >
                                            To favorite
                                            <i
                                                className={`bi bi-star${colorOfStar} text-warning ms-1`}
                                            ></i>
                                        </button>
                                    </div>
                                    <div
                                        className="ms-3"
                                        style={{
                                            marginTop: "160px",
                                            position: "relative",
                                            textShadow: "0 5px 15px #000"
                                        }}
                                    >
                                        <h4>
                                            {person.name} {person.surname}
                                        </h4>
                                    </div>
                                </div>
                                <div
                                    className="p-4 text-black"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                >
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <SocialFooter social={person.social} />
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">
                                            About me
                                        </p>
                                        <div
                                            className="p-4"
                                            style={{
                                                backgroundColor: "#f8f9fa"
                                            }}
                                        >
                                            <p className="font-italic mb-1">
                                                {person.about}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">
                                            Technologies
                                        </p>
                                    </div>
                                    <Slider>
                                        {Object.values(technologies).map(
                                            (tech) => (
                                                <ProgressBar
                                                    key={tech.id}
                                                    currentMember={person}
                                                    technology={tech}
                                                />
                                            )
                                        )}
                                    </Slider>
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
    backImg: PropTypes.string
}

export default PersonPage;
