import React from "react";
import "./Announce.scss";
import { Link } from "react-router-dom";
import { useInfoContext } from "../../context/Context";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify"
import { deleteAll } from "../../api/delRequests";

const Announc = () => {
  const { cards, category, currentUser, exit } = useInfoContext();

  const userProd = cards.filter((prod) => prod.authorId === currentUser._id);
  // const userProd = [];




  const deleteProdact = async (prod) => {
    const confirmDel = window.confirm('Ochirishni tastiqlang!!!')
    if(confirmDel){
      const method = category.filter(cat => cat._id === prod.categoryId)[0] 
      toast.loading('Please wiat...')
      let result = null
      try {
        if(method.name === 'Car'){
          const res = await deleteAll(prod._id, 'car')
          result = res.data.message
        }else if (method.name === 'Fashion'){
          const res = await deleteAll(prod._id, 'fashion')
          result = res.data.message
        } else if(method.name === 'Work'){
          const res = await deleteAll(prod._id, 'work')
          result = res.data.message
        }
          toast.dismiss()
          toast.success(result)
      } catch (err) {
          toast.dismiss()
          toast.error(err?.response?.data?.message)
          if(err?.response?.data?.message === 'jwt expired'){
            exit()
          }
      }
    }
  }





  return (
    <div className="announc">
      <Navbar />
      <div className="container">
        <div>
          <div className="one-top">
            <h1>Sozlamalar</h1>
            <div>
              <span>
                Sizning hisobingiz: 0 sum
                <br /> Eʼlonlar reklamasi uchun: 0 bonuslarni
              </span>
              <i className="fa-solid fa-circle-info"></i>
              <button>Hisobni Toldirish</button>
              <button className="buyBtn">Paketni sotib oling</button>
            </div>
          </div>
          <div className="two">
            <b>E’tibor bering, OLX.UZ-da yetkazib berish xizmati mavjud emas</b>
            <p>
              Xaridni yetkazib berish orqali rasmiylashtirish haqidagi
              havolalarni e’tiborsiz qoldiring. Eng muhimi, hech qachon bank
              kartangiz maxfiy raqamini yozmang
            </p>
            <p>Internetda xavfsiz xarid qilishni bilib oling</p>
          </div>
          <ul className="announcUl">
            <li>E'lonlar</li>
            <li>Xabarlar</li>
            <li>To‘lovlar va OLX hisobi</li>
            <li>Nomzod profili</li>
            <li>
              <Link to="/settings">Sozlamalar</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="filter">
        <div className="container">
          <ul>
            <li>Faol</li>
            <li>Kutilmoqda</li>
            <li>Tolanmagan</li>
            <li>Faol emas</li>
            <li>Rad etilgan</li>
          </ul>
          <div className="btns">
            <div className="filterR">
              <i
                className="fa-solid fa-sliders"
                style={{ marginRight: "10px" }}
              ></i>
              <span>Filtrni qo'shing</span>
            </div>
            <div className="searchInput">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Sarlavha, ID yoki joylashuvi..."
              />
            </div>
            <div className="category">
              {/* asosida qidirish */}
              <span>Istalgan toifa</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="sort">
              <span>Saralash</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className="cardsS">
            {userProd.length > 0 ? (
              userProd.map((res) => {
                return (
                  <div className="card-user">
                    <div className="one">
                      <div className="card-info">
                        {" "}
                        {res.photos.length > 0 ? (
                          <img src={res?.photos[0].url} alt="card_img" />
                        ) : (
                          <img src="/images/logo.png" />
                        )}
                        <div className="status-one">
                          <b>{res.content}</b> <br /> <br />
                          <i className="fa-solid fa-location-dot"></i>
                          {res.location} <br /> <br />
                          <i className="fa-solid fa-calendar-days"></i>
                          {new Date(
                            res.createdAt
                          ).toLocaleTimeString()} <br /> <br />
                        </div>
                      </div>
                      <div className="card-status">
                        <div className="status-two">
                          <b>{res.price}</b>
                          <div className="iconss">
                            <span>
                              0 <i className="fa-regular fa-heart"></i>
                            </span>
                            <span>
                              0 <i className="fa-solid fa-phone"></i>
                            </span>
                            <span>
                              0 <i className="fa-solid fa-eye"></i>
                            </span>

                            <button>Statiskani korish</button>
                            <button>
                              <i className="fa-regular fa-comment"></i> 0
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="usertwo">
                      <p>id:{res._id}</p>
                      <div>
                        <button>Tekshirish</button>
                        <span onClick={() =>deleteProdact(res)}>Ochirish</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2>Categorya yo'q</h2>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Announc;
