const initialState = {
    movies: [
        {
            id: 1,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        },
        {
            id: 2,
            image: require("../../assets/images/dragonball.jpg"),
            title: "dragonball the-movie",
            description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things become even more complicated when the boy and girl decide to meet in person"
        },
        {
            id: 3,
            image: require("../../assets/images/saitama.jpg"),
            title: "saitama the-movie",
            description: "When a lonely teenager skips his morning lessons to sit in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation"
        },
        {
            id: 4,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        },
        {
            id: 5,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        },
        {
            id: 6,
            image: require("../../assets/images/dragonball.jpg"),
            title: "dragonball the-movie",
            description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things become even more complicated when the boy and girl decide to meet in person"
        },
        {
            id: 7,
            image: require("../../assets/images/saitama.jpg"),
            title: "saitama the-movie",
            description: "When a lonely teenager skips his morning lessons to sit in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation"
        },
        {
            id: 8,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        }
    ],
    movies_action: [
        {
            id: 1,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        },
        {
            id: 2,
            image: require("../../assets/images/dragonball.jpg"),
            title: "dragonball the-movie",
            description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. But things become even more complicated when the boy and girl decide to meet in person"
        },
        {
            id: 3,
            image: require("../../assets/images/saitama.jpg"),
            title: "saitama the-movie",
            description: "When a lonely teenager skips his morning lessons to sit in a lovely garden, he meets a mysterious older woman who shares his feelings of alienation"
        },
        {
            id: 4,
            image: require("../../assets/images/boruto.jpg"),
            title: "boruto the-last-movie",
            description: "Naruto sets out to help Hinata find her sister, who has been kidnapped by Toneri. However, he must complete the task without using his most powerful form: the Sage of Six Paths cloak"
        }
    ]
}

export const movies = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}
export const movies_action = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                ...state
            }
    }
}
