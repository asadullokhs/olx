import React, { useEffect, useState } from "react";
import "./AddProd.scss";
import { useInfoContext } from "../../context/Context";
import { toast } from "react-toastify";
import { addAll } from "../../api/addRequests";
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
  const { category, type, sub, currentUser, toggleReset, exit } =
    useInfoContext();
  const [currentData, setCurrentData] = useState(modalData[0]);
  const [getId, setGetId] = useState(null);
  const [subId, setSubId] = useState(null);
  const [typeId, setTypeId] = useState(null);
  const [modal, setModal] = useState(false);
  const [list, setList] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState(Array(8).fill(null));

  const toggle = () => setModal(!modal);
  const toggleShow = () => setShowModal(!showModal);

  const handleChangeMenu = (index) => {
    setCurrentData(modalData[index]);
  };
  useEffect(() => {
    document.querySelectorAll(".change-menu").forEach((item) => {
      item.onClick = function () {
        document
          .querySelectorAll(".change-menu")
          .forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      };
    });
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      formData.append("authorId", currentUser._id);
      formData.append("email", currentUser.email);

      let entityType = "";
      if (filterCat?.name === "Car") entityType = "car";
      else if (filterCat?.name === "Fashion") entityType = "fashion";
      else if (filterCat?.name === "Work") entityType = "work";

      if (typeId) formData.append("typeId", typeId);
      if (subId) formData.append("subId", subId);
      if (getId) formData.append("categoryId", getId);

      const res = await addAll(formData, entityType);
      const result = res?.data;

      toast.dismiss();

      toast.success(result?.message);
      toggleReset();
      setImages(Array(8).fill(null));
      setGetId(null);
      setSubId(null);
      setTypeId(null);
      toggleReset()
      e.target.reset();
    } catch (err) {
      toast.dismiss();
      toast.error(err?.response?.data?.message);
      if (err?.response?.data?.message === "jwt expired") {
        exit();
      }
    }
  };

  const filterId = type.filter((res) => res._id === typeId)[0];
  const filterCat = category.filter((res) => res._id === getId)[0];
  const filterSub = sub.filter((res) => res._id === subId)[0];

  const handleImageChange = (index, e) => {
    if (e.target) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(e.target.files[0]);
      setImages(newImages);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="Prod">
          <form onSubmit={handleAdd} action="">
            <div className="prod_title">
              <h2>E’lon joylashtirish</h2>
            </div>

            <section className="select">
              <h4>Bizga e’loningiz haqida gapirib bering</h4>

              <label htmlFor="">Sarlavhani kiriting*</label>
              <input
                type="text"
                placeholder="Masalan, Iphone 11 kafolati bilan"
                name="name"
                maxLength={70}
                minLength={16}
                required
              />

              <div className="limit">
                <p>Kamida 16 ta belgi kiriting</p>
                <p>0/70</p>
              </div>

              <label className="rukn">Rukn*</label>

              <button
                type="button"
                className="add__btn"
                onClick={() => {
                  toggle();
                  subId && setTypeId(null);
                  setSubId(null);
                }}
              >
                <div
                  className="choose_btn"
                  style={{ display: "flex", gap: "20px" }}
                >
                  {filterCat && (
                    <img
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: filterCat.color,
                        marginLeft: "10px",
                        marginTop: "19px",
                      }}
                      src={filterCat.image.url}
                      alt="photo"
                    />
                  )}
                  <div
                    style={{
                      textAlign: "start",
                      marginTop: "15px",
                      marginBottom: "0",
                    }}
                  >
                    {!typeId ? (
                      <p> Bo‘limni tanlang</p>
                    ) : (
                      <b>{filterId.name}</b>
                    )}
                    {filterCat && (
                      <p>
                        {filterCat?.name} / {filterSub?.name}
                      </p>
                    )}
                  </div>
                </div>
                {subId && (
                  <p className="help">
                    <div style={{ marginTop: "15px" }}>
                      ozgartirish
                      <span></span>
                    </div>
                  </p>
                )}
              </button>

              {modal && (
                <div className="modal-cat">
                  <div className="modal-content-cat">
                    <div className="modal-body-cat">
                      <h2
                        className="modal-title-cat"
                        style={{ fontSize: "25px" }}
                      >
                        Bo‘limni tanlang
                      </h2>
                      <div className="btn-close-cat">
                        <span
                          onClick={() => {
                            toggle();
                            setList(0);
                            setGetId(null);
                            setSubId(null);
                            setTypeId(null);
                          }}
                        >
                          X
                        </span>
                      </div>
                      <div className="add_search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Поиск..." />
                      </div>
                      <div className="modal-categorys">
                        {category.length > 0 &&
                          category.map((cat) => {
                            return (
                              <div
                                key={cat._id}
                                className="category"
                                onClick={() => {
                                  toggleShow();
                                  toggle();
                                  setGetId(cat._id);
                                }}
                              >
                                <img
                                  style={{ backgroundColor: cat.color }}
                                  src={cat.image.url}
                                  alt="photo"
                                />
                                <p className="none">{cat.name}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showModal && (
                <div className="modal-cat">
                  <div className="modal-content-cat">
                    <div className="modal-body-cat">
                      <div className="btn-close-cat">
                        <span
                          onClick={() => {
                            toggleShow();
                            setList(0);
                            setGetId(null);
                            setSubId(null);
                            setTypeId(null);
                          }}
                        >
                          X
                        </span>
                      </div>
                      <h1 className="modal-title-cat" id="staticBackdropLabel">
                        Bo‘limni tanlang
                      </h1>
                      <div className="ctg-select">
                        <ul
                          className={
                            list === 0 ? "modal_list" : "modal_list none-list"
                          }
                        >
                          {category.length > 0 &&
                            category.map((cat) => {
                              return (
                                <li
                                  style={
                                    cat._id === getId
                                      ? {
                                          backgroundColor:
                                            "rgba(64, 99, 103, 0.200)",
                                        }
                                      : {}
                                  }
                                  key={cat._id}
                                  className="change-menu"
                                  onClick={() => {
                                    handleChangeMenu(0);
                                    setGetId(cat._id);
                                    setSubId(null);
                                    setList(1);
                                  }}
                                >
                                  {cat.name}{" "}
                                  <i className="fa-solid fa-angle-right"></i>
                                </li>
                              );
                            })}
                        </ul>
                        <ul
                          className={
                            list === 1 ? "modal_list" : "modal_list none-list"
                          }
                        >
                          {sub.length > 0 &&
                            sub.map((item) => {
                              if (item.categoryId === getId) {
                                return (
                                  <li
                                    style={
                                      item._id === subId
                                        ? {
                                            backgroundColor:
                                              "rgba(64, 99, 103, 0.200)",
                                          }
                                        : {}
                                    }
                                    key={item._id}
                                    className="change-menu"
                                    onClick={() => {
                                      setSubId(item?._id);
                                      setList(2);
                                      !type.find(
                                        (res) => res.subId === item._id
                                      ) && toggleShow();
                                      setList(2);
                                    }}
                                  >
                                    {item.name}{" "}
                                    <i className="fa-solid fa-angle-right"></i>
                                  </li>
                                );
                              }
                            })}
                        </ul>
                        <ul
                          className={
                            list === 2 ? "modal_list" : "modal_list none-list"
                          }
                        >
                          {type.map((item) => {
                            if (item.subId === subId) {
                              return (
                                <li
                                  key={item._id}
                                  onClick={() => {
                                    setTypeId(item._id);
                                    toggleShow();
                                    setList(0);
                                  }}
                                  className="change-menu"
                                >
                                  {item.name}{" "}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {filterCat?.name !== "Work" && (
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
                  {images.map((image, index) => (
                    <div key={index}>
                      <div
                        style={{
                          height: "20px",
                          textAlign: "end",
                          padding: "0 10px",
                        }}
                      >
                        {image && (
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "red",
                              padding: "5px 15px",
                              color: "white",
                            }}
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                          >
                            x
                          </button>
                        )}
                      </div>
                      <label htmlFor={`inp-${index + 1}`}>
                        <div className="input-add">
                          {image ? (
                            <div className="prev-img">
                              <img
                                src={image}
                                height={100}
                                width={100}
                                style={{ objectFit: "cover" }}
                                alt="photo"
                              />
                            </div>
                          ) : (
                            <div>
                              {index === 0 ? (
                                <p className="help">Rasm qoshish</p>
                              ) : (
                                <i className="fa-solid fa-camera"></i>
                              )}
                            </div>
                          )}
                          <br />
                          <input
                            className={index === 0 ? "block-inp" : "none-input"}
                            hidden={index !== 0}
                            required={index === 0}
                            onChange={(e) => handleImageChange(index, e)}
                            id={`inp-${index + 1}`}
                            type="file"
                            name="image"
                          />
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="comment_sec">
              <div className="comment_info">
                <h4>Tavsif*</h4>
                <textarea
                  required
                  maxLength={9000}
                  minLength={40}
                  name="content"
                  placeholder="O’zingizni shu e'lonni ko’rayotgan odam o’rniga qo’ying va tavsif yozing"
                ></textarea>
              </div>
              {filterCat?.name !== "Work" && (
                <div className="limit">
                  <p>Kamida 40 ta belgi kiriting</p>
                  <p>0/9000</p>
                </div>
              )}
              {filterCat?.name === "Work" && (
                <div className="input_info">
                  <p>Rezyume berish formasiga havola</p>
                  <input style={{ width: "70%" }} type="text" name="link" />
                </div>
              )}
            </section>
            {filterCat?.name !== "Work" && (
              <section className="price">
                <div className="input_info">
                  <div className="buttons">
                    <button>Narx</button>
                    {filterCat?.name === "Fashion" && <button>Bepul</button>}
                    <button>Ayirboshlash</button>
                  </div>
                  <label htmlFor="">
                    <p>Narx*</p>
                    <input
                      style={{ width: "265px" }}
                      type="text"
                      name="price"
                      required
                    />
                  </label>
                </div>
              </section>
            )}
            {filterCat?.name === "Car" && (
              <section className="input-box">
                <h2>Qo'shimcha ma'lumot</h2>
                <div className="input_info private">
                  <p>Xususiy yoki biznes*</p>
                  <label htmlFor="">
                    <button type="button">Jismoniy shaxs </button>
                    <button type="button">Biznes</button>
                  </label>
                </div>
                <div className="input_info">
                  <p>Kuzov turi*</p>
                  <select required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Кабриолет">Kabriolet</option>
                    <option value="Универсал">Sedan</option>
                    <option value="Седан">off Road</option>
                    <option value="Другая">Boshqa</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Ishlab chiqarilgan yili*</p>
                  <input
                    type="text"
                    placeholder="Yilini kiriting"
                    name="year"
                    required
                  />
                </div>
                <div className="input_info">
                  <p>Probeg</p>
                  <input type="text" placeholder="Yurgan probeg" name="run" />
                </div>
                <div className="input_info">
                  <p>Uzatmalar qutisi*</p>
                  <select name="transmission" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Mexanika">Mexanika</option>
                    <option value="Avtomat">Avtomat</option>
                    <option value="Boshqa">Boshqa</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Rang*</p>
                  <select name="color" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Oq">Oq</option>
                    <option value="Qora">Qora</option>
                    <option value="Seriy">Seriy</option>
                    <option value="Qizil">Qizil</option>
                    <option value="Kok">Kok</option>
                    <option value="Sariq">Sariq</option>
                    <option value="Yashil">Yashil</option>
                    <option value="Xamelion">Xamelion</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Dvigatel hajmi*</p>
                  <input type="text" placeholder="CM3" name="capacity" />
                </div>
                <div className="input_info">
                  <p>Yoqilg‘i turi*</p>
                  <select name="type_of_fuel" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Benzin">Benzin</option>
                    <option value="Dizel">Dizel</option>
                    <option value="Gibrid">Gibrid</option>
                    <option value="Gaz/Benzin">Gaz/Benzin</option>
                    <option value="Elektro">Elektro</option>
                    <option value="Boshqa">Boshqa</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Mashina holati*</p>
                  <select name="state" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Yangi">Yangi</option>
                    <option value="Yaxshi">Yaxshi</option>
                    <option value="Orta">Orta</option>
                    <option value="Ta'mir talab">Ta'mir talab</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Mulkdorlar soni*</p>
                  <select name="number_of_hosts" required>
                    <option selected disabled>
                      Выбрать
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Qo‘shimcha optsiyalar</p>
                </div>
              </section>
            )}
            {filterCat?.name === "Fashion" && (
              <section className="input-box">
                <h2>Qo'shimcha ma'lumot</h2>
                <div className="input_info private">
                  <p>Xususiy yoki biznes*</p>
                  <label htmlFor="">
                    <button type="button">Jismoniy shaxs</button>
                    <button type="button">Biznes</button>
                  </label>
                </div>
                <div className="input_info private">
                  <p>Holati*</p>
                  <select name="state" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="B/u">B/u</option>
                    <option value="Yangi">Yangi</option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Olchami</p>
                  <input type="text" name="size" />
                </div>
                <div className="input_info">
                  <p>Qo'shimcha ma'lumot</p>
                </div>
              </section>
            )}
            {filterCat?.name === "Work" && (
              <section className="input-box">
                <div className="input_info" style={{ marginBottom: "40px" }}>
                  <label htmlFor="">
                    <p>Tolov*</p>
                    <input
                      style={{ width: "370px" }}
                      type="text"
                      name="salary"
                      required
                    />
                  </label>
                </div>
                <h2>Qo'shimcha ma'lumot</h2>
                <div className="input_info private">
                  <p>Ish turi*</p>
                  <select name="kinOfWork" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Постоянная Work">Doimiy bandlik</option>
                    <option value="Временная Work">Vaqtinchalik ish</option>
                  </select>
                </div>
                <div className="input_info private">
                  <p>Bandlik turi*</p>
                  <select name="employmentType" required>
                    <option selected disabled>
                      Tanlash
                    </option>
                    <option value="Work на полную ставку">
                      To‘liq stavkada bandlik
                    </option>
                    <option value="Временная Work">
                      To‘liq bo‘lmagan bandlik
                    </option>
                  </select>
                </div>
                <div className="input_info">
                  <p>Qo'shimcha ma'lumot</p>
                </div>
              </section>
            )}
            <section>
              <div className="input_info">
                <p>Joylashuv*</p>
                <input
                  type="text"
                  placeholder="Shahar yoki pochta indeksi"
                  name="location"
                  required
                />
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
            <section className="inf_section">
              <h2>Aloqa uchun ma'lumotlar</h2>
              <div className="inf_label"></div>
              <p>Murojaat qiluvchi shaxs*</p>
              <input
                type="text"
                placeholder=""
                defaultValue={currentUser?.firstname}
                name="author"
                required
              />
              <p>Email-manzil</p>
              <input
                className="th-l"
                disabled={true}
                defaultValue={currentUser?.email}
                type="email"
                name="email"
                placeholder="@gmail.com"
              />
              <p>Telefon raqami</p>
              <input type="tel" placeholder="" name="phone" />
            </section>
            <section className="last_section">
              <div className="rights">
                <p className="help">
                  <div>
                    Korib chiqish
                    <span></span>
                  </div>
                </p>
                <a></a>
                <button>E’lon joylashtirish</button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProd;
