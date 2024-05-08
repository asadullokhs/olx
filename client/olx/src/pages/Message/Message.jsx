import React from 'react'
import "./Message.scss";
import { Link } from 'react-router-dom';


function Message() {
  return (
    <div className="container">
      <div className='Message'>
        <div className="sell_and_buy">
          <div className="navbar_s_a_b">
            <Link className='link' to="#">
                <div>
                  <i className=" l_i fa-solid fa-magnifying-glass"></i>
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
        </div>
        <div className="messages">

        </div>
      </div>
    </div>
  )
}

export default Message
