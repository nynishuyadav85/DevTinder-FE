import React from 'react'

const UserCard = ({ user }) => {
    const { firstName, lastName, age, photoUrl, about, gender } = user || {}
    console.log(user)
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
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Send Request</button>
                </div>
            </div>
        </div></div>
    )
}

export default UserCard