import React from 'react';
import {AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai';
import {IMyListItem} from '../../Types';

interface IProps extends IMyListItem {
    addToMyList: (id: number, image: string, title: string) => void,
    removeFromMyList: (id: number) => void,
    description: string,
    myList: IMyListItem[]
}

const FilmInfo = ({title, description, id, addToMyList, removeFromMyList, myList, image}: IProps) => {

    return (
        <div className='absolute top-[150px] m-10'>
            <div className='w-3/5'>
                <div className='w-full text-6xl text-white text-start'>{title}</div>
                <div className='w-1/2 text-xl text-gray-300 my-5 text-left'>{description}</div>
            </div>
            <div className='flex flex-row'>
                <button className='bg-white rounded text-black m-[5px] px-[25px] py-[7px]'>Play</button>
                {myList?.filter(item => item.id === id).length ?
                    <button onClick={() => removeFromMyList(id)}
                            className='bg-black border-[1px] border-white rounded text-white m-[5px] px-[25px] py-[7px] flex flex-row justify-around'>
                        <AiOutlineCheck size={23} className='font-bold'/>
                        My List
                    </button>
                    :
                    <button onClick={() => addToMyList(id, image, title)}
                            className='bg-gray-500 border-gray-500 border-[1px] rounded text-white m-[5px] px-[25px] py-[7px] flex flex-row justify-around'>
                        <AiOutlinePlus size={23} className='font-bold'/>
                        My List
                    </button>
                }
            </div>
        </div>

    );
};

export default FilmInfo;