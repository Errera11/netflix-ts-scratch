import React, {useState} from 'react';
import {db} from '../Firebase/firebase';
import {doc, onSnapshot} from "firebase/firestore";
import {UserAuth} from "../AuthContext";
import {IMyListItem} from '../Types';
import {AiOutlineClose} from 'react-icons/ai';
const Movie = ({img, title, movieId, removeFromMyList}:
                   {img: string, title: string, movieId: number,
                   removeFromMyList: (id: number) => void
                   }) => {

    return (
        <div className='mr-3 relative flex'>
            <div
                className='transition duration-235 ease-out hover:ease-in text-white h-full absolute flex justify-center items-center text-center w-full bg-black/80 opacity-0 hover:opacity-100 cursor-pointer'>
                <h2 className=''>{title}</h2>
            </div>
            <div className='h-full w-[200px]'>
                <img className='' src={img}/>
            </div>
            <AiOutlineClose onClick={() => removeFromMyList(movieId)}
                            size={25} className='absolute right=1 top=1'/>
        </div>
    );
};

export default Movie;