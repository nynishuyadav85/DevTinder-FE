import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'

const UserCard = ({ user }) => {
    const dispatch = useDispatch()
    const { _id, firstName, lastName, age, photoUrl, about, gender } = user || {}
    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(`${BASE_URL}/request/send/` + status + "/" + userId, {}, { withCredentials: true })
            dispatch(removeUserFromFeed(userId))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div><div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + " " + gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
                    <button className="btn btn-secondary" onClick={() => handleSendRequest("intrested", _id)}>Send Request</button>
                </div>
            </div>
        </div></div>
    )
}

export default UserCard