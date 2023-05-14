import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api/person.api";
import Loading from "../components/common/loading";

const PersonContext = React.createContext();

export const usePerson = () => {
    return useContext(PersonContext);
};

const PersonProvider = ({ children }) => {
    const [persons, setPersons] = useState();
    const [favoritePersons, setFavoritePersons] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getPersons();
    }, []);
    useEffect(() => {
        if (error !== null) {
            setError(null);
        }
    }, [error]);

    async function getPersons() {
        try {
            await API.fetchAll().then((data) => {
                setPersons(data);
                setFavoritePersons(data.filter((person) => person.favorite === true));
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function addFavorite({ id }) {
        try {
            const updatedPersons = [...persons];
            const personIndex = updatedPersons.findIndex((person) => person.id === id);
            if (personIndex !== -1) {
                updatedPersons[personIndex] = { ...updatedPersons[personIndex], favorite: true };
                await API.update(id, updatedPersons[personIndex]).then(() => {
                    setPersons(updatedPersons);
                    setFavoritePersons(updatedPersons.filter((person) => person.favorite === true));
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteFavorite({ id }) {
        try {
            const updatedPersons = [...persons];
            const personIndex = updatedPersons.findIndex((person) => person.id === id);
            if (personIndex !== -1) {
                updatedPersons[personIndex] = {
                    ...updatedPersons[personIndex],
                    favorite: false
                };
                await API.update(id, updatedPersons[personIndex]).then(() => {
                    setPersons(updatedPersons);
                    setFavoritePersons(
                        updatedPersons.filter((person) => person.favorite === true)
                    );
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PersonContext.Provider
            value={{ persons, favoritePersons, deleteFavorite, addFavorite }}
        >
            {!isLoading ? children : <Loading />}
        </PersonContext.Provider>
    );
};

PersonProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PersonProvider;
