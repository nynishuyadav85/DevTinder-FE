import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const { targetUserId } = useParams()
    const [message, setMessage] = useState([{ text: 'Hello' }])
    console.log(targetUserId)
    return (
        <div className='w-1/2 mx-auto border border-rose-500 m-5 h-[70vh] flex flex-col'>
            <h1 className='p-5 border-b border-gray-600'>Chat</h1>
            <div className='flex-1 overflow-scroll p-5'>
                {message.map((msg, index) => {
                    return (
                        <div key={index} className='chat chat-start'>
                            <div className='chat-header'>
                                Akashay Saini
                                <time className='text-xs opacity-50'>2 Hrs ago</time>
                            </div>
                            <div className='chat-bubble'>Kha ho bhai </div>
                            <div className='chat-footer opacity-50'>Seen</div>
                        </div>
                    )
                })

                }</div>

            <div className='p-5 border-t border-gray-600 flex items-center gap-2'>
                <input className='flex-1 border border-gray-500 text-white rounded p-2' />
                <button className='btn btn-secondary'>Send</button>
            </div>
        </div>
    )
}

export default Chat