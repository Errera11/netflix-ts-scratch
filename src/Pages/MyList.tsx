import React, {useEffect, useState} from 'react';
import {doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from '../Firebase/firebase';
import {IMyListItem} from '../Types';
import {UserAuth} from "../AuthContext";
import RowScroll from "../UI/RowScrolling/RowScroll";
import MyListMovie from "../Components/MyListMovie";

const MyList = () => {
    const {user} = UserAuth();
    const [myList, setMyList] = useState<IMyListItem[]>([]);
    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMyList(doc.data()?.myList as IMyListItem[]);
        });
    }, [])

    const removeFromMyList = async (id: number) => {
        const newList = myList.filter(item => item.id !== id)
        await updateDoc(doc(db, 'users', `${user?.email}`), {
            myList: newList
        })
    }

    return (
        <div>
            {myList.length ? <RowScroll title={'My List'} id={'myList'}>{myList.map((item, index) =>
                <MyListMovie key={index}
                             img={item.image}
                             title={item.title}
                             movieId={item.id}
                             removeFromMyList={removeFromMyList}
                />)}
            </RowScroll> : <div className='text-white text-center'> Your list is empty </div>}
        </div>
    );
};

export default MyList;