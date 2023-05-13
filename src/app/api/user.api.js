const users = [
    {
        id: 0,
        name: "Name",
        surname: "Surname",
        age: 20,
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        role: "Тимлид"
    },
    {
        id: 1,
        name: "Name 1",
        surname: "1 Surname",
        age: 20,
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        role: "Разработчик"
    },
    {
        id: 2,
        name: "Name 2",
        surname: "2 Surname",
        age: 20,
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        role: "Разработчик"
    },
    {
        id: 3,
        name: "Name 3",
        surname: "3 Surname",
        age: 20,
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        role: "Разработчик"
    },
    {
        id: 4,
        name: "Name 4",
        surname: "4 Surname",
        age: 20,
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        role: "Разработчик"
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 1000);
    });

export default {
    fetchAll,
    getById
};
