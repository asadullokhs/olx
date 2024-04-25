import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Set.scss";
import { updateAll } from "../../api/updRequests";
import { useInfoContext } from "../../context/Context";
import { toast } from "react-toastify";

const Setings = () => {
  const { currentUser, setCurrentUser } = useInfoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData(e.target);
      toast.loading("Please wait...");

      const res = await updateAll(currentUser._id, form, "user");
      toast.dismiss();

      localStorage.setItem("profile", JSON.stringify(res?.data?.newUser));

      setCurrentUser(res?.data?.newUser);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="bg">
      <Navbar />
      <div className="settings">
        <header>
          <div className="container">
            <div className="second_nav">
              <div className="set_texts">
                <h2>Sozlama</h2>
              </div>

              <div className="part_pay">
                <span>
                  Sizning hisobingiz: 0 so'm <br />
                  Reklama e'lonlari uchun: 0 bonus
                </span>

                <button className="pay_btn">Hisobni To'ldirish</button>
              </div>
            </div>

            <div className="third_nav">
              <ul className="clr_center">
                <li className="fleft">E'lonlar</li>
                <li className="fleft">Xabarlar</li>
                <li className="fleft">To'lovlar va OLX hisobi</li>
                <li className="fleft">Olingan ballar</li>
                <li className="fleft">Nomzod profili</li>
                <li className="fleft">Sozlamalar</li>
              </ul>
            </div>
          </div>
        </header>
        <div className="container">
          <section className="middle_sec">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Bog‘lanish uchun ma‘lumotlarni o‘zgartirish
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="accordion-body">
                      <label for="address">Shaharni tanlash</label>
                      <select id="address" name="address">
                        <option value="bektemir">
                          Toshkent, Bektemir tumani
                        </option>
                        <hr />
                        <option value="chilonzor">
                          Toshkent, Chilonzor tumani
                        </option>
                        <hr />

                        <option value="toshkent">
                          Toshkent, Toshkent tumani
                        </option>
                        <hr />

                        <option value="mirobod">
                          Toshkent, Mirobod tumani
                        </option>
                        <hr />

                        <option value="uchtepa">
                          Toshkent, Uchtepa tumani
                        </option>
                        <hr />

                        <option value="yunusobod">
                          Toshkent, Yunusobod tumani
                        </option>
                        <hr />

                        <option value="yashnobod">
                          Toshkent, Yashnobod tumani
                        </option>
                        <hr />

                        <option value="olmazor" selected>
                          Toshkent, Olmazor tumani
                        </option>
                      </select>
                    </div>

                    <div className="set_line"></div>

                    <div className="accordion-body">
                      <label htmlFor="">Aloqa uchun shaxs</label>

                      <input type="text" className="accord-input" />
                    </div>
                    <div className="accordion-body">
                      <label htmlFor="">Telefon raqami</label>

                      <input type="text" className="accord-input" />
                    </div>

                    <button className="d_btn">Saqlash</button>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Parolni o‘zgartirish
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <form>
                    <div className="accordion-body">
                      <label htmlFor="">
                        Паролингиз <code>*</code>
                      </label>

                      <input type="text" className="accord-input" />
                    </div>

                    <div className="accordion-body">
                      <label htmlFor="">
                        Yangi parol <code>*</code>
                      </label>

                      <input type="text" className="accord-input" />
                    </div>

                    <button className="d_btn">Saqlash</button>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Email-manzilni o‘zgartirish
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <form>
                    <div className="accordion-body">
                      <label htmlFor="">
                        Sizning OLX dagi xozirgi parolingiz
                      </label>
                      <input type="text" className="accord-input" />
                    </div>

                    <div className="accordion-body">
                      <label htmlFor="">Yangi e‘lon</label>
                      <input type="text" className="accord-input" />
                    </div>

                    <button className="d_btn">Saqlash</button>
                  </form>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsFour"
                    aria-expanded="false"
                    aria-controls="flush-collapsFour"
                  >
                    Mening rezyumeyim
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <button className="d_btn">Nomzod profiliga oʻtish</button>
                </div>
              </div>
            </div>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Email-manzilni o‘zgartirish
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <hr />

                  <button className="last_btn">Akauntni o‘chirish</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Setings;
