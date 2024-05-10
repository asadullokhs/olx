import React from 'react'
import "./Message.scss";
import { Link, NavLink } from "react-router-dom";


function Message() {
  return (
    <div>
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
              <NavLink to="/my">E‘lonlar</NavLink>
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
              <NavLink to="/account">Sozlamalar</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">

        <div className='Message'>
          <div className="sell_and_buy">
            <div className="navbar_s_a_b">
              <Link className='link' to="#">
                <div>
                  <i class="l_i fa-regular fa-bookmark"></i>
                  <p>Saqlanganlar</p>
                </div>
              </Link>
              <Link className='link'>
                <div>
                  <i className=" l_i fa-regular fa-trash-can"></i>
                  <p>Quit</p>
                </div>
              </Link>
            </div>
            <div className="s_a_b">
              <button className='btn_buy'>Sotib olaman</button>
              <button className='btn_sell'>Sotaman</button>
            </div>
            <div className='texts'>
              <img src="https://www.olx.uz/app/static/media/conversation.42821e43c.svg" alt="" />
              <h3 className="text">Hozircha suhbatlar yo'q</h3>
              <p className="text">Як тільки ви отримаєте повідомлення, воно з'явиться тут.</p>
              <p className="text">Agar sizda sotadigan narsa yoki xizmatingiz bo'lsa, <br />
                <Link className='elonlar' to="/add-prod">
                  e'lon joylashtiring
                </Link>
              </p>
            </div>
          </div>
          <div className="messages">
            <img src="https://www.olx.uz/app/static/media/conversation.42821e43c.svg" alt="" />
            <p>O'qish uchun muloqotni tanlang</p>
          </div>
        </div>
        <div className='line_m' style={{ border: " 1px solid black", width: "104%", marginLeft: "-40px" }}></div>
      </div>

    </div>

  )
}

export default Message