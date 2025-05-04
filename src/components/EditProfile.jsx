import React, { useState } from 'react'

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName)

    return (
        <div className="mb-4">
            <label className="text-sm font-semibold text-gray-700 block mb-1">First Name</label>
            <input
                type="text"
                value={firstName}
                className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                placeholder="xyz@gmail.com"
                onChange={(e) => setFirstName(e.target.value)}
            />

            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 block mb-1">Last Name</label>
                <input
                    type="text"
                    value={firstName}
                    className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                    placeholder="xyz@gmail.com"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 block mb-1">About</label>
                <input
                    type="text"
                    value={firstName}
                    className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                    placeholder="xyz@gmail.com"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 block mb-1">PhotoUrl</label>
                <input
                    type="text"
                    value={firstName}
                    className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                    placeholder="xyz@gmail.com"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 block mb-1">Skills</label>
                <input
                    type="text"
                    value={firstName}
                    className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                    placeholder="xyz@gmail.com"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="text-sm font-semibold text-gray-700 block mb-1">Age</label>
                <input
                    type="text"
                    value={firstName}
                    className="w-full px-4 py-2 rounded-xl bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
                    placeholder="xyz@gmail.com"
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
        </div>

    )
}

export default EditProfile