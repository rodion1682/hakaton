const members = [
    {
        id: 0,
        name: "Name",
        surname: "Surname",
        age: 20,
        technologies: {
            "9D7F1B4E2C": "90",
            "A3C5E2B8F1": "90",
            "5G8H9J2K4L": "80",
            "M1N8B7V2C5": "70",
            "P9O6I4U3Y2": "10",
            "7T6R5E4W3Q": "20"
        },
        role: "danger",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?"
    },
    {
        id: 1,
        name: "Name 1",
        surname: "1 Surname",
        age: 20,
        technologies: {
            "9D7F1B4E2C": "90",
            "A3C5E2B8F1": "90",
            "5G8H9J2K4L": "80",
            "M1N8B7V2C5": "70",
            "P9O6I4U3Y2": "10",
            "7T6R5E4W3Q": "20"
        },
        role: "primary",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?"
    },
    {
        id: 2,
        name: "Name 2",
        surname: "2 Surname",
        age: 20,
        technologies: {
            "9D7F1B4E2C": "90",
            "A3C5E2B8F1": "90",
            "5G8H9J2K4L": "80",
            "M1N8B7V2C5": "70",
            "P9O6I4U3Y2": "10",
            "7T6R5E4W3Q": "20"
        },
        role: "primary",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?"
    },
    {
        id: 3,
        name: "Name 3",
        surname: "3 Surname",
        age: 20,
        technologies: {
            "9D7F1B4E2C": "90",
            "A3C5E2B8F1": "90",
            "5G8H9J2K4L": "80",
            "M1N8B7V2C5": "70",
            "P9O6I4U3Y2": "10",
            "7T6R5E4W3Q": "20"
        },
        role: "primary",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?"
    },
    {
        id: 4,
        name: "Name 4",
        surname: "4 Surname",
        age: 20,
        technologies: {
            "9D7F1B4E2C": "90",
            "A3C5E2B8F1": "90",
            "5G8H9J2K4L": "80",
            "M1N8B7V2C5": "70",
            "P9O6I4U3Y2": "10",
            "7T6R5E4W3Q": "20"
        },
        role: "primary",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        about: "4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?"
    }
];

const technologies = [
    {
        id: "9D7F1B4E2C",
        title: "HTML",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
        id: "A3C5E2B8F1",
        title: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
    },
    {
        id: "5G8H9J2K4L",
        title: "JavaScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
    },
    {
        id: "M1N8B7V2C5",
        title: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
    {
        id: "P9O6I4U3Y2",
        title: "NodeJS",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        id: "7T6R5E4W3Q",
        title: "Redux",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Cib-redux_%28CoreUI_Icons_v1.0.0%29.svg"
    },
];

if (!localStorage.getItem("members")) {
    localStorage.setItem("members", JSON.stringify(members));
}

if (!localStorage.getItem("technologies")) {
    localStorage.setItem("technologies", JSON.stringify(technologies));
}

export default {
    members,
    technologies
};
