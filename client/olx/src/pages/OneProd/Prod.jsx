import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'
import "./Prod.scss";
import bg1 from '../../data'


const Prod = () => {

    return (
        <div className='prodbody'>
            <Navbar />
            <br /><br />
            <Search />

            <div className='prodbody2'>

                <div className="container">

                    <div className="links_prod">
                        <button type="button" data-testid="to-back" className="btn_links"> <a href="/"> <i class="fa-solid fa-chevron-left"></i> Orqaga</a></button>
                        <ol data-testid="breadcrumbs" data-cy="categories-breadcrumbs" className="links_ol">
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/" className="links_a">Bosh sahifa  </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/" className="links_a">Transport  </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/legkovye-avtomobili/" className="links_a">Yengil avtomashinalar  </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/legkovye-avtomobili/drugie/" className="links_a">Boshqalar </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/legkovye-avtomobili/drugie/toshkent-oblast/" className="links_a">Boshqalar - Toshkent viloyati </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/legkovye-avtomobili/drugie/tashkent/" className="links_a">Boshqalar - Toshkent </a></li> <div> / </div>
                            <li data-testid="breadcrumb-item" className="links_li"> <a href="/oz/transport/legkovye-avtomobili/drugie/tashkent/?search%5Bdistrict_id%5D=22" className="links_a">Boshqalar - Yashnobod tumani  </a></li> <div> / </div>
                        </ol>
                    </div>
                </div>

                {/* ////////////////// carousel /////////////// */}

                <div className="container">
                    <div className="a1">

                        <div className="carousel">

                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <img src=" https://frankfurt.apollo.olxcdn.com/v1/files/b0pcpooowfu23-UZ/image;s=1000x700 " className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item">
                                        <img src="https://frankfurt.apollo.olxcdn.com/v1/files/zbga1w0jzxxc2-UZ/image;s=1000x700 " className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item">
                                        <img src=" https://frankfurt.apollo.olxcdn.com/v1/files/ehp4vtyf5dul3-UZ/image;s=1000x700 " className="d-block w-100" alt="..." />
                                    </div>

                                    <div className="carousel-item">
                                        <img src=" https://frankfurt.apollo.olxcdn.com/v1/files/8aw57evrbvzi2-UZ/image;s=1000x700" className="d-block w-100" alt="..." />
                                    </div>

                                </div>

                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>

                            </div>


                        </div>
                        <div>
                            <div className="boxs">
                                <div className='box_1'>
                                    <span>17.04.2024</span>
                                    <a href="#" className='boxs_heard'>
                                        <i class="fa-regular fa-heart"></i>
                                    </a>
                                </div>
                                <div className='sp span'>
                                    <span>Spark turbo</span>
                                </div>
                                <div className='sp'>
                                    <h2>12.300 $</h2>
                                </div>
                                <button className='boxs_btn' >Xabar yozish</button>
                                <button className='boxs_btn2' >Qo`ng`iroq qilish</button>
                            </div>
                            <div className="box2">
                                <h3>Foydalanuvchi</h3>
                                <div className='profil_link'>
                                    <a href="#"><img src="data:image/png;base64,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" alt="" /></a>
                                    <div className="profil_link_date">
                                        <span><a href="">Umidjon</a> </span><br />
                                        <span><a href=""> OLXda 2023 M08 beri</a></span><br />
                                        <span><a href=""> Oxirgi marta kecha 17:30 da ...</a></span><br />
                                    </div>
                                </div>
                                <span className='profil_link_span_a'>
                                    <a href="#">Muallifning boshqa e'lonlari <i class="fa-solid fa-chevron-right"></i></a>
                                </span>
                            </div>
                            <div className="box3">
                                <p className='location'> {/*location icon*/} Joylashuv</p>
                                <div className='location_div'>
                                    <div className="location_div_div">
                                        <span>Farg'ona </span><br />
                                        <span>Farg'ona viloyati</span>
                                    </div>
                                    <a href='https://www.google.com/maps/@40.3724976,71.8001291,20.68z?entry=ttu' className='div_img_box3' >
                                        <img src="https://www.olx.uz/app/static/media/staticmap.65e20ad98.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='a2'>
                        <div>
                            <div className="advertising">
                                <link href="#">
                                    <h6 className='.adv_h6'> <i class="fa-regular fa-bookmark"></i>  REKLAMA QILISH</h6>
                                </link>
                                <a href="#">
                                    <h6 className='.adv_h6'> <i class="fa-solid fa-rotate-right"></i>  KO'TARISH</h6>
                                </a>
                            </div>
                            <div className='tags'>
                                <button className="teg_car">  Jismoniy shaxs</button>
                                <button className="teg_car">  Model: Spark</button>
                                <button className="teg_car">  Ishlab chiqarilgan yili: 2020</button>
                                <button className="teg_car">  Bosgan yo'li: 49 000 km</button>
                                <button className="teg_car">  Uzatmalar qutisi: Avtomatik</button>
                                <button className="teg_car">  Rang: Oq</button>
                                <button className="teg_car">  Dvigatel hajmi: 1,25 </button>
                                <button className="teg_car">  Yoqilg'i turi: Benzin</button>
                                <button className="teg_car">  Mashina holati: Yaxshi</button>
                                <button className="teg_car">  Mulkdorlar soni: 2</button>
                            </div>
                            <div className="text_a2">
                                <h3>TAVSIF</h3>
                                <div className="text_a2">
                                    Машина своя <br />
                                    2020-2021 <br />
                                    49.000 км<br />
                                    He одного царапины. <br />
                                    Можате проверить в любом месте <br /><br />
                                    B комплекте зимние шины <br />
                                    тонеровка до января <br />
                                </div>
                            </div>
                            <div className='a2_futer'>
                                <span>ID: 1</span>
                                <span>Ko'rishlar: 12</span>
                                <button className='a2_futer_btn'> <span> Shikoyat qilish </span> </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Prod