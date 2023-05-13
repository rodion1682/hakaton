import React from "react";

const Loading = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;
