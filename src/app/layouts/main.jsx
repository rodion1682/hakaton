import React, { useEffect, useState } from "react";

import userApi from "../api/user.api";

import UserAvatar from "../components/ui/userAvatar";
import UserCardInfo from "../components/ui/userCardInfo";
import SocialFooter from "../components/ui/socialFooter";
import Footer from "../components/ui/footer";
import Loading from "../components/common/loading";
import { Link } from "react-router-dom";

const Main = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    if (users) {
        return (
            <div className="h-100 gradient-custom-2">
                <div className="mb-2">
                    <h1 className="text-center text-uppercase">
                        Hacaton React Team 3
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
                        <div
                            className="container w-75 mt-3 shadow-lg p-3 mb-5 rounded position-relative"
                            style={{
                                backgroundColor: "#21252930"
                            }}
                        >
                            <Link
                                className="bi bi-info-square position-absolute top-0 end-0 btn"
                                to={`/memberPage/${user.id}`}
                            ></Link>
                            <div className="row gutters-sm">
                                <div className="col-md-4 mb-3">
                                    <UserAvatar user={user} />
                                </div>
                                <div className="col-md-8">
                                    <UserCardInfo user={user} />
                                </div>
                            </div>
                            <SocialFooter social={user.social} />
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
