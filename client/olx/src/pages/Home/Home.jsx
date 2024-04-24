import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import "./Home.scss";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";


const Home = () => {
  const id = useParams().id;
  const res = data.filter((res) => res.id == id)[0];
  return (
    <div>
      <div className="body">
        <Navbar />
        <Search />

        <div className="announcements">
          <div className="container">
            <h1 className="h1">OLX эълонлар тахтасидаги рукнлар</h1>
            <div className="anns">
              <a href="#" className="icon">
                <img
                  className="img cars "
                  src="https://categories.olxcdn.com/assets/categories/olxuz/transport-3-1x.png"
                  alt=""
                />
                <br />
                <span className="spans1">Transport</span>
              </a>
              <a href="#" className="icon">
                <img
                  className="img job "
                  src="https://categories.olxcdn.com/assets/categories/olxuz/rabota-6-1x.png"
                  alt=""
                />
                <br />
                <span className="spans">Ish</span>
              </a>
              <a href="#" className="icon">
                <img
                  className="img stil "
                  src="https://categories.olxcdn.com/assets/categories/olxuz/moda-i-stil-891-1x.png"
                  alt=""
                />
                <br />
                <span className="spans1">Moda va stil</span>
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="vip_announcements">
            <h1 className="h1">Премиум объявления</h1>

            <div className="announcementss">

              {data.length > 0 ? data.map(res=> {
                return   <Link to={`/prod/${res.id}`} className="row">
                <div className="div_2">
                  <div className="img">
                    <img src={res.img[0]} alt="photo" />
                  </div>
                  <div className="row_text">
                    <div className="name_row">

                      <span className="">{res.name}</span>
                      <div className="heart"><i class="fa-regular fa-heart"></i></div>
                    </div>
                    <div className="prise">3,112,300$</div>
                    <div className="location">Toshkent Shaxar</div>
                    <div className="date">17.04.2024</div>
                  </div>

                </div>
              </Link >
              }) : <h2>Tvar yo'q</h2>}

            </div>
          </div>
        </div>

        <div className="futter1">
          <div className="container">
            <div className="infob">
              <div className="info">
                <img
                  src="https://www.olx.uz/app/static/media/graph.49012f6ae.svg"
                  alt=""
                />
              </div>

              <div className="info2">
                <div className="info_text">
                  <p> Stand out as a company! </p>
                  <h4>OLX bilan internetda biznesingizni boshlang!</h4>
                </div>
              </div>
              <button className="info_btn">Batafsll</button>
            </div>
          </div>
        </div>

        <div className="futter2">
          <div className="img_f2">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png"
              alt=""
            />
          </div>
          <div className="text">
            <span className="text_s">
              O'zbekistonda 1-raqamli e'lonlar servisi <br />
              O'zbekiston xususiy e'lonlari OLX (avvalgi torg.uz) - bu yerda
              izlaganingizni topasiz.
              <br />
              "E'lon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid
              onlayn-e'lonni joylashtira olasiz - ish qidirish, xizmat
              ko'rsatish, avtomobillar, ko'chmas mulk, elektronika va boshqalar
              savdosi.
              <br />
              OLX O'zbekiston servisi yordamida siz deyarli barcha istagan
              narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv
              funksiyasidan foydalanib, o'zingizni qiziqtirgan mavzuga oid
              sersisda mavjud e'lonlarni hech bir qiyinchiliksiz topa olasiz.
              <br />
              OLX O'zbekiston - sizning ishonchli va tengi yo'q yordamchingiz.
            </span>
          </div>
        </div>
        <div className="container">
          <div className="futter3">
            <div className="f1">
              <img
                src="https://www.olx.uz/app/static/media/olx_category.f0c6831ac.svg"
                alt=""
              />
              <div className="links">
                <span class="css-eizsos">OLX servisining bo'limlari :</span>
                <a class="css-j634ox" href="/oz/detskiy-mir/">
                  {" "}
                  Bolalar dunyosi{" "}
                </a>
                <a class="css-j634ox" href="/oz/nedvizhimost/">
                  {" "}
                  Ko'chmas mulk{" "}
                </a>
                <a class="css-j634ox" href="/oz/transport/">
                  {" "}
                  Transport{" "}
                </a>
                <a class="css-j634ox" href="/oz/rabota/">
                  {" "}
                  Ish{" "}
                </a>
                <a class="css-j634ox" href="/oz/zhivotnye/">
                  {" "}
                  Hayvonlar{" "}
                </a>{" "}
                <br />
                <a class="css-j634ox" href="/oz/dom-i-sad/">
                  {" "}
                  Uy va bog'{" "}
                </a>
                <a class="css-j634ox" href="/oz/elektronika/">
                  {" "}
                  Elektr jihozlari{" "}
                </a>
                <a class="css-j634ox" href="/oz/uslugi/">
                  {" "}
                  Xizmatlar{" "}
                </a>
                <a class="css-j634ox" href="/oz/moda-i-stil/">
                  {" "}
                  Moda va stil{" "}
                </a>
                <a class="css-j634ox" href="/oz/hobbi-otdyh-i-sport/">
                  {" "}
                  Xobbi, dam olish sport{" "}
                </a>
                <a class="css-j634ox" href="/oz/otdam-darom/">
                  {" "}
                  Tekinga beraman{" "}
                </a>{" "}
                <br />
                <a class="css-j634ox" href="/oz/obmen-barter/">
                  {" "}
                  Ayirboshlash{" "}
                </a>
              </div>
            </div>
            <div className="f2">
              <img
                src="https://www.olx.uz/app/static/media/observed_search.17aec4d21.svg"
                alt=""
              />
              <div className="links">
                <span class="css-eizsos">Mashhur qidiruvlar : </span>
                <a class="css-j634ox" href="/oz/q-samsung/">
                  samsung
                </a>
                <a class="css-j634ox" href="/oz/q-matiz/">
                  matiz
                </a>
                <a class="css-j634ox" href="/oz/q-telefon/">
                  telefon
                </a>
                <a class="css-j634ox" href="/oz/q-damas/">
                  damas
                </a>
                <a class="css-j634ox" href="/oz/q-квартира/">
                  квартира
                </a>{" "}
                <br />
                <a class="css-j634ox" href="/oz/q-iphone-x/">
                  iphone x
                </a>
                <a class="css-j634ox" href="/oz/q-jentra/">
                  jentra
                </a>
                <a class="css-j634ox" href="/oz/q-byd/">
                  byd
                </a>
                <a class="css-j634ox" href="/oz/q-iphone-11/">
                  iphone 11
                </a>
                <a class="css-j634ox" href="/oz/q-матиз/">
                  матиз
                </a>
                <a class="css-j634ox" href="/oz/q-iphone-12/">
                  iphone 12
                </a>
                <a class="css-j634ox" href="/oz/q-spark/">
                  spark
                </a>
                <a class="css-j634ox" href="/oz/q-kvartira/">
                  kvartira
                </a>{" "}
                <br />
                <a class="css-j634ox" href="/oz/q-redmi/">
                  redmi
                </a>
                <a class="css-j634ox" href="/oz/q-велосипед/">
                  велосипед
                </a>
                <a class="css-j634ox" href="/oz/q-malibu-2/">
                  malibu 2
                </a>
                <a class="css-j634ox" href="/oz/q-iphone-13-pro/">
                  iphone 13 pro
                </a>
                <a class="css-j634ox" href="/oz/q-ish/">
                  ish
                </a>
                <a class="css-j634ox" href="/oz/q-velosiped/">
                  velosiped
                </a>
                <a class="css-j634ox" href="/oz/q-monza/">
                  monza
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
