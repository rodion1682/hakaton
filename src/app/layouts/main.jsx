import React, { useEffect, useState } from "react";

import userApi from "../api/user.api";

import UserAvatar from "../components/ui/userAvatar";
import UserCardInfo from "../components/ui/userCardInfo";
import SocialFooter from "../components/ui/socialFooter";
import Footer from "../components/ui/footer";
import Loading from "../components/common/loading";

const Main = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleClick = () => {
        console.log("Работает!");
    };

    return (
        <>
            <div className="mb-2">
                <h1 className="text-center text-uppercase">
                    Hacaton React Team 3
                </h1>
                <div className="container w-75 mt-3">
                    <h6 className="text-center fst-italic">
                        Наша команда - это наша самая большая ценность. Мы
                        трудились, чтобы собрать группу местных экспертов, чьи
                        навыки дополняют друг друга. У членов нашей команды
                        разные истории, но мы разделяем общую страсть к учению.
                        Мы верим, что, чтобы оставаться хорошим экскурсоводом
                        ;-D, нужно развиваться, поэтому мы постоянно ищем
                        способы, как стать лучше в том, что мы делаем.
                    </h6>
                </div>
            </div>
            {users ? (
                users.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <button
                                className="position-absolute top-0 end-0 btn"
                                onClick={handleClick}
                            >
                                <i className="bi bi-info-square"></i>
                            </button>
                            <div className="row gutters-sm">
                                <div className="col-md-4 mb-3">
                                    <UserAvatar user={user} />
                                </div>
                                <div className="col-md-8">
                                    <UserCardInfo user={user} />
                                </div>
                            </div>
                            <SocialFooter />
                        </div>
                    </div>
                ))
            ) : (
                <Loading />
            )}
            <Footer />
        </>
    );
};

export default Main;
