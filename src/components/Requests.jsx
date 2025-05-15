import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { recievedRequest } from '../utils/requestSlice'

const Requests = () => {

    const request = useSelector((store) => store.request)
    const dispatch = useDispatch()

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

    console.log(request[0].fromUserId.firstName)
    return (
        <div>
            <h1>Requests</h1>
        </div>
    )
}

export default Requests