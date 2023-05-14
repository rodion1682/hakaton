const persons = [
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
        role: "info",
        image: "https://avatars.dicebear.com/api/avataaars/" + (Math.random() + 1).toString(36).substring(7) + ".svg",
        about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        favorite: false,
        social: [
            {
                name: "instagram",
                url: "https://www.instagram.com/"
            },
            { name: "telegram", url: "https://t.me/" },
            { name: "twitter", url: "https://twitter.com/" }
        ]
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
        role: "secondary",
        image: "https://avatars.dicebear.com/api/avataaars/" + (Math.random() + 1).toString(36).substring(7) + ".svg",
        about: "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        favorite: false,
        social: [
            {
                name: "instagram",
                url: "https://www.instagram.com/"
            },
            { name: "telegram", url: "https://t.me/" },
            { name: "twitter", url: "https://twitter.com/" }
        ]
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
        role: "secondary",
        image: "https://avatars.dicebear.com/api/avataaars/" + (Math.random() + 1).toString(36).substring(7) + ".svg",
        about: "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        favorite: false,
        social: [
            {
                name: "instagram",
                url: "https://www.instagram.com/"
            },
            { name: "telegram", url: "https://t.me/" },
            { name: "twitter", url: "https://twitter.com/" }
        ]
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
        role: "secondary",
        image: "https://avatars.dicebear.com/api/avataaars/" + (Math.random() + 1).toString(36).substring(7) + ".svg",
        about: "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        favorite: false,
        social: [
            {
                name: "instagram",
                url: "https://www.instagram.com/"
            },
            { name: "telegram", url: "https://t.me/" },
            { name: "twitter", url: "https://twitter.com/" }
        ]
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
        role: "secondary",
        image: "https://avatars.dicebear.com/api/avataaars/" + (Math.random() + 1).toString(36).substring(7) + ".svg",
        about: "4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus magnam beatae, distinctio mollitia cum sunt illum quae neque veritatis voluptatibus officiis dignissimos ipsum nobis ullam natus est ratione exercitationem?",
        favorite: false,
        social: [
            {
                name: "instagram",
                url: "https://www.instagram.com/"
            },
            { name: "telegram", url: "https://t.me/" },
            { name: "twitter", url: "https://twitter.com/" }
        ]
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
    }
];

if (!localStorage.getItem("persons")) {
    localStorage.setItem("persons", JSON.stringify(persons));
}

if (!localStorage.getItem("technologies")) {
    localStorage.setItem("technologies", JSON.stringify(technologies));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("persons")));
        }, 500);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(persons.find((person) => person.id === id));
        }, 500);
    });

const update = (id, data) =>
    new Promise((resolve) => {
        const persons = JSON.parse(localStorage.getItem("persons"));
        const personIndex = persons.findIndex((u) => u.id === id);
        persons[personIndex] = { ...persons[personIndex], ...data };
        localStorage.setItem("persons", JSON.stringify(persons));
        resolve(persons[personIndex]);
    });

export default {
    fetchAll,
    getById,
    update
};
