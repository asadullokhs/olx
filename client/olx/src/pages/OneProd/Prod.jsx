import React, { useRef, useEffect } from 'react'
import "./Prod.scss";
import { useState } from 'react';
// import { getAll } from '../../api/getRequests';
import { getOneProd, getSimilar } from '../../api/getRequests'
// import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
// import Footer from '../../components/Footer/Footer'
// import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
// import Slider from '../../components/Slider/Slider';
// import  slidesData  from '../../components/Slider/caruselData.json';
// import Corusel from '../../components/carousel/corusel';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';
import { findChat, userChats } from '../../api/chatRequests';
import { addMessage, getMessage } from '../../api/messageRequests'


const Prod = () => {
    const [openChat, setOpenChat] = useState(false)
    const { setCards, cards, chats, exit, setChats, currentUser, currentChat, setCurrentChat, onlineUsers } = useInfoContext()
    const [modal, setModal] = useState(false)
    const [tel, setTel] = useState(false)
    const [send, setSend] = useState(false)
    const toggleChat = () => setOpenChat(!openChat)
    const [similar, setSimilar] = useState([])

    const prodId = useParams().id
    const [prod, setProd] = useState()
    const setCar = new Date(prod?.createdAt);
    const [messages, setMessages] = useState([])
    const today = new Date();
    const fromattedDate = setCar.toLocaleDateString();
    const todayDateString = today.toLocaleDateString();

    const isToday = fromattedDate === todayDateString;

    const scroll = useRef()


    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const userChat = async () => {
            try {
                const res = await userChats()
                setCurrentChat(res.data.chats)
                const useId = res.data.chats.filter(chat => chat.members.find(id => id === prod.user._id))[0]
                if (useId) {
                    const { data } = await getMessage(useId._id)
                    setMessages(data.messages)
                }
            } catch (error) {
            }
        }
        if (openChat) {
            userChat()
        }
    }, [currentUser, openChat])


    const handleSend = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { data } = await findChat(prod?.user?._id, currentUser._id);
        setCurrentChat(data?.chat)

        formData.append('senderId', currentUser._id);
        formData.append('chatId', data.chat._id);
        formData.append('createdAt', new Date().getTime());

        const newMessage = {
            senderId: currentUser?._id,
            chatId: currentChat?._id,
            text: formData.get('text'),
            createdAt: new Date().getTime(),
        }

        setSend(true)
        // setSendMessage({...newMessage, receivedId: userId})

        try {
            const { data } = await addMessage(formData);
            setMessages([...messages, data.messages])
            setSend(false)
            e.target.reset()
        } catch (error) {
            if (error?.response?.data.message === 'jwt exprired') {
                exit()
            }
        }
    }

    useEffect(() => {
        const getOne = async () => {
            let result = null
            try {
                const res = await getOneProd(prodId, 'car')
                result = res.data.getOne[0]
                if (!result) {
                    const res = await getOneProd(prodId, 'fashion')
                    result = res.data.getOne[0]
                }
                if (result) {
                    const resSim = await getSimilar(result.name)
                    setSimilar(resSim.data.similar)
                    setProd(result)
                }
            } catch (error) {
            }
        }
        getOne()
    }, [prodId])


    {/* //////////////////////// return //////////////////////////////////////////*/ }

    return (
        <div className="one-prod">
            <div className='container'>
                <Search />
                
                <div className="info-prod">
                    <div className="side">
                        <div className="left-side">
                            <div className="carousel">
                                <div className="slider-container">
                                    {prod?.photos?.length > 0 &&
                                        <Slider {...settings}>
                                            {prod.photos.map(photo => {
                                                return <div key={photo?.url} className="image">
                                                    <img className='carousel-img' src={photo?.url} alt='photo' />
                                                </div>
                                            })}
                                        </Slider>
                                    }
                                </div>
                            </div>
                            <div className="content-prod">
                                <div className="content-top">
                                    <button>
                                        <i className="fa-regular fa-bookmark"></i>
                                        РЕКЛАМИРОВАТЬ
                                    </button>
                                    <button>
                                        <i className="fa-solid fa-rotate-right"></i>
                                        ПОДНЯТЬ
                                    </button>
                                </div>
                                <h2>ОПИСАНИЕ</h2>
                                <div className="content-body">
                                    {prod?.content}
                                </div>
                                <div className="content-bottom">
                                    <p>ID: {prod?._id}</p>
                                    <p>Просмотров: {prod?.photos?.length}</p>
                                    <p className="help">
                                        <i className="fa-regular fa-font-awesome"></i>
                                        <div>
                                            Пожаловаться
                                            <span></span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact-user">
                                    <h3>СВЯЗАТЬСЯ С ПРОДАВЦОМ</h3>
                                    <div className="user-contact">
                                        <div className="image">
                                            <img src={prod?.user?.profilePicture ? prod?.user?.profilePicture?.url : '/images/default_.jpg'} />
                                        </div>
                                        <div className="user-info">
                                            <b>{prod?.user?.firstname}</b>
                                            <p>{`на OLX в ${new Date(prod?.user?.createdAt).toLocaleDateString()}`}</p>
                                            <p>{`Онлайн ${new Date(prod?.user?.createdAt).toLocaleDateString()}`}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-tel">
                                    <button className='message-btn' onClick={() => setOpenChat(true)}>Сообщения</button>
                                    <div className="tel">
                                        {!tel ? <div className='tel-btn'>
                                            <i className="fa-solid fa-phone"></i>
                                            <p>xxx xxx xxx</p>
                                            <button onClick={() => setTel(true)}>Показать</button>
                                        </div> :
                                            <Link to={`tel:${prod?.phone}`} style={{ textDecoration: 'none' }} className='tel-btn'>
                                                <i className="fa-solid fa-phone"></i>
                                                {prod?.phone}
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="price">
                                <div className="price-top">
                                    <div className='price-content'>
                                        <span>Опубликовано {new Date(prod?.createdAt).toLocaleDateString()}</span>
                                        <p>{prod?.name}</p>
                                        <b>{prod?.price}</b>
                                    </div>
                                    <div className="like-btn">
                                        <div className='like'>
                                            {/* <LikeBtn id={prod?._id} /> */}
                                            <i class="fa-regular fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-bottom">
                                    <button onClick={() => setOpenChat(true)}>Сообщения</button>
                                    <button onClick={() => setTel(true)}>{!tel ? 'Показать телефон' : <Link to={`tel:${prod?.phone}`}><span style={{ color: '#002f34' }}>{prod?.phone}</span></Link>}</button>
                                </div>
                            </div>
                            {/* <div className="image">
                                <img src={prod?.user?.profilePicture ? prod?.user?.profilePicture?.url : '/images/default_.jpg'} alt="profile_picture" />
                            </div> */}
                            <div className="info">
                                <h3>ПОЛЬЗОВАТЕЛЬ</h3>
                                <div className="profile">
                                    <img src={prod?.user?.profilePicture ? prod?.user?.profilePicture?.url : '/images/default_.jpg'} alt="profile" />
                                    <div className="profile-content">
                                        <b>{prod?.user?.firstname}</b>
                                        <p>на OLX с {new Date(prod?.user?.createdAt).toLocaleDateString()}</p>
                                        <p>Онлайн {new Date(prod?.user?.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="commits">
                                    <div className="img">

                                        <div>
                                            <b>Отлечно</b>
                                            <p>[14 оценок]</p>
                                        </div>
                                    </div>
                                    <p>Этот автор получил отличных отзывов</p>
                                    <p className="help">
                                        Что такое рейтинг?
                                        <span></span>
                                    </p>
                                </div>
                                <button>Все объявления автора </button>
                            </div>
                            <div className="map">
                                <h3>МЕСТОПОЛОЖЕНИЕ</h3>
                                <div className="location">
                                    <div>
                                        <i className='fa-solid fa-location-dot'></i>
                                        {prod?.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-prod">
                        <div className="top">
                            <h2>Все объявления автора <Link to='/' className='link-prod'>Смотреть все</Link></h2>
                        </div>
                        <div className="carousel-item">
                            {prod?.userProd?.map(prod => {
                                return <Card key={prod?._id} prod={prod} />
                            })}
                        </div>
                    </div>
                    <div className="carousel-prod">
                        <div className="top">
                            <h2>Похожие объявления</h2>
                        </div>
                        <div className="carousel-item">
                            {prod?.userProd?.map(prod => {
                                return <Card key={prod?._id} prod={prod} />
                            })}
                        </div>
                    </div>
                </div>
            </div>



            <div className="media-info-prod">
                <div className="carousel">
                    <div className="slider-container">
                        {prod?.photos?.length > 0 &&
                            <Slider {...settings}>
                                {prod.photos.map(photo => {
                                    return <div key={photo?.url} className="image">
                                        <img className='carousel-img' src={photo?.url} alt='photo' />
                                    </div>
                                })}
                            </Slider>
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="price">
                        <div className="price-top">
                            <div className='price-content'>
                                <span>Опубликовано {new Date(prod?.createdAt).toLocaleDateString()}</span>
                                <p>{prod?.name}</p>
                                <b>{prod?.price}</b>
                            </div>
                            <div className="like-btn">
                                <div className='like'>
                                    {/* <LikeBtn id={prod?._id} /> */}
                                    <i class="fa-regular fa-heart"></i>
                                </div>
                            </div>
                            <div className="media-like-btn">
                                <Link to='/'><i className='fa-solid fa-arrow-left'></i></Link>
                                <Link to='/'><i className='fa-solid fa-share'></i></Link>
                            </div>
                        </div>
                        <div className="price-bottom">
                            <button onClick={toggleChat}>Сообщения</button>
                            <button><Link style={{ textDecoration: 'none', color: '#002f34' }} to={`tel:${prod?.phone}`}>Позвонить / SMS</Link></button>
                        </div>
                    </div>
                    <div className="content-prod">
                        <h2>ОПИСАНИЕ</h2>
                        <div className="content-body">
                            {prod?.content}
                        </div>
                        <p className="help">
                            <i className="fa-regular fa-font-awesome"></i>
                            <div>
                                Пожаловаться
                                <span></span>
                            </div>
                        </p>
                    </div>
                    <div className="info">
                        <h3>ПОЛЬЗОВАТЕЛЬ</h3>
                        <div className="profile">
                            <img src={prod?.user?.profilePicture ? prod?.user?.profilePicture?.url : '/images/default_.jpg'} alt="profile" />
                            <div className="profile-content">
                                <b>{prod?.user?.firstname}</b>
                                <p>на OLX с {new Date(prod?.user?.createdAt).toLocaleDateString()}</p>
                                <p>Онлайн {new Date(prod?.user?.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <button>Все объявления автора </button>
                    </div>
                    <div className="map">
                        <h3>МЕСТОПОЛОЖЕНИЕ</h3>
                        <div className="location">
                            <div>
                                <i className='fa-solid fa-location-dot'></i>
                                {prod?.location}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-prod">
                        <div className="top">
                            <h2>Все объявления автора <Link to='/' className='link-prod'>Смотреть все</Link></h2>
                        </div>
                        <div className="carousel-item">
                            {prod?.userProd?.map(prod => {
                                return <Card key={prod?._id} prod={prod} />
                            })}
                        </div>
                    </div>
                    {similar?.length > 0 && <div className="carousel-prod">
                        <div className="top">
                            <h2>Похожие объявления</h2>
                        </div>
                        <div className="carousel-item">
                            {similar.map(res => {
                                return <Card key={res?._id} prod={res} />
                            })}
                        </div>
                    </div>}z
                    <div className="content-bottom">
                        <p>ID: {prod?._id}</p>
                        <p>Просмотров: {prod?.photos?.length}</p>
                    </div>
                </div>
            </div>

            {openChat && currentUser?._id !== prod?.user?._id && <div className='small-chat-box'>
                <div className="message-list" key={currentChat?._id}>
                    <div className="profile-box">
                        <div className='profile-content'>
                            <i className='fa-solid fa-chevron-left exit'></i>
                            <img src={prod?.user?.profilePicture?.url ? `${prod?.user?.profilePicture?.url}` : '/images/default_.jpg'} alt="profile_img" className="message-img" />
                            <div className="user-name">
                                <h3>{prod?.user?.author ? prod?.user.author : 'New user'}</h3>
                            </div>
                        </div>
                        <div className="profile-set" onClick={toggleChat}>
                            X
                        </div>
                    </div>
                    <div className="send-message">
                        {currentChat?.createdAt && <b style={{ textAlign: 'center', fontSize: '12px' }}>  Boshlandi  {new Date(currentChat?.createdAt).toLocaleDateString()}</b>}
                        {messages?.length > 0 ? messages.map(chat => {
                            return (<div key={chat?._id} className={chat?.senderId === currentUser?._id ? "messages own" : "messages"}>
                                <div className='span-box'>
                                    <span>
                                        {chat?.file && <img style={{ width: '100%' }} src={`${chat?.file?.url}`} alt='chat_img' />}
                                        {chat?.text} </span>
                                    <strong className='message-time'>{new Date(chat.createdAt).toLocaleTimeString().slice(0, 5)}</strong>
                                </div>
                                <div ref={scroll} />
                            </div>)
                        }) : <h3>No correspondence yet !</h3>}
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
                </div>
            </div>}

        </div >
    )






}

export default Prod