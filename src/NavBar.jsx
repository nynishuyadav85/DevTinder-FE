import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4 py-2 border-b border-pink-200">
            <div className="flex-1">
                <a className="text-2xl font-bold text-pink-600 tracking-wider flex items-center gap-2">
                    <span>👨‍💻❤️ DevTinder</span>
                </a>
            </div>

            <div className="flex items-center gap-4">
                <div className="dropdown dropdown-end mx-5">
                    <div tabIndex={0} role="button" className="btn btn-circle avatar border-2 border-pink-400 hover:border-pink-600 transition">
                        <div className="w-10 rounded-full overflow-hidden">
                            <img
                                alt="User Profile"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white text-black rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge badge-error text-white">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;