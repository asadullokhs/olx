import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import "./Home.scss";
import { Link, useParams } from "react-router-dom";
import { useInfoContext } from "../../context/Context";


const Home = () => {
  const id = useParams().id;
  // const res = data?.filter((res) => res.id == id)[0];

  const { cards } = useInfoContext()

  return (
    <div>
      <div className="body">
        <Navbar />
        <Search />

        <div className="announcements">
          <div className="container">
            <h1 className="h1">OLX эълонлар тахтасидаги рукнлар</h1>
            <h1 className="h1_m" style={{ display: "none" }}>Bo'limlar</h1>
            <div className="anns">
              <Link to="/" className="icon">
                <img
                  className="img cars "
                  src="https://categories.olxcdn.com/assets/categories/olxuz/transport-3-1x.png"
                  alt="" />
                <br />
                <span className="spans1">Transport</span>
              </Link>
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
            <h1 className="h1 h1_2_m">Премиум объявления</h1>

            <div className="announcementss" style={{}}>
              {cards.length > 0 ? cards.map(card => {
                return <Card key={card._id} prod={card} />
              }) : <h2 >Tavar yo'q</h2>}
            </div>

          </div>
        </div>

        {/* <div className="futter1">
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
        </div> */}

        {/* <div className="futter2">
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
        </div> */}
        {/* <div className="container">
          <div className="futter3">
            <div className="f1">
              <img
                src="https://www.olx.uz/app/static/media/olx_category.f0c6831ac.svg"
                alt=""
              />
              <div className="links">
                <span className="css-eizsos">OLX servisining bo'limlari :</span>
                <a className="css-j634ox" href="/oz/detskiy-mir/">
                  {" "}
                  Bolalar dunyosi{" "}
                </a>
                <a className="css-j634ox" href="/oz/nedvizhimost/">
                  {" "}
                  Ko'chmas mulk{" "}
                </a>
                <a className="css-j634ox" href="/oz/transport/">
                  {" "}
                  Transport{" "}
                </a>
                <a className="css-j634ox" href="/oz/rabota/">
                  {" "}
                  Ish{" "}
                </a>
                <a className="css-j634ox" href="/oz/zhivotnye/">
                  {" "}
                  Hayvonlar{" "}
                </a>{" "}
                <br />
                <a className="css-j634ox" href="/oz/dom-i-sad/">
                  {" "}
                  Uy va bog'{" "}
                </a>
                <a className="css-j634ox" href="/oz/elektronika/">
                  {" "}
                  Elektr jihozlari{" "}
                </a>
                <a className="css-j634ox" href="/oz/uslugi/">
                  {" "}
                  Xizmatlar{" "}
                </a>
                <a className="css-j634ox" href="/oz/moda-i-stil/">
                  {" "}
                  Moda va stil{" "}
                </a>
                <a className="css-j634ox" href="/oz/hobbi-otdyh-i-sport/">
                  {" "}
                  Xobbi, dam olish sport{" "}
                </a>
                <a className="css-j634ox" href="/oz/otdam-darom/">
                  {" "}
                  Tekinga beraman{" "}
                </a>{" "}
                <br />
                <a className="css-j634ox" href="/oz/obmen-barter/">
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
                <span className="css-eizsos">Mashhur qidiruvlar : </span>
                <a className="css-j634ox" href="/oz/q-samsung/">
                  samsung
                </a>
                <a className="css-j634ox" href="/oz/q-matiz/">
                  matiz
                </a>
                <a className="css-j634ox" href="/oz/q-telefon/">
                  telefon
                </a>
                <a className="css-j634ox" href="/oz/q-damas/">
                  damas
                </a>
                <a className="css-j634ox" href="/oz/q-квартира/">
                  квартира
                </a>{" "}
                <br />
                <a className="css-j634ox" href="/oz/q-iphone-x/">
                  iphone x
                </a>
                <a className="css-j634ox" href="/oz/q-jentra/">
                  jentra
                </a>
                <a className="css-j634ox" href="/oz/q-byd/">
                  byd
                </a>
                <a className="css-j634ox" href="/oz/q-iphone-11/">
                  iphone 11
                </a>
                <a className="css-j634ox" href="/oz/q-матиз/">
                  матиз
                </a>
                <a className="css-j634ox" href="/oz/q-iphone-12/">
                  iphone 12
                </a>
                <a className="css-j634ox" href="/oz/q-spark/">
                  spark
                </a>
                <a className="css-j634ox" href="/oz/q-kvartira/">
                  kvartira
                </a>{" "}
                <br />
                <a className="css-j634ox" href="/oz/q-redmi/">
                  redmi
                </a>
                <a className="css-j634ox" href="/oz/q-велосипед/">
                  велосипед
                </a>
                <a className="css-j634ox" href="/oz/q-malibu-2/">
                  malibu 2
                </a>
                <a className="css-j634ox" href="/oz/q-iphone-13-pro/">
                  iphone 13 pro
                </a>
                <a className="css-j634ox" href="/oz/q-ish/">
                  ish
                </a>
                <a className="css-j634ox" href="/oz/q-velosiped/">
                  velosiped
                </a>
                <a className="css-j634ox" href="/oz/q-monza/">
                  monza
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
