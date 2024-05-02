import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AddProd.scss";
import { useInfoContext } from "../../context/Context";
import { Link } from "react-router-dom";
const modalData = [
  [
    "Chakana savdo-sotuvlar",
    "Transport-logistika",
    "Qurilish",
    "Barlar-restoranlar",
    "Yurisprudentsiya-va-buhgalteriya",
    "Qo'riqlash-xavfsizlik",
    "Uy xodimlari",
    "Go'zallik-fitnes-sport",
    "Turizm-dam olish-o'yinlar",
    "Ta'lim",
    "Madaniyat-san'at",
    "Tibbiyot-farmatsiya",
    "It-telekom-kompyuterlar",
    "Ko'chmas mulk",
    "Marketing-reklama-dizayn",
    "Ishlab chiqarish-energetika",
    "Kotibiyat-Axo",
    "Karyerani boshlash, talabalar",
    "Xizmat ko'rsatish",
    "Boshqa mashg'ulotlar",
  ],
  [
    "Yengil avtomashinalar",
    "Avto ehtiyot qismlari va aksessuarlar",
    "Shinalar, disklar va g'ildiraklar",
    "Moto",
    "Moto ehtiyot qismlari va aksessuarlar",
    "Boshqa transport",
    "Avtobuslar",
    "Yuk mashinalari",
    "Tirkamalar",
    "Maxsus texnika",
    "Qishloq xo'jalik texnikasi",
    "Maxsus texnika uchun qismlar",
    "Suv transporti",
    "Boshqa ehtiyot qismlar",
  ],
  [
    "Kiyim-kechak",
    "To'y uchun",
    "Moda, turli-tumanliklar",
    "Qo'l soatlari",
    "Aksessuarlar",
    "Sovg'alar",
    "Go'zallik-salomatlik",
  ],
];


