import React, { useState } from "react";
import { toast } from "react-toastify";
import { login, register } from "../../api/authRequests";

import "./Auth.scss";
import { useInfoContext } from "../../context/Context";
import Test from "./Test";

const Auth = () => {
  const { setCurrentUser } = useInfoContext();
  const [code, setCode] = useState(false);
  const [isAccount, setIsAccount] = useState(true);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Please Wait ...");

      const formData = new FormData(e.target);

      const res = isAccount ? await login(formData) : await register(formData);
      console.log(res);
      toast.dismiss();
      localStorage.setItem("profile", JSON.stringify(res?.data?.user));
      localStorage.setItem("token", JSON.stringify(res?.data?.token));
      toast.success(res?.data?.message);
      setCurrentUser(res?.data?.user);
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const toggleCheckbox = () => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <div className="signup">
      <div className="circle"></div>
      <div className="signup-page">
        <h2 className="welcome">OLX ga xush kelibsiz!</h2>
        <div className="auth">
          <button className="facebook mb-3">
            <i class="fa-brands fa-facebook"></i>
            <span>Facebook orqali kirish</span>
          </button>
          <button className="facebook apple mb-3">
            <i class="fa-brands fa-apple"></i>
            <span>Apple orqali kirish</span>
          </button>
          <button className="facebook google mb-3">
            <Test />
          </button>
        </div>
        <form onSubmit={handleForm} action="">
          <div className="signing">
            <div className="d-flex justify-content-around align-items-center">
              <div className="line"></div>
              <span className="and">Yoki</span>
              <div className="line"></div>
            </div>
            <div className="d-flex justify-content-around">
              <h5
                style={
                  isAccount
                    ? {
                        cursor: "pointer",
                        borderBottom: "3px solid #002F34",
                        padding: "10px",
                      }
                    : { cursor: "pointer" }
                }
                onClick={() => setIsAccount(true)}
              >
                Kirish
              </h5>
              <h5
                style={
                  !isAccount
                    ? {
                        cursor: "pointer",
                        borderBottom: "3px solid #002F34",
                        padding: "10px",
                      }
                    : { cursor: "pointer" }
                }
                onClick={() => setIsAccount(false)}
              >
                Roy'hatdan otish
              </h5>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Telefon raqami yoki email
                <input id="email" name="email" type="email" required />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="password">
                Parol
                <input
                  name="password"
                  id="password"
                  type={!code ? "password" : "text"}
                  minLength={4}
                  required
                />
                <span disabled onClick={() => setCode(!code)}>
                  {!code ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </label>
            </div>
            {isAccount ? (
              <span style={{ cursor: "pointer" }} className="forgot">
                Parol unutdingizmi
              </span>
            ) : (
              <div>
                <span className="olx">
                  Men <b>xizmatdan foydalanish qoidalarini</b>, shuningdek, OLX
                  ga mening ma'lumotlarimni uzatish va qayta ishlashga rozilik
                  bildiraman. Men voyaga yetganligimni va e'lon joylashtirish
                  uchun javobgarligimni tasdiqlayman.
                </span>
                <div className="check d-flex my-2">
                  <input
                    type="checkbox"
                    checked={checkboxValue}
                    onChange={toggleCheckbox}
                  />
                  <span onClick={toggleCheckbox}>
                    Ha, men OLX dagi yangiliklar va aksiyalar haqida ma'lumot
                    olishni xohlayman.
                  </span>
                </div>
              
              </div>
            )}
            <button className="login">
              {!isAccount ? "Roy'hatdan otish" : "Kirish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
