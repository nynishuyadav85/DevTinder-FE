/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setlastName] = useState(user.lastName)
    const [about, setAbout] = useState(user.about)
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl)
    const [gender, setGender] = useState(user.gender)
    const [age, setAge] = useState(user?.age)
    const [error, setError] = useState("")
    const [showToast, setShowToast] = useState(false)

    const dispatch = useDispatch()

    const saveProfile = async () => {
        try {
            const res = await axios.patch(`${BASE_URL}/profile/edit`, { firstName, lastName, about, photoUrl, gender, age }, { withCredentials: true })
            dispatch(addUser(res.data.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000);

        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-pink-50 p-6 md:p-10">
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-10">
                {/* Form Section */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
                            />
                        </div>
                        <div className='md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700 mb-1 block'>About</label>
                            <textarea className="textarea" placeholder="Bio" value={about} onChange={(e) => setAbout(e.target.value)} ></textarea>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Photo URL</label>
                            <input
                                type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Gender</label>
                            <input
                                type="text"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-1 block">Age</label>
                            <input
                                type="text"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 transition shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="mt-8">
                        <button
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold rounded-2xl shadow-md hover:from-pink-600 hover:to-pink-700 hover:shadow-lg transition-all duration-300" onClick={saveProfile}
                        >
                            Save Profile
                        </button>
                    </div>
                </div>

                {/* Preview Section */}
                <div className="w-full lg:w-1/3 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                        <UserCard user={{ firstName, lastName, photoUrl, about, age, gender }} />
                    </div>
                </div>
            </div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-info">
                    <span>Profile Saved</span>
                </div>
            </div>}
        </div>

    )
}

export default EditProfile