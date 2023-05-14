import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    const crumbs = location.pathname.split("/").filter((x) => x !== "");

    if (crumbs.includes("person")) {
        const index = crumbs.findIndex((x) => x === "person");
        crumbs.splice(index + 1);
    }

    //  style={{ "--bs-breadcrumb-divider": ">" }}
    return (
        <nav className="ms-4 mt-2" aria-label="breadcrumb">
            <ol className="breadcrumb" aria-label="breadcrumb">
                {crumbs.length > 0 ? (
                    <li className="breadcrumb-item text-white">
                        <Link to="/">Home</Link>
                    </li>
                ) : (
                    <li className="breadcrumb-item ">
                        <span>Home</span>
                    </li>
                )}
                {crumbs.map((name, index) => {
                    const routeTo = `/${crumbs.slice(0, index + 1).join("/")}`;
                    const isLast = index === crumbs.length - 1;

                    const linkNameReform = (name) => {
                        if (name === "favorite") {
                            return "Favorites";
                        } else if (name === "person") {
                            return "Person page";
                        } else {
                            return name;
                        }
                    };

                    return isLast ? (
                        <li className="breadcrumb-item text-white" key={name}>
                            <span>{linkNameReform(name)}</span>
                        </li>
                    ) : (
                        <li className="breadcrumb-item text-white" key={name}>
                            <Link to={routeTo}>{linkNameReform(name)}</Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
