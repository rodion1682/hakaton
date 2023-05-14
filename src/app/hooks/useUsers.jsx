import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import API from "../api/user.api";
import Loading from "../components/common/loading";

const FavoriteContext = React.createContext();

export const useUsers = () => {
    return useContext(FavoriteContext);
};

const FavoriteProvider = ({ children }) => {
    const [users, setUsers] = useState();
    const [favoriteUsers, setFavoriteUsers] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        if (error !== null) {
            setError(null);
        }
    }, [error]);

    async function getUsers() {
        try {
            await API.fetchAll().then((data) => {
                setUsers(data);
                setFavoriteUsers(data.filter((user) => user.favorite === true));
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function addFavorite({ id }) {
        try {
            const updatedUsers = [...users];
            const userIndex = updatedUsers.findIndex((user) => user.id === id);
            if (userIndex !== -1) {
                updatedUsers[userIndex] = {
                    ...updatedUsers[userIndex],
                    favorite: true
                };
                await API.update(id, updatedUsers[userIndex]).then(() => {
                    setUsers(updatedUsers);
                    setFavoriteUsers(
                        updatedUsers.filter((user) => user.favorite === true)
                    );
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteFavorite({ id }) {
        try {
            const updatedUsers = [...users];
            const userIndex = updatedUsers.findIndex((user) => user.id === id);
            if (userIndex !== -1) {
                updatedUsers[userIndex] = {
                    ...updatedUsers[userIndex],
                    favorite: false
                };
                await API.update(id, updatedUsers[userIndex]).then(() => {
                    setUsers(updatedUsers);
                    setFavoriteUsers(
                        updatedUsers.filter((user) => user.favorite === true)
                    );
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FavoriteContext.Provider
            value={{ users, favoriteUsers, deleteFavorite, addFavorite }}
        >
            {!isLoading ? children : <Loading />}
        </FavoriteContext.Provider>
    );
};

FavoriteProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default FavoriteProvider;
