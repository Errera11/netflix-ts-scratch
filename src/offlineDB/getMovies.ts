import {Movies} from "../Types";

const bestFilms = {}

export const getBestFilms = () => {
    return bestFilms;
}

const popularFilms: Movies = [
    {
        filmId: 435,
        nameRu: "Зеленая миля",
        nameEn: "The Green Mile",
        year: "1999",
        filmLength: "03:09",
        countries: [
            {
                country: "США"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "криминал"
            }
        ],
        rating: "9.1",
        ratingVoteCount: 813305,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg",
        ratingChange: null
    },
    {
        filmId: 329,
        nameRu: "Список Шиндлера",
        nameEn: "Schindler's List",
        year: "1993",
        filmLength: "03:15",
        countries: [
            {
                country: "США"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "биография"
            },
            {
                genre: "военный"
            },
            {
                genre: "история"
            }
        ],
        rating: "8.8",
        ratingVoteCount: 445474,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/329.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/329.jpg",
        ratingChange: null
    },
    {
        filmId: 326,
        nameRu: "Побег из Шоушенка",
        nameEn: "The Shawshank Redemption",
        year: "1994",
        filmLength: "02:22",
        countries: [
            {
                country: "США"
            }
        ],
        genres: [
            {
                genre: "драма"
            }
        ],
        rating: "9.1",
        ratingVoteCount: 861320,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/326.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/326.jpg",
        ratingChange: null
    },
    {
        filmId: 3498,
        nameRu: "Властелин колец: Возвращение короля",
        nameEn: "The Lord of the Rings: The Return of the King",
        year: "2003",
        filmLength: "03:21",
        countries: [
            {
                country: "США"
            },
            {
                country: "Новая Зеландия"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "приключения"
            },
            {
                genre: "фэнтези"
            }
        ],
        rating: "8.7",
        ratingVoteCount: 530415,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/3498.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/3498.jpg",
        ratingChange: null
    },
    {
        filmId: 448,
        nameRu: "Форрест Гамп",
        nameEn: "Forrest Gump",
        year: "1994",
        filmLength: "02:22",
        countries: [
            {
                country: 'США'
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "мелодрама"
            },
            {
                genre: "комедия"
            },
            {
                genre: "военный"
            },
            {
                genre: "история"
            }
        ],
        rating: "8.9",
        ratingVoteCount: 739808,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/448.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/448.jpg",
        ratingChange: null
    },
    {
        filmId: 312,
        nameRu: "Властелин колец: Две крепости",
        nameEn: "The Lord of the Rings: The Two Towers",
        year: "2002",
        filmLength: "02:59",
        countries: [
            {
                country: "США"
            },
            {
                country: "Новая Зеландия"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "приключения"
            },
            {
                genre: "фэнтези"
            }
        ],
        rating: "8.6",
        ratingVoteCount: 522080,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/312.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/312.jpg",
        ratingChange: null
    },
    {
        filmId: 328,
        nameRu: "Властелин колец: Братство Кольца",
        nameEn: "The Lord of the Rings: The Fellowship of the Ring",
        year: "2001",
        filmLength: "02:58",
        countries: [
            {
                country: "США"
            },
            {
                country: "Новая Зеландия"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "приключения"
            },
            {
                genre: "фэнтези"
            }
        ],
        rating: "8.6",
        ratingVoteCount: 584439,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/328.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/328.jpg",
        ratingChange: null
    },
    {
        filmId: 535341,
        nameRu: "1+1",
        nameEn: "Intouchables",
        year:"2011",
        filmLength: "01:52",
        countries: [
            {
                country: "Франция"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "биография"
            },
            {
                genre: "комедия"
            }
        ],
        rating: "8.8",
        ratingVoteCount: 1472362,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/535341.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/535341.jpg",
        ratingChange: null
    },
    {
        filmId: 342,
        nameRu: "Криминальное чтиво",
        nameEn: "Pulp Fiction",
        year: "1994",
        filmLength: "02:34",
        countries: [
            {
                country: "США"
            }
        ],
        genres: [
            {
                genre: "драма"
            },
            {
                genre: "криминал"
            }
        ],
        rating: "8.6",
        ratingVoteCount: 632583,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/342.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/342.jpg",
        ratingChange: null
    },
    {
        filmId: 42664,
        nameRu: "Иван Васильевич меняет профессию",
        nameEn: null,
        year: "1973",
        filmLength: "01:28",
        countries: [
            {
                "country": "СССР"
            }
        ],
        genres: [
            {
                genre: "фантастика"
            },
            {
                genre: "приключения"
            },
            {
                genre: "комедия"
            }
        ],
        rating: "8.8",
        ratingVoteCount: 787320,
        posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/42664.jpg",
        posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/42664.jpg",
        ratingChange: null
    }

]

export const getPopularFilms = (): Movies => {
    return popularFilms;
}

const topAwaitFilms = {}

export const getTopAwaitFilms = () => {
    return topAwaitFilms;
}
