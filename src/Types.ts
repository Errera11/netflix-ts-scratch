export interface IMovie {
    filmId: number,
    nameRu: string,
    nameEn: string | null,
    year: string,
    filmLength: string,
    countries: any,
    genres: any,
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    ratingChange: any
}

export type Movies = IMovie[];

export interface IMyListItem {
    id: number,
    image: string,
    title: string
}
/*
export interface oldIMovie  {
    id: string,
    ran: string,
    rankUpDown: string,
    title: string,
    fullTitle: string,
    year: string,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string
}

export type oldMovies = oldIMovie[];
*/
