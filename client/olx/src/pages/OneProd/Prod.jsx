import React from 'react'
import "./Prod.scss";
import { useState } from 'react';
// import { getAll } from '../../api/getRequests';
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
import { findChat } from '../../api/chatRequests';
import { addMessage, getMessage } from '../../api/messageRequests'


const Prod = () => {
    const [openChat, setOpenChat] = useState(false)
    const { setCards, cards, chats, exit, setChats, currentUser, currentChat, setCurrentChat, onlineUsers } = useInfoContext()
    const [modal, setModal] = useState(false)
    const [tel, setTel, send, setSend] = useState(false)



    const toggleChat = () => setOpenChat(!openChat)
    const prodId = useParams().id
    const prod = cards.filter(res => res._id === prodId)[0]

    const setCar = new Date(prod?.createdAt);
    const [messages, setMessages] = useState([])
    const today = new Date();

    const fromattedDate = setCar.toLocaleDateString();
    const todayDateString = today.toLocaleDateString();



    const isToday = fromattedDate === todayDateString;
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    const handleSend = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { data } = await findChat(prod?.user?._id, currentUser._id);
        setCurrentChat(data?.chat)

        formData.append('senderId', currentUser._id);
        formData.append('chatId', data.chat._id);
        formData.append('createdAt', new Date().getTime());

        const newMessage = {
            senderId: currentUser._id,
            chatId: currentChat._id,
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

    return (
        <div className='prodbody'>


            <Search />

            <div className='prodbody2'>

                <div className="container">
                    <div className="links_prod">
                        <button type="button" data-testid="to-back" className="btn_links"> <Link to="/" className='btn_link'> <i className="fa-solid fa-chevron-left"></i> Orqaga</Link></button>
                        <ol data-testid="breadcrumbs" data-cy="categories-breadcrumbs" className="links_ol">
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Bosh sahifa  </Link></li>                  <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Transport  </Link></li>                    <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Yengil avtomashinalar  </Link></li>        <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Boshqalar </Link></li>                     <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Boshqalar - Toshkent viloyati </Link></li> <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Boshqalar - Toshkent </Link></li>          <div className="slash"> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <Link to="/" className="links_a">Boshqalar - Yashnobod tumani  </Link></li> <div className="slash"> / </div>
                        </ol>
                    </div>
                </div>

                {/* ////////////////// carousel /////////////// */}

                <div className="container">
                    <div className="a1">

                        <div className="carousel" style={{ width: "930px", margin: "2px", padding: "40px", backgroundColor: "#fff", height: "700px" }}>
                            <Slider {...settings}>
                                {prod?.photos?.length && prod?.photos?.map(item => {
                                    return <img key={item._id + '1'} src={item.url} />
                                })}
                            </Slider>
                        </div>

                        {/* ////////////////// data /////////////////////// */}

                        <div>
                            <div className="boxs">
                                <div className='box_1'>
                                    <Link to={`#/${prod?._id}`} className='Prod-content'>
                                        {isToday ? fromattedDate : `Сегодня в ${new Date(prod?.createdAt).toLocaleTimeString().slice(0, 5)}`}
                                    </Link>
                                    <Link to="/" className='boxs_heard'>
                                        <i className="fa-regular fa-heart"></i>
                                    </Link>
                                </div>
                                <div className='sp span'>
                                    <Link to={`#/${prod?._id}`} >
                                        <p>{prod?.name}</p>
                                    </Link>
                                </div>
                                <div className='sp'>
                                    <Link to={`#/${prod?._id}`} >
                                        <h3>{prod?.price}</h3>
                                    </Link>
                                </div>
                                <div className="price-bottom">
                                    <button onClick={() => setOpenChat(true)}>Xabar yozish</button>
                                    <button onClick={() => setTel(true)}>{!tel ? "Qo'ng'iroq qilish" : <Link to={`tel:${prod?.phone}`}><span style={{ color: '#002f34' }}>{prod?.phone}</span></Link>}</button>
                                </div>

                            </div>

                            <div className="box2">
                                <h3>Foydalanuvchi</h3>
                                <div className='profil_link'>
                                    <Link to="#">
                                        <img src="data:image/png;base64,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" alt="" />
                                    </Link>
                                    <div className="profil_link_date">
                                        <span>
                                            <Link to={`#/${prod?._id}`} >
                                                {prod?.author}
                                            </Link>
                                        </span><br />
                                        <span>
                                            <Link to={`#/${prod?._id}`} >
                                                {prod?.content}
                                            </Link>
                                        </span><br />
                                        <span>
                                            <Link to="/"> Oxirgi marta kecha 17:30 da ...</Link>
                                        </span><br />
                                    </div>
                                </div>
                                <span className='profil_link_span_a'>
                                    <Link to="/">Muallifning boshqa e'lonlari <i className="fa-solid fa-chevron-right"></i></Link>
                                </span>
                            </div>
                            <div className="box3">
                                <p className='location'>  Joylashuv</p>
                                <div className='location_div'>
                                    <div className="location_div_div" >
                                        <i style={{ display: "flex", marginBottom: "100px" }} className="fa-solid fa-location-dot"></i>
                                        <Link to={`#/${prod?._id}`} style={{ color: "#002f34", cursor: "text", textDecoration: "none" }} >
                                            <h3 style={{ display: "flex", marginBottom: "100px", marginLeft: "10px" }}>{prod?.location}</h3>
                                        </Link>
                                    </div>
                                    <Link to='https://www.google.com/maps/@37.2469544,67.232548,12z?entry=ttu' className='div_img_box3' >
                                        <img src="https://www.olx.uz/app/static/media/staticmap.65e20ad98.svg" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='a2' style={{ marginTop: "10px", width: "930px" }}>
                        <div className='a2_futers' >
                            <div className="advertising">
                                <Link to="/" className='link'>
                                    <h6 className='.adv_h6'> <i className="fa-regular fa-bookmark"></i>  REKLAMA QILISH</h6>
                                </Link>
                                <Link to="/" className='link'>
                                    <h6 className='.adv_h6'> <i className="fa-solid fa-rotate-right"></i>  KO'TARISH</h6>
                                </Link>
                            </div>
                            <div className='tags'>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} className='Prod-content'>
                                        Ishlab chiqarilgan yili: {isToday ? `Сегодня в ${new Date(prod?.createdAt).toLocaleTimeString().slice(0, 5)}` : fromattedDate}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        Bosgan yo'li:  {prod?.run}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        Uzatmalar qutisi:  {prod?.transmission}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        Rang: {prod?.color}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        sig'im: {prod?.capacity}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        yoqilg'i turi: {prod?.type_of_fuel}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        state: {prod?.state}
                                    </Link>
                                </button>
                                <button className="teg_car">
                                    <Link to={`#/${prod?._id}`} >
                                        Mulkdorlar soni: {prod?.number_of_hosts}
                                    </Link></button>
                            </div>
                            <div className="text_a2">
                                <h3>TAVSIF</h3>
                                <div className="text_a2">
                                    <Link to={`#/${prod?._id}`} >
                                        {prod?.content}
                                    </Link>
                                </div>
                            </div>
                            <br /><br />
                            <div className="line" style={{ width: "95%" }}></div>
                            <br />
                            <div className='a2_futer'>
                                <span>
                                    <Link to={`#/${prod?._id}`} >
                                        ID: {prod?._id}
                                    </Link>
                                </span>
                                <span>
                                    <Link to={`#/${prod?._id}`} >
                                        Ko'rishlar:{/* {prod?._id} */} 13
                                    </Link>
                                </span>
                                <button className='a2_futer_btn'> <Link to="/" className='a2_futer_btn_link'> <i className="fa-regular fa-font-awesome"></i> Shikoyat qilish </Link> </button>
                            </div>
                        </div>
                    </div>

                    {/* //////////////// author //////////////////// */}

                    <div className='a3_author_futter' >
                        <div className="author_futter_1">
                            <h5>SOTUVCHIGA MUROJAAT QILISH</h5>

                            <div className='profil_link'>
                                <Link className='link' to="/"><img src="data:image/png;base64,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" alt="" /></Link>
                                <div className="profil_link_date">
                                    <span><Link className='link name' to="/">Abdulajon</Link> </span><br />
                                    <span><Link className='link' to="/"> OLXda 2024 M08 beri</Link></span><br />
                                    <span><Link className='link' to="/"> Oxirgi marta kecha 17:30 da ...</Link></span><br />
                                </div>
                            </div>

                            {/* 2 */}
                        </div>

                        {!tel ? <div className='author_futter_2_2'>
                            <div className="boll"><i className="fa-solid fa-phone"></i></div>
                            <p>xxx xxx xxx</p>
                            <button onClick={() => setTel(true)}>Ko'rsatish</button>
                        </div> :
                            <div className='author_futter_2_2'>
                                <i className="fa-solid fa-phone"></i>
                                {prod?.phone}
                            </div>
                        }
                    </div>

                    {/* ////////////////////// carusel /////////////////////// */}

                    <div className='additional_products'>
                        <div className="announcementss" style={{ display: "flex" }}>
                            {prod?.userProd?.map(prod => {
                                return <Card key={prod._id} prod={prod} />
                            })}
                            <div className="announcementss" style={{ display: "flex" }} >
                                <div className="top">
                                    <h2>Все объявления автора <Link to='/' className='link-prod'>Смотреть все</Link></h2>
                                </div>
                                <div className="carousel-item">
                                    {prod?.userProd?.map(prod => {
                                        return <Card key={prod?._id} prod={prod} />
                                    })}
                                </div>
                            </div>
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
                                    <h3>{prod?.author? prod?.author : 'New user'}</h3>
                                </div>
                            </div>
                            <div className="profile-set" onClick={toggleChat}>
                                X
                            </div>
                        </div>
                        <div className="send-message">
                            {currentChat?.createdAt && <b style={{ textAlign: 'center', fontSize: '12px' }}>начилос в {new Date(currentChat?.createdAt).toLocaleDateString()}</b>}
                            {messages?.length > 0 ? messages.map(chat => {
                                return (<div key={chat?._id} className={chat?.senderId === currentUser?._id ? "messages own" : "messages"}>
                                    <div className='span-box'>
                                        <span>
                                            {chat?.file && <img style={{ width: '100%' }} src={`${chat?.file?.url}`} alt='chat_img' />}
                                            {chat?.text} </span>
                                        <strong className='message-time'>{new Date(chat.createdAt).toLocaleTimeString().slice(0, 5)}</strong>
                                    </div>
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
                                <button disabled={send} className='message-btn'><i class="fa-regular fa-circle-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>}
            </div>
            <br />


        </div >
    )






}

export default Prod