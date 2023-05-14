import React from "react";

const Footer = () => {
    const packageJson = require("../../../../package.json");
    console.log(packageJson.dependencies.bootstrap);
    return (
        <div className="text-center p-2 bg-light bg-dark text-white fs-6">
            Hacaton React Team 3, 2023
            <br /> Technologies: bootstrap
            {packageJson.dependencies.bootstrap}, bootstrap-icons, react 18.2.0,
            react-router-dom 5.3.4
        </div>
    );
};

export default Footer;
