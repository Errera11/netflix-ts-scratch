import React from 'react';
import {IMovie, IMyListItem} from '../../Types';
import FilmInfo from './FilmInfo';

interface IProps {
    addToMyList: (id: number, title: string, image: string) => void,
    removeFromMyList: (id: number) => void,
    movie: IMovie,
    myList: IMyListItem[] | []
}

const Main = ({movie, addToMyList, removeFromMyList, myList}: IProps) => {

    return (
        <div className='h-[550px] w-full relative'>
            <div className='h-full w-full'>
                <img alt='loading' className='absolute right-0 w-2/3 h-full object-fill' src={movie.posterUrl}/>
                <div className='bg-gradient-to-r from-black via-black w-2/3 absolute h-full'/>
            </div>
            <FilmInfo title={movie.nameRu} description={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}
                      removeFromMyList={removeFromMyList}
                      addToMyList={addToMyList}
                      id={movie.filmId}
                      image={movie.posterUrl}
                      myList={myList}
            />
        </div>
    );
};

export default Main;