import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import { Link } from 'react-router-dom'

const Connections = () => {
  const connections = useSelector((store) => store.connections)
  const dispatch = useDispatch()

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/connections`, { withCredentials: true });
      console.log(res.data.data)
      dispatch(addConnections(res.data.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])

  if (!connections) return null

  if (connections.length === 0) {
    return (
      <h1 className="text-center text-xl text-gray-400 mt-10">No connections found</h1>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-950 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-white mb-10 tracking-tight">Your Connections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

          return (
            <div
              key={_id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-white hover:shadow-primary transition duration-300 hover:scale-105"
            >
              <img
                alt={`${firstName}'s profile`}
                src={photoUrl}
                className="w-28 h-28 rounded-full object-cover border-4 border-primary mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold">{firstName} {lastName}</h2>
              <p className="text-sm text-gray-400 italic mb-2 capitalize">{gender}</p>
              <p className="text-center text-gray-300">{about || "No bio provided."}</p>
              <Link to={"/chat/" + _id}>   <button className='border-2 cursor-pointer bg-purple-600 mt-4'>Chat</button> </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Connections