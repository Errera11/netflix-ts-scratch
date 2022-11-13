import React, {useState} from 'react';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {IMyListItem, Movies} from '../../Types';

const Movie = ({ myList, addToMyList, removeFromMyList,
                   img, title, movieId}: {
    addToMyList: (id: number, image: string, title: string) => void,
    removeFromMyList: (id: number) => void,
    img: string, title: string, movieId: number,
    myList: IMyListItem[]
}) => {
    const [like, setLike] = useState(false);

    return (
        <div className='mr-3 relative flex'>

            <div
                className='transition duration-235 ease-out hover:ease-in text-white h-full absolute flex justify-center items-center text-center w-full bg-black/80 opacity-0 hover:opacity-100 cursor-pointer'>
                <h2 className=''>{title}</h2>
            </div>
            <div className='h-full w-[200px]'>
                <img className='' src={img}/>
            </div>
            <div>
                { myList?.filter(item => item.id === movieId).length   ?
                        <AiFillHeart onClick={() => {
                            setLike(!like)
                            removeFromMyList(movieId)
                        }}
                                     size={25} className={'text-red-600 absolute right-0 top-0 z-100'}/>

                    :

                        <AiOutlineHeart onClick={() => {
                            setLike(!like)
                            addToMyList(movieId, img, title)
                        }}
                                        size={25} className={' absolute right-0 top-0 z-100'}/>

                }
            </div>

        </div>
    );
};

export default Movie;