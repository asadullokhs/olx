import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AddProd.scss";
import { useInfoContext } from "../../context/Context";
import { Link } from "react-router-dom";
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
  const { category, type, sub, currentUser, exit } = useInfoContext();
  const [currentData, setCurrentData] = useState(modalData[0]);

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
      console.log(res);

      toast.dismiss();
      toast.success(result?.message);
      e.target.reset();
    } catch (err) {
      toast.dismiss();
      toast.error(err?.response?.data?.message);
      if (err?.response?.data?.message === "jwt expired") {
        exit();
      }
    }
  };

  const [getId, setGetId] = useState(null);
  const [subId, setSubId] = useState(null);
  const [typeId, setTypeId] = useState(null);
  const findCategory = category.filter((set) => set._id === getId)[0];

  const filterCat = category.filter((set) => set._id === getId)[0];
  const findType = type.filter((set) => set._id === typeId)[0];
  const findSub = sub.filter((set) => set._id === subId)[0];

  const [images, setImages] = useState(Array(8).fill(null));

  const handleImageChange = (index, e) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(e.target.files[0]);
    setImages(newImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };
  return (
    <div>
      <div className="bg">
        <Navbar />

        <div className="container">
          <div className="Prod">
            <form action="" onSubmit={handleAdd}>
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
                  maxLength={70}
                  minLength={16}
                  required
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
                  {findCategory?.image && (
                    <img
                      style={{ backgroundColor: findCategory?.color }}
                      src={findCategory?.image?.url}
                      alt="photo"
                    />
                  )}
                  <div className="choose_btn">
                    <div className="chose_sct">
                      <h5> {findType ? findType.name : "Bo‘limni tanlang"} </h5>
                      {/* <i className="fa-solid fa-angle-right"></i> */}
                    </div>
                    <p>
                      {findCategory ? findCategory.name : ""}
                      {findSub ? findSub.name : ""}
                    </p>
                  </div>
                  <div className="reneme">
                    <span>
                      {findType && <Link className="py-2">O'zgartirish</Link>}
                    </span>
                    {/* <div className="hover_div"></div> */}
                  </div>
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

              {filterCat?.name !== "Работа" && (
                <section className="img_sec">
                  <div className="images-info">
                    <h4>Rasmlar</h4>
                    <p>
                      Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar
                      tartibini ularning ustiga bosib va olib o’tish bilan
                      o’zgartirishingiz mumkin.
                    </p>
                  </div>

                  {/* <div className="img-boxes">
                    {images.map((image, index) => (
                      <div key={index} className="row">
                        <label htmlFor={`inp-${index + 1}`}>
                          {image ? (
                            <div className="prev-img">
                              <img
                                src={image}
                                height={100}
                                width={100}
                                style={{ objectFit: "cover" }}
                                alt="photo"
                              />
                              <button onClick={() => handleRemoveImage(index)}>
                                x
                              </button>
                            </div>
                          ) : (
                            <>
                              {index === 0 ? (
                                <p className="help">Rasm qoshish</p>
                              ) : (
                                <i className="fa-solid fa-camera"></i>
                              )}
                              <br />
                              <input
                                hidden
                                onChange={(e) => handleImageChange(index, e)}
                                id={`inp-${index + 1}`}
                                type="file"
                                name="image"
                              />
                            </>
                          )}
                        </label>
                      </div>
                    ))}
                  </div> */}

                  <div className="img-boxes">
                    {images.map((image, index) => (
                      <div key={index}>
                        <div
                        className="inf_img"
                       
                        >
                          {image && (
                            <button
                              style={{
                                border: "none",
                                backgroundColor: "gray",
                                padding: "5px 15px",
                                color: "white",
                              }}
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                            >
                              X
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
                              className={
                                index === 0 ? "block-inp" : "none-input"
                              }
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

              <section class="price">
                <div class="input_info">
                  <div class="buttons">
                    <button>Narx</button>
                    <button>Almashsih</button>
                  </div>
                  <label for="">
                    <p>Narx*</p>
                    <input type="text" name="price" />
                  </label>
                </div>
              </section>

              {filterCat?.name === "Car" && (
                <section className="input-box">
                  <h2>Qo'shimcha ma'lumot</h2>
                  <div className="input_info private">
                    <p>Xususiy yoki biznes*</p>
                    <label htmlFor="">
                      <button type="button">Jismoniy shaxs</button>
                      <button type="button">Biznes</button>
                    </label>
                  </div>
                  <div className="input_info">
                    <p>Kuzov turi*</p>
                    <select required>
                      <option selected disabled>
                        Tanlash
                      </option>
                      <option value="Kabriolet">Kabriolet</option>
                      <option value="Universal">Universal</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Boshqa">Boshqa</option>
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
                    <p>Bosgan yo‘li</p>
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
                      <option value="Ko'k">Ko'k</option>
                      <option value="Qizil">Qizil</option>
                      <option value="Seriy">Seriy</option>
                      <option value="Hamellion">Hamellion</option>
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
                      <option value="Elektr">Elektr</option>
                      <option value="Boshqa">Boshqa</option>
                    </select>
                  </div>
                  <div className="input_info">
                    <p>Mashina holati*</p>
                    <select name="state" required>
                      <option selected disabled>
                        Tanlash
                      </option>
                      <option value="Yaxshi">Yaxshi</option>
                      <option value="Orta">Orta</option>
                      <option value="Ta'mir talab">Ta'mir talab </option>
                    </select>
                  </div>
                  <div className="input_info">
                    <p>Mulkdorlar soni</p>
                    <select name="number_of_hosts" required>
                      <option selected disabled>
                        Tanlash
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </section>
              )}
              {filterCat?.name === "Fashion" && (
                <section className="input-box">
                  <h2>ДQoshimcha malumot</h2>
                  <div className="input_info private">
                    <p>Jismoniy shaxs yoki Biznes</p>
                    <label htmlFor="">
                      <button type="button">Jismoniy shaxsiy</button>
                      <button type="button">Biznes</button>
                    </label>
                  </div>
                  <div className="input_info private">
                    <p>Holati*</p>
                    <select name="state" required>
                      <option selected disabled>
                        Tanlash
                      </option>
                      <option value="Б/у">B/u</option>
                      <option value="Новый">Yangi</option>
                    </select>
                  </div>
                  <div className="input_info">
                    <p>Razmer</p>
                    <input type="text" name="size" />
                  </div>
                </section>
              )}
              {filterCat?.name === "Work" && (
                <section className="input-box">
                  <div className="input_info" style={{ marginBottom: "40px" }}>
                    <label htmlFor="">
                      <p>Oylik*</p>
                      <input type="text" name="salary" required />
                    </label>
                  </div>
                  <h2>Qoshimcha malumot</h2>
                  <div className="input_info private">
                    <p>Ish turi*</p>
                    <select name="kinOfWork" required>
                      <option selected disabled>
                        Tanlov
                      </option>
                      <option value="Постоянная работа">Doimiy Bandlik</option>
                      <option value="Временная работа">
                        Vaqtinchalik bandlik
                      </option>
                    </select>
                  </div>
                  <div className="input_info private">
                    <p>Bandlik tur*</p>
                    <select name="employmentType" required>
                      <option selected disabled>
                        Tanlov
                      </option>
                      <option value="Работа на полную ставку">
                        Toliq stavkada bandlik
                      </option>
                      <option value="Временная работа">
                        Toliq bolmagan bandlik
                      </option>
                    </select>
                  </div>
                  <div className="input_info">
                    <p>Qoshmcha Opi...</p>
                  </div>
                </section>
              )}

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
      </div>
    </div>
  );
};

export default AddProd;
