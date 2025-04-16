import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [email, setEmail] = useState("test5@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/login`, {
                email,
                password
            }, { withCredentials: true })
            dispatch(addUser(res.data))
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex justify-center mt-20'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email Id</legend>
                            <input type="text" value={email} className="input" placeholder="xyz@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="text" value={password} className="input" placeholder="" onChange={(e) => setPassword(e.target.value)} />
                        </fieldset>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login