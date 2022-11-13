import React, {ReactNode} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const RowScroll = ({children, title, id}: { children: ReactNode, title: string, id: string}) => {


    const slideLeft = () => {
        let slider = document.getElementById(id) as HTMLDivElement;
        slider.scrollLeft -= 300;
    }

    const slideRight = () => {
        let slider = document.getElementById(id) as HTMLDivElement;
        slider.scrollLeft += 300;
    }

    return (
        <div className='items-center h-full
        group relative flex justify-center'>

            <AiOutlineLeft onClick={slideLeft} size={30} className='text-white
            bg-gradient-to-r from-black via-black
            h-full
            cursor-pointer
            left-0 absolute z-10
             opacity-0 hidden group-hover:block cursor-pointer group-hover:opacity-20 fixed'/>

            <div id={id} className='flex relative overflow-scroll scrollbar-hide scroll-smooth'>
                {children}
            </div>

            <AiOutlineRight onClick={slideRight} size={30} className='text-white
            bg-gradient-to-l from-black via-black
            h-full
            cursor-pointer
            right-0 z-10 absolute
             opacity-0 hidden group-hover:block cursor-pointer group-hover:opacity-20 fixed'/>

        </div>
    );
};

export default RowScroll;