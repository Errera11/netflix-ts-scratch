import React, {useState, useEffect} from 'react';
import {IMyListItem, Movies} from "../../Types";
import Movie from './Movie';
import {getPopularFilms} from "../../offlineDB/getMovies";
import RowScroll from "../../UI/RowScrolling/RowScroll";
import axios from 'axios';

const Row = ({addToMyList, removeFromMyList,
                 title, url, id, myList}: {
    addToMyList: (id: number, image: string, title: string) => void,
    removeFromMyList: (id: number) => void,
    title: string,
    url: string,
    id:string,
    myList: IMyListItem[]
}) => {
    const [movies, setMovies] = useState<Movies>([]);
    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-API-KEY': 'cfcf0647-b96a-416d-86c8-4b7c94e90b37',
                'Content-Type': 'application/json'
            }
        }).then(response => setMovies(response.data.films));
        /*setMovies(getPopularFilms());*/
    });

    return (
        <div className='mx-3 scroll-smooth'>
            <h2 className='text-white bold my-3'>{title}</h2>
            <div>
                <RowScroll  title={title} id={id}>
                    {movies.map((movie, index) =>
                        <Movie key={index} myList={myList} addToMyList={addToMyList} removeFromMyList={removeFromMyList}
                            title={movie.nameRu} img={movie.posterUrl} movieId={movie.filmId}/>
                    )}
                </RowScroll>
            </div>
        </div>
    );
};

export default Row;