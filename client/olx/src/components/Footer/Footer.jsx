import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      
      <div className="container border-top">
        <footer className="py-5">
          <div className="row">
            <div
              className="col-6 col-md-3 mb-3">
              <ul className="nav flex-column">
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Mobil ilovalar
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Yordam
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Pullik xizmatlar
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    OlX da biznes
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Foydalanish shartlari
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Maxfiylik siyosat
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="col-6 col-md-3
             mb-3"
            >
              <ul className="nav flex-column">
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Xafsizlik qoidalari
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Sayt xaritasi
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Mintaqalar xaritasi
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Ommaviy soro'vlar
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Kariyera
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Qanday sotib olish va sotish?
                  </Link>
                </li>
                <li
                  className="nav-item mb-3
                "
                >
                  <Link to="/" className="nav-link p-0 text-muted">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <div className="">
                <Link to="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">
                  <img src="https://www.olx.uz/app/static/media/google_play.8cb1ced49.svg" alt="" className="m-2" />
                </Link>
                <Link to="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4">
                  <img src="https://www.olx.uz/app/static/media/app_store.156ac6d41.svg" alt="" />
                </Link>
              </div><span className="fs-0,1 m-3">Телефонингиз учун бепул илова</span>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
            <div className="link_flag">
              <Link className="text-decoration-none alink " to="https://olx.bg">
                <img width={"17px"} height={"15px"} src="data:image/jpeg;base64,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" alt="" />
                <h2 className="fs-5">OLX.bg</h2>
              </Link>
              <Link className="text-decoration-none alink " to="https://olx.pl">
                <img width={"17px"} height={"15px"} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALEAvAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAACAcE/8QAGxABAAAHAAAAAAAAAAAAAAAAAAIEBRVVlNH/xAAWAQEBAQAAAAAAAAAAAAAAAAAABgP/xAAbEQEAAAcAAAAAAAAAAAAAAAAAAhMWU2Gh4f/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATjc6hkJzYj6XOoZCc2I+spuFJTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua6o4Tjc6hkJzYj6XOoZCc2I+k3BTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua6o4Tjc6hkJzYj6XOoZCc2I+k3BTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua6o4Tjc6hkJzYj6XOoZCc2I+k3BTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua6o4Tjc6hkJzYj6XOoZCc2I+k3BTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua6o4Tjc6hkJzYj6XOoZCc2I+k3BTsdzXVHCcbnUMhObEfS51DITmxH0m4Kdjua65QGKqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" alt="" />
                <h2 className="fs-5">OLX.pl</h2>
              </Link>
              <Link className="text-decoration-none alink " to="https://olx.ro">
                <img width={"17px"} height={"15px"} src="data:image/jpeg;base64,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" alt="" />
                <h2 className="fs-5" >OLX.ro</h2>
              </Link>
              <Link className="text-decoration-none alink " to="https://olx.ua">
                <img width={"17px"} height={"15px"} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAABgX/xAAaEAEAAQUAAAAAAAAAAAAAAAAABAIWVJHR/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAYHBf/EAB8RAQAABAcAAAAAAAAAAAAAAAABkqHRAgQFFRZSU//aAAwDAQACEQMRAD8AxgFglQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWtlRcyRqnhZUXMkap4muW6T6RlxWdLaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8LKi5kjVPDluk+kZcVjaM31rBFC1sqLmSNU8Dluk+kZcVjaM31rBUAMiWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==" alt="" />
                <h2 className="fs-5">OLX.ua</h2>
              </Link>
              <Link className="text-decoration-none alink " to="https://olx.pt">
                <img width={"17px"} height={"15px"} src="data:image/png;base64,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" alt="" />
                <h2 className="fs-5">OLX.pt</h2>
              </Link>

            </div>

            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link className="link-dark" to="#"></Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="#"></Link>
              </li>
              <li className="ms-3">
                <Link className="link-dark" to="#"></Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;