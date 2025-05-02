/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'

const Feed = () => {
    const feed = useSelector((store) => store.feed)
    const dispatch = useDispatch()

    const getFeed = async () => {
        if (feed) return;
        try {
            const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true })
            dispatch(addFeed(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFeed();
    }, [])
    return (
        <div>Feed</div>
    )
}

export default Feed