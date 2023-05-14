import React from "react";

const Loading = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
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
