import axios from 'axios';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("Test@123");
    const [error, setError] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [isLoginForm, setIsLoginForm] = useState(true)
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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#fdf2f8] via-[#f8e4f4] to-[#ede9fe] animate-backgroundFade px-4">
            <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 w-full max-w-md animate-fadeUp">
                <h2 className="text-center text-4xl font-bold text-gray-800 mb-8 tracking-tight">
                    {isLoginForm ? "💖 DevTinder Login" : "💖 DevTinder SignUp"}
                </h2>

                {!isLoginForm && (
                    <>
                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700 block mb-1">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                                placeholder="John"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-medium text-gray-700 block mb-1">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                                placeholder="Wick"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </>
                )}

                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
                    <input
                        type="text"
                        value={email}
                        className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                        placeholder="xyz@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200"
                        placeholder="********"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <div className="text-sm text-red-600 mb-4 text-center">{error}</div>}

                <div className="flex justify-center mb-4">
                    <button
                        onClick={handleLogin}
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-xl shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out"
                    >
                        {isLoginForm ? "🚀 Login" : "🚀 SignUp"}
                    </button>
                </div>

                <div className="text-center">
                    <p
                        onClick={() => setIsLoginForm((value) => !value)}
                        className="text-sm font-medium text-pink-600 hover:underline cursor-pointer transition"
                    >
                        {isLoginForm ? "New User? Sign up here." : "Existing User? Login here."}
                    </p>
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