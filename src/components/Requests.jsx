import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { recievedRequest } from '../utils/requestSlice'

const Requests = () => {

    const request = useSelector((store) => store.request)
    const dispatch = useDispatch()

    const reviewRequest = async (status, _id) => {
        try {
            const res = await axios.post(`${BASE_URL}/request/review/` + status + '/' + _id, {}, { withCredentials: true })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRequests = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/users/requests/received`, { withCredentials: true })
            dispatch(recievedRequest(res.data.data))
            console.log(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRequests()
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-950 min-h-screen">
            <h1 className="text-center text-4xl font-bold text-white mb-10 tracking-tight">Your Requests</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {request.map((request, index) => {
                    const { firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;

                    return (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-white hover:shadow-primary transition duration-300 hover:scale-105"
                        >
                            <img
                                alt={`${firstName}'s profile`}
                                src={photoUrl}
                                className="w-28 h-28 rounded-full object-cover border-4 border-primary mb-4 shadow-md"
                            />
                            <h2 className="text-xl font-semibold text-center">{firstName} {lastName}, {age}</h2>
                            <p className="text-sm text-gray-400 italic mb-2 capitalize">{gender}</p>
                            <p className="text-center text-gray-300 mb-4">{about || "No bio provided."}</p>

                            <div className="flex gap-4 mt-auto">
                                <button className="btn btn-error px-5 rounded-full shadow-md transition hover:brightness-110" onClick={() => reviewRequest("rejected", request._id)}>
                                    Reject
                                </button>
                                <button className="btn btn-success px-5 rounded-full shadow-md transition hover:brightness-110" onClick={() => reviewRequest("accepted", request._id)}>
                                    Accept
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Requests