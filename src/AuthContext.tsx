import React, {ReactNode, createContext, useContext, useState, useEffect} from 'react';
import { auth } from './Firebase/firebase';
import {setDoc, doc, arrayUnion} from "firebase/firestore";
import { db } from './Firebase/firebase';
import {
    Auth,
    UserCredential,
    User,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

export interface AuthContextModel {
    auth: Auth
    user: User | null
    create: (email: string, password: string) => Promise<UserCredential>
    login: (email: string, password: string) => Promise<UserCredential>
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextModel>(
    {} as AuthContextModel
)

export const AuthContextProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        //function that firebase notifies you if a user is set
        const unsubsrcibe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return unsubsrcibe
    }, [])

    function create(email: string, password: string) {
        setDoc(doc(db, 'users', email), {
            myList: []
        });
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logout() {
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{user, auth, login, logout, create}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => useContext(AuthContext);