const AddProd = () => {
  const { category, type, sub } = useInfoContext();
  const [currentData, setCurrentData] = useState(modalData[0]);
  console.log(category);
  const handleChangeMenu = (index) => {
    setCurrentData(modalData[index]);
  };
  useEffect(() => {
    document.querySelectorAll(".change-menu").forEach((item) => {
      item.onclick = function () {
        document
          .querySelectorAll(".change-menu")
          .forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      };
    });
  }, []);

  const [getId, setGetId] = useState(category[0]?._id);
  const [subId, setSubId] = useState(null);
  const [typeId, setTypeId] = useState(null);
  const findCategory = category.filter((set) => set._id === getId)[0];

  const findType = type.filter((set) => set._id === typeId)[0];
  const findSub = sub.filter((set) => set._id === subId)[0];

  console.log(findCategory);
  return (
    <div>
      <div className="bg">
        <Navbar />

        <div className="container">
          <div className="Prod">
            <form action="">
              <div className="prod_title">
                <h2>E’lon joylashtirish</h2>
              </div>

              <section className="select">
                <h4>Bizga e’loningiz haqida gapirib bering</h4>

                <label htmlFor="">Sarlavhani kiriting*</label>
                <input
                  type="text"
                  placeholder="Masalan Iphone 11 kafolati bilan"
                  name="name"
                />

                <div className="least">
                  <p>Kamida 16 ta belgi kiriting</p>
                  <span>0/70</span>
                </div>

                <label className="rukn">Rukn*</label>

                <button
                  type="button"
                  className="add__btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <img
                    style={{ backgroundColor: findCategory?.color }}
                    src={findCategory?.image?.url}
                    alt="photo"
                  />
                  <div className="choose_btn">
                    <h5> {findType ? findType.name : "Bo‘limni tanlang"}</h5>
                    <p>
                      {findCategory ? findCategory.name : ""}
                      {findSub ? findSub.name : ""}
                    </p>
                  </div>
                  <span>{findType && <Link>O'zgartirish</Link>}</span>
                </button>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Bo‘limni tanlang
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <label className="modal-body">
                        <div className="add_search">
                          <i className="fa-solid fa-magnifying-glass"></i>
                          <input type="text" placeholder="Qidiruv" />
                        </div>
                      </label>
                      <div className="modal-body">
                        <div className="category_modal">
                          <div
                            className="work-category"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrops"
                          >
                            <div className="modal-categorys">
                              {category.length > 0 &&
                                category.map((cat) => {
                                  return (
                                    <div className="modal_texts">
                                      <img
                                        style={{ backgroundColor: cat.color }}
                                        src={cat.image.url}
                                        alt="photo"
                                      />
                                      <p>{cat.name}</p>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="staticBackdrops"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="second-modal modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Bo‘limni tanlang
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="ctg_first_sct">
                          <ul className="modal_list">
                            <div className="modal-categorys">
                              {category.length > 0 &&
                                category.map((cat) => {
                                  return (
                                    <li
                                      className="change-menu "
                                      onClick={() => {
                                        handleChangeMenu(0);
                                        setGetId(cat._id);
                                      }}
                                    >
                                      {cat.name}{" "}
                                      <i className="fa-solid fa-angle-right"></i>
                                    </li>
                                  );
                                })}
                            </div>
                          </ul>
                        </div>
                        <div className="ctg_second_sct">
                          <ul className="modal_list">
                            {sub.map((item) => {
                              if (item.categoryId === getId) {
                                return (
                                  <li
                                    onClick={() => setSubId(item._id)}
                                    className="change-menu"
                                  >
                                    {item.name}{" "}
                                    <i className="fa-solid fa-angle-right"></i>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </div>
                        <div className="ctg_second_sct">
                          <ul className="modal_list">
                            {type.map((item) => {
                              if (item.subId === subId) {
                                return (
                                  <li
                                    type="button"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => setTypeId(item._id)}
                                    className="change-menu"
                                  >
                                    {item.name}{" "}
                                    <i className="fa-solid fa-angle-right"></i>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="img_sec">
                <div className="images-info">
                  <h4>Rasmlar</h4>
                  <p>
                    Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar
                    tartibini ularning ustiga bosib va olib o’tish bilan
                    o’zgartirishingiz mumkin.
                  </p>
                </div>

                <div className="img-boxes">
                  <div className="row">
                    <label htmlFor="inp-1" className="col-4  first_box">
                      <p>Rasmlarni qo'shish</p>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                  </div>
                  <div className="row">
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                    <label htmlFor="inp-1" className="col-4 ">
                      <i className="fa-solid fa-camera"></i>
                      <input hidden id="inp-1" type="file" name="image" />
                    </label>
                  </div>
                </div>
              </section>

              <section className="comment_sec">
                <div className="comment_info">
                  <h4>Tavsif*</h4>
                  <textarea>
                    O'zingizni shu e'lonni k'orayotgan odam o'rniga qo'ying va
                    tavsif yozing
                  </textarea>
                </div>
                <div className="comment_least">
                  <p>Kamida 40 ta belgi kiriting</p>
                  <span>38/9000</span>
                </div>
              </section>

              <section className="avto_exs">
                <div className="avto_body">
                  <span>
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                    </svg>
                    <h5>Avtomatik uzaytirish</h5>
                  </span>
                  <p>E'lon muddati 30 kundan keyin tugaydi</p>
                </div>
              </section>

              <section className="location">
                <div className="location_info">
                  <p>Joylashuv*</p>

                  <input
                    type="text"
                    placeholder="Shahar yoki pochta indeksi !"
                    name="location"
                  />
                </div>
                <span>Joylashuv noto‘g‘ri</span>
              </section>

              <section className="inf_section">
                <h4>Aloqa uchun ma'lumotlar</h4>
                <div className="inf_label"></div>
                <p>Murojaat qiluvchi shaxs*</p>
                <input type="text" placeholder="" name="author" />
                <p>Email-манзил</p>
                <input
                  className="th-l"
                  type="text"
                  placeholder="@gmail.com"
                  name="email"
                />
                <p>Telefon raqami</p>
                <input type="tel" placeholder="" name="phone" />
              </section>

              <section className="last_section">
                <div className="rights">
                  <a>Ko'rib chiqish</a>

                  <button>E’lon joylashtirish</button>
                </div>
              </section>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AddProd;
