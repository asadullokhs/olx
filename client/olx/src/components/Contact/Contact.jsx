import React, { useEffect, useState } from 'react'
import './Contact.scss'
import { useInfoContext } from '../../context/Context'
import { getOneProd } from '../../api/getRequests'

const Contact = ({ chat, loading }) => {
    const { exit, currentUser, onlineUsers } = useInfoContext()
    const [user, setUserData] = useState(null);

    const userId = chat?.members.find(id => id !== currentUser._id)

    const online = () => {
        const onlineUser = onlineUsers.find(user => user.userId === userId)
        return onlineUser ? true : false
    }

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await getOneProd(userId, 'user')
                setUserData(res.data.user);
            } catch (error) {
                if (error.response.data.message === 'jwt expired') {
                    exit()
                }
            }
        }
        getUsers()
    }, [userId, loading])


    return (
        <div className='box-profile'>
            <div className="profile-image">
                <img src={user?.profilePicture?.url ? `${user?.profilePicture?.url}` : '/images/default_.jpg'} alt="profile_img" className="profile-img" />
                <div>
                    <h3>{user?.firstname ? user.firstname : 'Новый пользователь'}</h3>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'grey' }}>{user?.location}Тошкент</span>
                    <div style={online() ? { color: 'greenyellow', fontSize: '12px' } : { color: 'gray', fontSize: '12px' }}>{online() ? 'в сети' : 'был(а) недавно'}</div>
                </div>
            </div>
            <div className="description">
                <span>^^</span><br />
                <i className='fa-regular fa-bookmark'></i>
            </div>

        </div>
    )
}

export default Contact