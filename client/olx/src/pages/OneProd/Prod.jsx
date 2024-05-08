import React from 'react'
import "./Prod.scss";
import { useState } from 'react';
// import { getAll } from '../../api/getRequests';
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
// import { Link } from 'react-router-dom';
import { useInfoContext } from '../../context/Context';
import { Link, useParams } from 'react-router-dom';
// import Slider from '../../components/Slider/Slider';
// import  slidesData  from '../../components/Slider/caruselData.json';
import Corusel from '../../components/carousel/corusel';
import Slider from 'react-slick';
import Card from '../../components/Card/Card';

const Prod = () => {
    const { setCards, cards } = useInfoContext()
    const [modal, setModal] = useState(false)

    const prodId = useParams().id
    const prod = cards.filter(res => res._id === prodId)[0]

    const setCar = new Date(prod?.createdAt);
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

    return (
        <div className='prodbody'>
            <Navbar />

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
                                {prod?.photos?.length && prod.photos.map(item => {
                                    return <img src={item.url} />
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

                                <button type='button' className='boxs_btn' onClick={() => setModal(true)}>Xabar yozish</button>
                                <button className='boxs_btn2' >Qo`ng`iroq qilish</button>
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
                                        <i style={{ display: "flex", marginBottom: "100px" }} class="fa-solid fa-location-dot"></i>
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
                                <button className='a2_futer_btn'> <Link to="/" className='a2_futer_btn_link'> <i class="fa-regular fa-font-awesome"></i> Shikoyat qilish </Link> </button>
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
                        <div className="author_futter_2">
                            <button type='button' className='btn' onClick={() => setModal(true)}>Xabar yozish</button>
                            <div className='author_futter_2_2'>
                                <div className="boll"><i className="fa-solid fa-phone"></i></div>
                                <p>XXX XX XX</p>
                                <button className='btn2'>Ko'rsatish</button>
                            </div>
                        </div>
                    </div>

                    {/* ////////////////////// carusel /////////////////////// */}

                    <div className='additional_products'>
                            <div className="announcementss" style={{}}>
                                {cards.length > 0 ? cards.map(card => {
                                     return <Card key={card._id} prod={card} />
                                }) : <h2 >o'xshash tavar yo'q 😔 😔 😔 </h2>}
                            </div>
                    </div>
                </div>

                {
                    modal && <div className='mesage_modal' style={{ boxShadow: "0 0 5px 2px grey", position: "fixed", bottom: "10%", right: "18%", backgroundColor: "white", padding: "20px", width:"336px", height:"445px" }}>

                        <div className="message_modal1" >
                            <div className="modal1_img" style={{ display: "flex", justifyContent: "space-between" }}>
                                <h5 className='modal-title' id='exampleModalLabl' style={{ display: "flex" }} >
                                    <img style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }} src="data:image/png;base64,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" alt="" />
                                    <h5 className='modal-title' id='exampleModalLabl' >{prod?.author}</h5>
                                </h5>
                                <button type='button' className='btn-close' onClick={() => setModal(false)}></button>
                            </div>
                            <div className="line" style={{ border: "1px solid black", width: "114%", marginLeft: "-20px", marginTop: "10px", marginBottom: "10px" }}></div>
                            <div className="modal-body">
                                <div className="box d-flex">
                                    <img className='img_mesage_modal' src={prod?.photos[0].url} style={{ width: "40px", height: "40px" }} alt="" />
                                    <div >
                                        {prod?.name}
                                        <div style={{  display: "flex", justifyContent: "space-between" }}>
                                            <p>{prod?.price}  </p>
                                            <p> {prod?._id} </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="messages" style={{ width: "300px", height:"250px" }}></div>
                                <div className="message_futter" style={{width:"336px", height:"48px"}}>
                                    <label htmlFor="input"  className='inp_file_message' style={{margin:"4px 10px", cursor:"pointer	"}}> 
                                    <input type="file" id='input' style={{display:"none"}} />
                                    <i class="fa-solid fa-paperclip"></i>
                                    </label>
                                    {/* <input type="file"  className='inp_file_message'  style={{maxWidth:"206px"}}/> */}
                                    <input type="text" className="inp_mesage" placeholder='malumot yozing'  style={{border:"none",outline:"none", margin:"0 20px"}}/>
                                    <button className='send_btn_mesage' style={{border:"none", backgroundColor:"white", width:"40px", height:"40px" }}  >
                                    <i class="fa-solid fa-circle-right"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
            <br />
            <Footer />

        </div >
    )






}

export default Prod