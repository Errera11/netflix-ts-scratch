import React, {useState} from 'react';
import {UserAuth} from "../AuthContext";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const [activeBtn, setActiveBtn] = useState(0);
    const buttons = [{name: 'Home', navigate: '/Home'},
        {name: 'TV Shows', navigate: '',},
        {name: 'Originals', navigate: ''},
        {name: 'Movies', navigate: ''},
        {name: 'My List', navigate: '/MyList'}];

    return (
        <div className='flex justify-between m-5'>
            <h1 className='text-red-600 text-4xl'>NETFLIX</h1>
            {user ?
                <>

                    <div className='text-white py-2 flex justify-between'>
                        {buttons.map((item, index) =>
                            <div className='mr-12 text-center' key={index}>
                                <button onClick={() => {
                                    navigate(item.navigate)
                                    setActiveBtn(index)
                                }}>{item.name}</button>
                                <div className={index === activeBtn ? 'border-b-4 border-red-500 rounded w-full ' : ''}/>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className='bg-white-600 text-white mx-3'>Account</button>
                        <button onClick={async () => await logout()}
                                className='text-black-100 bg-amber-50 px-4 py-2'>Logout
                        </button>
                    </div>
                </>
                :
                <div className=''>
                    <button onClick={() => navigate("/SignIn")}
                            className='bg-white-600 text-white mx-3'>Sign In
                    </button>
                    <button onClick={() => navigate("/SignUp")}
                            className='text-black-100 bg-amber-50 px-4 py-2'>Sign Up
                    </button>
                </div>

            }

        </div>
    );
};

export default Navbar;