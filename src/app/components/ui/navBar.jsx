import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
                            Favorites <span>0</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
