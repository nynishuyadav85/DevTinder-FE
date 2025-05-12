import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'

const Connections = () => {

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users/connections`, { withCredentials: true });
      console.log(res.data.data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchConnections()
  }, [])


  return (
    <div>Connections</div>
  )
}

export default Connections