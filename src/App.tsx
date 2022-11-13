import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./AuthContext";
import {ProtectedRoutes} from "./Routes/ProtectedRoutes";

const App = () => {

    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navbar/>
                <ProtectedRoutes/>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default App;