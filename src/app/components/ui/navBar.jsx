import React from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const NavBar = () => {
    const { favoriteUsers } = useUsers();
    const favoriteUsersCount = favoriteUsers.length;

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li>
                        <Link className="nav-link active text-white" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white" to="/favorite">
                            Favorites: <span>{favoriteUsersCount}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
