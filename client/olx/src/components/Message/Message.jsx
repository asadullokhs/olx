import React, { useEffect, useRef, useState } from 'react'
import './Message.scss'
import { useInfoContext } from '../../context/Context'
import { addMessage, deleteMessage, getMessage, updateMessage } from '../../api/messageRequests'
import { toast } from 'react-toastify'
import { deleteChat } from '../../api/chatRequests'
import { getOneProd } from '../../api/getRequests'


const Message = ({ asnwerMessage, setSendMessage, setPage, setSocketDel, deleted, loading, setLoading }) => {
    const { onlineUsers, currentChat, setCurrentChat, currentUser, exit } = useInfoContext()
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [delChat, setDelChat] = useState(false)
    const [send, setSend] = useState(false)


    const [textMessage, setTextMessage] = useState('')


    const imgRef = useRef()
    const scroll = useRef()


    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const userId = currentChat?.members?.find(id => id !== currentUser._id)


    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await getOneProd(userId, 'user')
                setUserData(res.data.user);
            } catch (error) {
                if (error.response.data.message === 'jwt exprired') {
                    exit()
                }
            }
        }
        if (currentChat) {
            getUsers()
        }
    }, [userId])

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const { data } = await getMessage(currentChat._id)
                setMessages(data.messages)
            } catch (error) {
                if (error.response.data.message === 'jwt exprired') {
                    exit()
                }
            }
        }
        if (currentChat) {
            fetchMessage()
        }
    }, [currentChat, loading, asnwerMessage, deleted])

    useEffect(() => {
        if (currentChat && asnwerMessage !== null && asnwerMessage.chatId === currentChat._id) {
            setMessages([...messages, asnwerMessage])
        }
    }, [asnwerMessage])


    const online = () => {
        const onlineUser = onlineUsers.find(user => user.userId === userId)
        return onlineUser ? true : false
    }

    const deleteUserChat = async () => {
        const confirmPass = window.confirm('Подвердите удалить...')
        if (confirmPass) {
            setSocketDel(true)
            try {
                const res = await deleteChat(currentChat._id);
                setLoading(!loading)
                setDelChat(false)
                setCurrentChat(null)
                setPage(0)
            } catch (err) {
                toast.dismiss()
                toast.error(err.response.data.message)
                if (err.response.data.message === 'jwt exprired') {
                    exit()
                }
            }
        }
    }


    const handleSend = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        formData.append('senderId', currentUser._id);
        formData.append('chatId', currentChat._id);
        formData.append('createdAt', new Date().getTime());

        const newMessage = {
            senderId: currentUser._id,
            chatId: currentChat._id,
            text: textMessage,
            createdAt: new Date().getTime(),
        }

        setSend(true)
        setSendMessage({ ...newMessage, receivedId: userId })

        try {
            const { data } = await addMessage(formData);
            setMessages([...messages, data.messages])
            setSend(false)
            e.target.reset()
        } catch (error) {
            toast.dismiss()
            toast.error(error?.response?.data.message)
            if (error?.response?.data.message === 'jwt exprired') {
                exit()
            }
        }
    }

    const [previewImage, setPreviewImage] = useState('');

    const handleImg = (e) => {
        const image = e.target.files[0];
        setPreviewImage(URL.createObjectURL(image));
    }
    return (
        <div className="message-box">
            {currentChat ? <div className="message-list" key={currentChat._id}>
                <div className="profile-box">
                    <div className='profile-content'>
                        <i className='fa-solid fa-chevron-left exit' onClick={() => setPage(0)}></i>
                        <img src={userData?.profilePicture?.url ? `${userData?.profilePicture?.url}` : '/images/default_.jpg'} alt="profile_img" className="message-img" />
                        <div className="user-name">
                            <h3>{userData?.firstname ? userData.firstname : 'Новый пользователь'}</h3>
                            <div style={online() ? { color: 'greenyellow' } : { color: 'gray' }}>{online() ? 'в сети' : 'был(а) недавно'}</div>
                        </div>
                    </div>
                    <div className="profile-set">
                        <i className='fa-regular fa-bookmark'></i>
                        <i className="fa-solid fa-circle-minus"></i>
                        <i className='fa-regular fa-font-awesome'></i>
                        <i onClick={() => { setDelChat(true); deleteUserChat() }} className="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                <div className="send-message">
                    <b style={{ textAlign: 'center', fontSize: '12px' }}>начилос в {new Date(currentChat.createdAt).toLocaleDateString()}</b>
                    {messages?.length > 0 ? messages.map(chat => {
                        return (<div key={chat._id} className={chat.senderId === currentUser._id ? "messages own" : "messages"}>
                            <div className='span-box'>
                                <span>
                                    {chat.file && <img style={{ width: '100%' }} src={`${chat?.file?.url}`} alt='chat_img' />}
                                    {chat.text} </span>
                                <strong className='message-time'>{new Date(chat.createdAt).toLocaleTimeString().slice(0, 5)}</strong>
                            </div>
                        </div>)
                    }) : <h3>No correspondence yet !</h3>}
                    <div ref={scroll} />
                </div>
                <div className="send-input-box">
                    <form onSubmit={handleSend} className="input-form">
                        <label htmlFor="send-file">
                            <i className="fa-solid fa-paperclip"></i>
                            <input hidden id='send-file' type="file" name="image" />
                        </label>
                        <input type="text" name='text' placeholder='Напишите сообщение...' />
                        <button disabled={send} className='message-btn'><i className="fa-solid fa-square-caret-right"></i></button>
                    </form>
                </div>
            </div> : <div className='not-acc'>
                <img src="/images/sms.svg" alt="photo" />
                <h4>Выберите сообщение, чтобы прочитать его</h4>
            </div>}
        </div>
    )
}

export default Message