import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
    const [email, setEmail] = useState("test5@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            }, { withCredentials: true });
            dispatch(addUser(res.data));
            navigate("/");
        } catch (error) {
            setError(error?.response?.data)
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fdf2f8] via-[#f8e4f4] to-[#ede9fe] animate-backgroundFade">
            <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-3xl p-8 w-96 animate-fadeUp">
                <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6 tracking-wide">
                    💖 DevTinder Login
                </h2>

                <div className="mb-4">
                    <label className="text-sm font-semibold text-gray-700 block mb-1">Email</label>
                    <input
                        type="text"
                        value={email}
                        className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                        placeholder="xyz@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-semibold text-gray-700 block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='text-red-500'>
                    {error}
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleLogin}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out animate-pulse hover:animate-none"
                    >
                        🚀 Login
                    </button>
                </div>
            </div>

            <style>
                {`
                @keyframes fadeUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeUp {
                    animation: fadeUp 0.8s ease-out forwards;
                }

                @keyframes backgroundFade {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .animate-backgroundFade {
                    background-size: 200% 200%;
                    animation: backgroundFade 10s ease infinite;
                }
                `}
            </style>
        </div>
    );
};

export default Login;