import React from "react";
import ProgressBar from "./app/components/common/progressBar";
import "bootstrap/dist/css/bootstrap.css";
import BadgeRole from "./app/components/common/badgeRole";
import api from "./app/api/user.api"

function TestPage() {
    const id = 0;
    const localStorageCurrentMember = localStorage.getItem("members");
    const currentMembers = JSON.parse(localStorageCurrentMember);
    const localStorageTechnologies = localStorage.getItem("technologies");
    const technologies = JSON.parse(localStorageTechnologies);
    const currentMember = currentMembers.find(u => u.id === id);
    return <>
        <div className="App mb-5">
            <div>App</div>
        </div>
        <div className="container">
            <div className="row">
                <div>Progress</div>
                {Object.values(technologies).map(tech =>
                    <ProgressBar key={tech.id} currentMember={currentMember} technology={tech}/>
                )}
            </div>
            <div className="mb-5">
                <BadgeRole role={currentMember.role}/>
            </div>
        </div>
    </>
};

export default TestPage;
