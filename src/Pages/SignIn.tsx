import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserAuth} from "../AuthContext";

const SignIn = () => {
    const navigate = useNavigate();
    const {login, user} = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(email, password);
            if(user) navigate("/");
        } catch (e) {
            setError((e as Error).message);
        }
    }

    return (
        <div className='w-full h-screen'>
            <img className='h-full w-full object-cover absolute' src={'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png'}/>
            <div className='bg-black/60 w-full h-screen absolute'/>
            <div className='fixed w-full my-[30px]'>
                <div className='h-[600px] w-[450px] bg-black/80 py-[50px] m-auto'>
                    <div className=''>
                        <div className='w-[320px] m-auto'>
                            <h1 className='bold text-4xl text-white'>Sign In</h1>
                            <form onSubmit={handleSubmit}
                                  className='flex flex-col'>
                                <input value={email} onChange={(e) => setEmail(e.target.value)}
                                       className='bg-gray-600 rounded text-white my-[10px] p-[10px]'placeholder='Email or phone number'/>
                                <input value={password} onChange={(e) => setPassword(e.target.value)}
                                       className='bg-gray-600 rounded text-white my-[10px] p-[10px]'placeholder='Password' type={'password'}/>
                                {error && <div className='bg-red-500 text-white p-2 rounded text-center'>{error}</div>}
                                <button
                                    className='bg-red-500 rounded p-[8px] my-[10px] bold text-white'>
                                    Sign In
                                </button>
                                <div className='flex justify-between text-gray-500 my-[10px]'>
                                    <div>
                                        <input type={'checkbox'}/> Remember me
                                    </div>
                                    <div className='cursor-pointer'>
                                        Need help?
                                    </div>
                                </div>
                                <div onClick={() => navigate('/SignUp')} className='mb-auto text-gray-500 cursor-pointer'>
                                    New to Netflix?
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SignIn;