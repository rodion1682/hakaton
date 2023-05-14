import React, { useEffect, useState } from "react";
import userApi from "../api/user.api";
import Footer from "../components/ui/footer";
import Loading from "../components/common/loading";
import UserCard from "../components/ui/userCard";
import SocialFooter from "../components/ui/socialFooter";
import { Link } from "react-router-dom";

const Main = () => {
    // const history = useHistory();
    const [users, setUsers] = useState();

    useEffect(() => {
        userApi.fetchAll().then((data) => setUsers(data));
    }, []);

    // const handleClick = (userId) => () => {
    //     console.log("Работает!");
    //     history.push(`/memberPage/${userId}`);
    // };

    return (
        <>
            <div className="h-100 gradient-custom-2 mt-2">
                <div className="mb-2">
                    <h1 className="text-center text-uppercase">
                        Hacaton React Team 3
                    </h1>
                    <div className="container w-75 mt-3">
                        <h6 className="text-center fst-italic">
                            Наша команда - это наша самая большая ценность. У
                            членов нашей команды разные истории, но мы разделяем
                            общую страсть к учению. Мы верим, что, чтобы
                            оставаться хорошим разработчиком, нужно развиваться,
                            поэтому мы постоянно ищем способы, как стать лучше в
                            том, что мы делаем.
                        </h6>
                    </div>
                </div>
            </div>
            {users ? (
                users.map((user) => (
                    <div key={user.id}>
                        <div className="container w-75 mt-3 shadow-sm p-3 mb-5 bg-light rounded position-relative">
                            <UserCard user={user} />
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
