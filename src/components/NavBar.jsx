import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
    const user = useSelector((store) => store.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true })
        dispatch(removeUser())
        navigate("/login")
    }

    return (
        <div className="navbar bg-base-100 shadow-md px-4 py-2 border-b border-pink-200">
            <div className="flex-1">
                <Link to='/' className="text-2xl font-bold text-pink-600 tracking-wider flex items-center gap-2">
                    <span>👨‍💻❤️ DevTinder</span>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                {user && (
                    <>
                        <span className="text-base font-semibold text-gray-800 bg-pink-100 px-3 py-1 rounded-full shadow-sm">
                            Welcome, <span className="text-pink-600">{user?.firstName || "Developer"}</span>
                        </span>

                        <div className="dropdown dropdown-end mx-2">
                            <div tabIndex={0} role="button" className="btn btn-circle avatar border-2 border-pink-400 hover:border-pink-600 transition">
                                <div className="w-10 rounded-full overflow-hidden">
                                    <img
                                        alt="User Profile"
                                        src={user?.photoUrl}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white text-black rounded-box w-52">
                                <li>
                                    <Link to='/profile' className="justify-between">
                                        Profile
                                        <span className="badge badge-error text-white">New</span>
                                    </Link>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default NavBar;