import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();
    const history = useHistory();

    const crumbs = location.pathname.split("/").filter((x) => x !== "");

    //  style={{ "--bs-breadcrumb-divider": ">" }}
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {crumbs.length > 0 ? (
                    <li className="breadcrumb-item">
                        <Link onClick={() => history.push("/")}>Главная</Link>
                    </li>
                ) : (
                    <li className="breadcrumb-item">
                        <span>Главная</span>
                    </li>
                )}
                {crumbs.map((name, index) => {
                    const routeTo = `/${crumbs.slice(0, index + 1).join("/")}`;
                    const isLast = index === crumbs.length - 1;

                    const linkNameReform = (name) => {
                        if (name === "favorite") {
                            return "Избраное";
                        } else if (name === "memberPage") {
                            return "Страница участника";
                        } else {
                            return name;
                        }
                    };

                    return isLast ? (
                        <li className="breadcrumb-item" key={name}>
                            <span>{linkNameReform(name)}</span>
                        </li>
                    ) : (
                        <li className="breadcrumb-item" key={name}>
                            <Link onClick={() => history.push(routeTo)}>
                                {linkNameReform(name)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
