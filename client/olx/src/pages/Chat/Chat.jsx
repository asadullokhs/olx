import React, { useEffect, useState } from 'react'
import "./Chat.scss";
import Contact from '../../components/Contact/Contact'
import Message from '../../components/Message/Message'
import { io } from 'socket.io-client'
import { useInfoContext } from '../../context/Context'
import { userChats } from '../../api/chatRequests'
import { Link, NavLink } from 'react-router-dom'
const serverURL = process.env.REACT_APP_SERVER_URL
const socket = io(serverURL)

const Chat = () => {
  const { chats, exit, setChats, currentUser, currentChat, setCurrentChat, setOnlineUsers } = useInfoContext()
  const [sendMessage, setSendMessage] = useState(null)
  const [asnwerMessage, setAnswerMessage] = useState(null)
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socketDel, setSocketDel] = useState(false);
  const [chat, setChat] = useState(0);

  useEffect(() => {
    const getchats = async () => {
      try {
        const res = await userChats()
        setChats(res?.data?.chats);
      } catch (error) {
        console.log(error);
        if (error?.response?.data.message === 'jwt expired') {
          exit()
        }
      }
    }
    getchats()
  }, [currentUser._id, loading])

  useEffect(() => {
    socket.emit("new-user-added", currentUser._id);

    socket.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser._id,]);

  useEffect(() => {
    if (sendMessage !== null) {
      socket.emit("send-message", sendMessage);
    }
    socket.on("answer-message", (data) => {
      setAnswerMessage(data);
    });
  }, [sendMessage]);

  useEffect(() => {
    if (deleted && socketDel) {
      setSocketDel(false)
      socket.emit('delete-message')
    }
    socket.on('deleted', () => {
      setDeleted(!deleted)
    })
  }, [deleted]);

  return (
    <div className='chat-box '>
      <div className="top-account">
        <div className="top-btn">
          <h2>Sizning e’lonlaringiz</h2>
          <div className="btn">
            <p>
              Hisobingiz balansi: 0 сум <br />
              Mavjud bonuslar: 0 bonus
            </p>
            <i className="fa-solid fa-circle-info"></i>
            <button className="payBtn">Hisobni to'ldirish</button>
            <button className="buyBtn">To'plam sotib olish </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/announce">E‘lonlar</NavLink>
            </li>
            <li>
              <NavLink to="/chat">Xabarlar</NavLink>
            </li>
            <li>
              <NavLink to="/">To‘lovlar va OLX hisobi</NavLink>
            </li>
            <li>
              <NavLink to="/">Nomzod profili</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Sozlamalar</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className='chat-page'>
          <div style={chat === 0 ? { display: 'block' } : {}} className="contacts">
            <div className="top-contact">
              <div className="buttons">
                <Link to='/'><button className='media-btn'><i className='fa-solid fa-chevron-left'></i></button></Link>
                <div className="di">
                  <button><i className='fa-regular fa-bookmark'></i> Сохраненные</button>
                  <button><i className='fa-solid fa-trash'></i> Корзина</button>
                </div>
              </div>
              <div className="contact-btn">
                <button className='active'>Покупаю</button>
                <button>Продаю</button>
              </div>
            </div>
            <div className="miss-chat">
              <b className='title-mes'>НЕПРОЧИТАННЫЕ</b>
              <h2>🎉 Вы все прочитали!</h2>
            </div>
            <div className="user-mes">
              <b className='title-mes'>ПРОЧИТАННЫЕ</b>
              <div className="profiles">
                {chats?.length > 0 ? chats.map(chat => {
                  return (<div className="chats" onClick={() => { setCurrentChat(chat); setChat(1) }} key={chat._id}>
                    <Contact chat={chat} loading={loading} />
                  </div>
                  )
                }) : <div className='not-acc'>
                  <img src="/images/sms.svg" alt="photo" />
                  <h2>Сообщений пока нет</h2>
                  <p>
                    Отправьте сообщение — и оно появится здесь. <br />
                    <span>Если вы ищете что-нибудь, попробуйте найти это на OLX. Или откройте случайное объявление, если хотите испытать удачу.</span>
                  </p>
                </div>}
              </div>
            </div>
          </div>
          <div className={chat === 1 ? 'message-box' : 'message-box message-none'}>
            <Message asnwerMessage={asnwerMessage} setSendMessage={setSendMessage} sendMessage={sendMessage} setPage={setChat} setSocketDel={setSocketDel} deleted={deleted} setDeleted={setDeleted} loading={loading} setLoading={setLoading} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Chat