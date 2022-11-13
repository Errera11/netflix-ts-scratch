import Home from '../Pages/Home';
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import MyList from "../Pages/MyList";

export const routes = {
    privateRoutes: [{path: "/Home", element: <Home />},
        {path: "/MyList", element: <MyList />},
        {path: "*", element: <Home />}
    ],
    publicRoutes: [{path: "/SignIn", element: <SignIn />},
        {path: "/SignUp", element: <SignUp />},
        {path: "*", element: <SignIn />}]
}

