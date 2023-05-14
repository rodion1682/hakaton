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
                            Задачи современной фронтенд-разработки усложняются с
                            каждым годом, что требует от разработчиков
                            постоянной адаптации и освоения новых навыков. У
                            членов нашей команды разные истории, но мы разделяем
                            общую страсть к учению. Мы верим, что, чтобы стать
                            хорошим разработчиком, нужно развиваться, поэтому мы
                            постоянно ищем способы, как стать лучше в том, что
                            мы делаем.
                        </h6>
                    </div>
                </div>
                {users.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <UserCard name={user.name}
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
