import React from "react";

const Footer = () => {
    const packageJson = require("../../../../package.json");
    return (
        <div className="text-center p-2 bg-light bg-dark text-white fs-6">
            Hackathon React Team 3, 2023
            <br /> {`Technologies: bootstrap
        ${packageJson.dependencies.bootstrap}, bootstrap-icons${packageJson.dependencies["bootstrap-icons"]}, react${packageJson.dependencies.react},
            react-router-dom${packageJson.dependencies["react-router-dom"]}`}
        </div>
    );
};

export default Footer;
