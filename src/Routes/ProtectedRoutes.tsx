import React from 'react';
import {UserAuth} from "../AuthContext";
import {Route, Routes} from "react-router-dom";
import {routes} from "./Routes";

export const ProtectedRoutes = () => {
    const {user} = UserAuth();
    if (user) return (
        <Routes>
            {routes.privateRoutes.map(route => <Route key={route.path}  path={route.path} element={route.element} />)}
        </Routes>
    );
    return (
        <Routes>
            {routes.publicRoutes.map(route => <Route key={route.path}  path={route.path} element={route.element} />)}
        </Routes>
    );

};

