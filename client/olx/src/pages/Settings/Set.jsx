
import "./Set.scss";

import { deleteUser } from "../../api/delRequests";
import { updateAll } from "../../api/updRequests";
import { useInfoContext } from "../../context/Context";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Setings = () => {
  const { currentUser, setCurrentUser, exit , toggleReset} = useInfoContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData(e.target);
      toast.loading("Please wait...");

      const res = await updateAll(currentUser?._id, form, "user");
      toast.dismiss();

      localStorage.setItem("profile", JSON.stringify(res?.data?.newUser));

      console.log(res.data);
      setCurrentUser(res?.data?.newUser);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const deleteAcc = async () => {
        const confirmAcc = window.confirm('Ochirishni tasdiqlash!!!')
        if(confirmAcc){
            try {
                toast.loading('Please wiat...')
                const res = await deleteUser(currentUser?._id)
                console.log(res);
                toast.dismiss()
                toast.success(res?.data?.message)
                toggleReset()
                exit()
            } catch (error) {
                toast.dismiss()
                toast.error(error?.response?.data?.message)
                if(error.response.data.message === 'jwt expired'){
                    exit()
                }
            }
        }
    }

  return (
    <div className="bg">
      <div className="media_texts">
        <h1>Sozlamalar</h1>
        <div className="media-icon" onClick={exit}><span>Chiqish</span> <i className="fa-solid fa-right-from-bracket"></i></div>
      </div>
   
      <div className="settings">
        <div className="header">
          <div className="container">
            <div className="second_nav">
              <div className="set_texts">
                <h2>Sozlamalar</h2>
              </div>

              <div className="part_pay">
                <span>
                  Sizning hisobingiz: 0 so'm <br />
                  Reklama e'lonlari uchun: 0 bonus
                </span>
                <i className="fa-solid fa-circle-info"></i>

                <button className="pay_btn">Hisobni To'ldirish</button>
                <button className="buyBtn">Paketni sotib oling</button>
              </div>
            </div>

            <div className="third_nav">
              <ul className="clr_center">
                <Link to="/announce" className="fleft">
                  E'lonlar
                </Link>
                <li className="fleft">Xabarlar</li>
                <li className="fleft">To'lovlar va OLX hisobi</li>
                <li className="fleft">Olingan ballar</li>
                <li className="fleft">Nomzod profili</li>
                <li className="fleft">Sozlamalar</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container nd-con">
          <section className="middle_sec">



            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Profilni tahrirlash
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushExample"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="accordion-body">
                      <label htmlFor="address">
                        Sizning OLX dagi ismingiz
                        <input
                          type="text"
                          name="name"
                          className="accord-input"
                          placeholder="muhammadbilol1011"
                        />
                      </label>
                    </div>
                    <div className="accordion-body">
                      <label htmlFor="address">
                        Telefon raqami
                        <input
                          type="text"
                          name="phone"
                          className="accord-input"
                        />
                      </label>
                    </div>
                    <div className="accordion-body">
                        Joylashuv
                      <label htmlFor="address" className="location-input">
                          <i className="fa-solid fa-location-dot"></i>
                          <input
                            type="text"
                            name="address"
                            className="accord-input"
                            placeholder="Toshkent, Shayxontoxur tumani"
                          />
                      </label>
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
                      <label htmlFor="address">
                        Shaharni tanlash
                        <input
                          type="text"
                          name="address"
                          className="accord-input"
                        />
                      </label>
                    </div>

                    <div className="set_line"></div>

                    <div className="accordion-body">
                      <label htm htmlFor="">
                        Aloqa uchun shaxs
                        <input
                          type="text"
                          name="user"
                          className="accord-input"
                        />
                      </label>
                    </div>
                    <div className="accordion-body">
                      <label htm htmlFor="">Telefon raqami

                      <input
                        type="text"
                        name="phone"
                        className="accord-input"
                      /></label>
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
                  <form onSubmit={handleSubmit}> 
                    <div className="accordion-body">
                      <label htm htmlFor="">
                        <div className="red-star">
                        Parolingiz <sup>*</sup>
                        </div>
                      

                      <input type="text" className="accord-input" /></label>
                    </div>

                    <div className="accordion-body">
                      <label htm htmlFor="">
                       <div className="red-star">
                       Yangi parol <sup>*</sup>
                       </div>
                     

                      <input
                        type="text"
                        name="password"
                        className="accord-input"
                      /> </label>
                    </div>

                    <button className="d_btn" >Saqlash</button>
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
                  <form onSubmit={handleSubmit}> 
                    <div className="accordion-body">
                      <label htm htmlFor="">
                        Sizning OLX dagi xozirgi parolingiz
                      
                      <input type="text" className="accord-input" /></label>
                    </div>

                    <div className="accordion-body">
                      <label htm htmlFor="">Yangi Email
                      <input
                        type="text"
                        name="email"
                        className="accord-input"
                      /></label>
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
                    Akauntni o‘chirish
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <hr />

                  <button  className="last_btn" onClick={deleteAcc}>Akauntni o‘chirish</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Setings;