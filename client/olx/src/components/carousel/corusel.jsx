
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import { getOneProd } from '../../api/getRequests';
import "./corusel.scss";
import Slider from "react-slick";


const Corusel = () => {

    const id = useParams().id;
    const [prod, setProd] = useState(null)

    useEffect(() => {
        const getOne = async () => {
            try {
                const res = await getOneProd(id, "car");
                console.log(res);
                setProd(res.data.getOne[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getOne();
    }, [id]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            {/* <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> */}
            <div class="carousel-inner">
                {
                    // prod?.photos?.map((img, i) => {
                    <Slider {...settings }>
                        {prod?.photos?.length > 0 && prod.photos.map(item => {
                        return <div className="carousel-item active" >
                            <img width={200} class="d-block w-100" src={item.url} alt="First slide" />
                        </div>
                        })
                        }
                    </Slider>
                    // })
                }
                {/* // <div className={i == 0 ? `carousel-item active` : `carousel-item `}>
                            //     <img class="d-block w-100" src={img?.url} alt="First slide" />
                            // </div> */}
                {/*  {slidesData?.map((item, idx) => {
                         return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : " slide slide-hidden"} />
                     })}  */}

            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> */}
        </div >

    )
}

export default Corusel


