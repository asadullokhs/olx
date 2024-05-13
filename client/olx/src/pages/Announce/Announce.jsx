import React from "react";
import "./Announce.scss";
import { Link, NavLink } from "react-router-dom";
import { useInfoContext } from "../../context/Context";
import Card from "../../components/Card/Card";
import { deleteAll } from "../../api/delRequests";
import { toast } from "react-toastify";

const UserProd = () => {
  const { cards, toggleReset, currentUser, exit, works, category } =
    useInfoContext();

  const userArr = [...cards, ...works];

  const userProd = userArr.filter((prod) => prod.authorId === currentUser._id);

  const deleteProdact = async (prod) => {
    const confirmDel = window.confirm("Ochirishni tasdiqlash!!!");
    if (confirmDel) {
      const method = category.filter((cat) => cat._id === prod.categoryId)[0];
      toast.loading("Please wiat...");
      let result = null;
      try {
        if (method.name === "Car") {
          const res = await deleteAll(prod._id, "car");
          result = res.data.message;
        } else if (method.name === "Fashion") {
          const res = await deleteAll(prod._id, "fashion");
          result = res.data.message;
        } else if (method.name === "Work") {
          const res = await deleteAll(prod._id, "work");
          result = res.data.message;
        }
        toast.dismiss();
        toast.success(result);
        toggleReset()
      } catch (err) {
        toast.dismiss();
        toast.error(err.response.data.message);
        if (err.response.data.message === "jwt expired") {
          exit();
        }
      }
    }
  };

  
  return (
    <div className="my mt-5">
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
      <div className="filter">
        <div className="container">
          <div className="none">
            <Link to="/">
              <button className="media-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </Link>
            <h2>Elonlar</h2>
          </div>
          <ul className="media">
            <li>Faol</li>
            <li>Kutayotgan</li>
            <li>Tolanmagan</li>
            <li>Nofaol</li>
            <li>Rad etilgan</li>
          </ul>
          <div className="btns media">
            <div className="filterR">
              <i className="fa-solid fa-sliders"></i>
              <span>Filtrni qoshish</span>
            </div>
            <div className="searchInput">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Искать по заголовку..." />
            </div>
            <div className="category">
              <span>Istalgan toifa</span>
              <i className="fa-solid fa-chevron-down me-2"></i>
            </div>
            <div className="sort">
              <span>Saralash</span>
              <i className="fa-solid fa-chevron-down me-2"></i>
            </div>
          </div>
          <div className="cardsS">
            {userProd.length > 0 ? (
              userProd.map((res) => {
                return (
                  <div key={res._id} className="card-user">
                    <div className="one">
                      <div className="card-info">
                        {res?.photos?.length > 0 && (
                          <img src={res.photos[0].url} alt="" />
                        )}
                        <div className="status-one">
                          <div id="res-content">
                            <b>{res.content}</b>
                            <br />
                          </div>
                          <i className="fa-solid fa-location-dot"></i>
                          {res.location} <br />
                          <i className="fa-solid fa-calendar-days"></i>
                          {new Date(res.createdAt).toLocaleTimeString()}
                        </div>
                      </div>
                      <div className="card-status">
                        <div className="status-two">
                          <b>{res.price}</b>
                          <div className="iconss gap">
                            <span>
                              0 <i className="fa-regular fa-heart ms-1"></i>
                            </span>
                            <span>
                              0 <i className="fa-solid fa-phone ms-1"></i>
                            </span>
                            <span>
                              0 <i className="fa-solid fa-eye ms-1"></i>
                            </span>
                            <button>Statiskani korish</button>
                            <button>
                              <i className="fa-regular fa-comment me-1"></i> 0
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="usertwo">
                      <p>id:{res._id}</p>
                      <div>
                        <Link to={`/prod/${res._id}`}>
                          <button>Tekshirish</button>
                        </Link>
                        <span
                          onClick={() => deleteProdact(res)}
                          style={{ cursor: "pointer" }}
                        >
                          O'chirish
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>Malumot yoq</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProd;