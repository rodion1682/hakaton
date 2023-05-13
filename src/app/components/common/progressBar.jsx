import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({currentMember, technology}) => {
    const memberTechnologies = currentMember.technologies;
    let technologyPercent = "";
    for (let tech in memberTechnologies) {
        if (tech === technology.id) {
            technologyPercent = memberTechnologies[tech];
        }
    }
    ;
    return <>
        <div className="col align-self-start mb-3">
            <div className="card p-3" style={{width: "auto"}}>
                <img src={technology.image} className="card-img-top mx-auto" alt="..."
                     style={{width: "200px", height: "200px"}}/>
                <div className="card-body">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${technologyPercent}%`}}
                             aria-valuenow={technologyPercent}
                             aria-valuemin="0" aria-valuemax="100">{`${technologyPercent}%`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

ProgressBar.propTypes = {
    currentMember: PropTypes.object.isRequired,
    technology: PropTypes.object
}

export default ProgressBar;