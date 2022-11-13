import React, {useEffect, useState} from 'react';
import Main from "../Components/Main/Main";
import {IMovie, Movies, IMyListItem} from "../Types";
import {requests} from "../API/requests";
import Row from '../Components/Rows/Row';
import {getPopularFilms} from '../offlineDB/getMovies';
import {doc, onSnapshot, updateDoc, arrayUnion} from "firebase/firestore";
import {db} from '../Firebase/firebase';
import {UserAuth} from "../AuthContext";
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([] as Movies);
    const [myList, setMyList] = useState([] as IMyListItem[]);
    const [movie, setMovie] = useState({} as IMovie);

    const {user} = UserAuth();
    useEffect(() => {
        const fetchData = async() => {
            const response = await axios.get(requests.topAwaitFilms, {
                headers: {
                    'X-API-KEY': 'cfcf0647-b96a-416d-86c8-4b7c94e90b37',
                    'Content-Type': 'application/json',
                }
            });
            setMovies(response.data.films);
        };
        fetchData();
        if (user) {
            onSnapshot(doc(db, 'users', `${user?.email}`), doc => {
                setMyList(doc.data()?.myList);
            })
            setMovies(getPopularFilms() as Movies);

        }
    }, []);

    useEffect(() => {
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }, [movies]);

    const addToMyList = async (id: number, image: string, title: string) => {
        try {
            await updateDoc(doc(db, "users", `${user?.email}`), {
                myList: arrayUnion({
                    id,
                    image,
                    title
                })
            });
            /*setMyList([...myList, {id, image, title}])*/
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    console.log('rerender')

    const removeFromMyList = async (id: number) => {
        try {
            const newFilms = myList.filter(item => item.id !== id);
            const filmsRef = doc(db, "users", `${user?.email}`);
            await updateDoc(filmsRef, {
                myList: newFilms,
            });
            setMyList(newFilms)
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <div>
                {movie !== undefined && <Main movie={movie} myList={myList}
                                              addToMyList={addToMyList}
                                              removeFromMyList={removeFromMyList}
                />}
            </div>
            <div>
                <Row addToMyList={addToMyList}
                     removeFromMyList={removeFromMyList}
                     id={'1'}
                     title={'Popular Films'}
                     url={requests.popularFilms}
                     myList={myList}
                />
                <Row addToMyList={addToMyList}
                     removeFromMyList={removeFromMyList}
                     id={'2'}
                     title={'Top Await Films'}
                     url={requests.topAwaitFilms}
                     myList={myList}
                />
                <Row addToMyList={addToMyList}
                     removeFromMyList={removeFromMyList}
                     id={'3'}
                     title={'Best Films'}
                     url={requests.bestFilms}
                     myList={myList}
                />
            </div>
        </div>
    );
};

export default Home;