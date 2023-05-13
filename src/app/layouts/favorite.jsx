import React, { useState } from "react";
import user from "../api/user.api";

const Favorite = () => {
    const firstUserId = 1;

    const [users, setUsers] = useState([]);
    user.getById(firstUserId).then((user) => {
        setUsers(user);
    });
    console.log(users);
    return (
        <div>
            <div className="d-flex align-items-start pb-5">
                <div className="d-flex flex-grow-1 me-5">
                    <div className="me-4">
                        <img
                            className="img-fluid"
                            src={users.image}
                            alt="image"
                        />
                    </div>
                    <div>
                        {users.name} {users.surname}
                    </div>
                </div>
                <button>button delete</button>
            </div>
        </div>
    );
};

export default Favorite;
