import React, { useEffect, useState } from "react";
import userApi from "../api/user.api";
import Loading from "../components/common/loading";
import Footer from "../components/ui/footer";
import UserCard from "../components/ui/userCard";

const Main = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    if (users) {
        return (
            <div className="h-100">
                <div className="mb-2">
                    <h1 className="text-center text-uppercase">
                        Hackathon React Team 3
                    </h1>
                    <div className="container w-75 mt-3">
                        <h6 className="text-center fst-italic">
                            The challenges of modern frontend development become
                            more complex every year, requiring developers to
                            constantly adapt and learn new skills. Our team
                            members have different stories, but we share a
                            common passion for learning. We believe that to be a
                            good developer you need to evolve, so we are
                            constantly looking for ways to become better at what
                            we do.
                        </h6>
                    </div>
                </div>
                {users.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <UserCard
                                name={user.name}
                                surname={user.surname}
                                image={user.image}
                                about={user.about}
                                role={user.role}
                                social={user.social}
                                id={user.id}
                            />
                        </div>
                    </div>
                ))}
                <Footer />
            </div>
        );
    } else {
        return <Loading />;
    }
};

export default Main;
