import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.scss'
import { useInfoContext } from '../../context/Context'

const Navbar = () => {
    const {exit, currentUser, cards, works} = useInfoContext()
    const path = useLocation().pathname
    const userArr = [...cards, ...works]
    
    const [filtered, setFiltered] = useState([])
    useEffect(() => {
        const filteredCards = userArr.filter(obj1 =>
            currentUser?.likes?.some(obj2 => obj2 === obj1._id)
            );
        setFiltered(filteredCards)
    }, [cards, currentUser]);

  return (
<<<<<<< HEAD
    <header className={path === '/chat' ? 'header-none' : {}}>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo_site"  style={{width:"100px"}}/>
                    </Link>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none'}} to="/message" className="nav-link">
                                <i className="fa-regular fa-comment"></i>
                                Xabarlar
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none'}} to="/" className="nav-link">
                                O'z
                                <span>|  Рус</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none'}} to="/" className="nav-link">
                                <i className="fa-regular fa-heart"></i>
                            </NavLink>
                        </li>
                        <li className={currentUser ? "nav-item profile" : "nav-item"}>
                            <NavLink style={{textDecoration: 'none'}} to='/settings' className="nav-link">
                                <i className="fa-regular fa-user"></i>
                                Hisobingiz
                                <i className="fa-solid fa-chevron-down"></i>
                            </NavLink>
                            <div className="hover-nav">
                            <div className="profile-box none">  
                                <img src={currentUser?.profilePicture ? currentUser.profilePicture.url : '/images/logo.png'} alt="" />
                                <div className="box-info">
                                    <h3>{currentUser?.name ? currentUser.name : 'yangi foydalanuvchi'}</h3>
                                    <p>ID: {currentUser?._id}</p>
                                </div>
                            </div>
                            <div className="links">
                                <b>Hisobingiz</b>
                                <ul>
                                <NavLink style={{textDecoration: 'none'}} to='/announce'><li>E'lonlar </li></NavLink>
                                <NavLink style={{textDecoration: 'none'}} to='/message'><li>Xabarlar</li></NavLink>
                                <NavLink style={{textDecoration: 'none'}} to='/'><li>Tolovlar va OLX hisobi</li></NavLink>
                                <NavLink style={{textDecoration: 'none'}} to='/'><li>Ish qidirish</li></NavLink>
                                <NavLink style={{textDecoration: 'none'}} to='/settings'><li>Sozlamalar</li></NavLink>
                                </ul> 
                            </div>
                            <div className="links">
                                <b>Избранные:</b>
                                <ul>
                                    <NavLink style={{textDecoration: 'none'}} to='/like'><li>Elonlar {filtered.length}</li></NavLink>
                                    <NavLink style={{textDecoration: 'none'}} to='/'><li>Qidiruv 0</li></NavLink>
                                    <li className='exit' onClick={exit}><code>Chiqish</code></li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none'}} to="/add" className="nav-link">
                                <button className='header-btn'>
                                    E'lon berish
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
=======
    <div className={`${isVisible ? "" : "hidden"} navbar scrollableDiv `}>
      <div className="container navbar_media">
        <div className="flex">
          <div className="logo">
            <Link to="/">
              <img src="data:image/png;base64,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" alt="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link className="link" to="/message">
                <i className="fa-regular fa-comment"></i>
                Xabarlar
              </Link>
            </li>
            <li>O'z | Ру</li>
            <li to="#">
              <i className="fa-regular fa-heart"></i>
            </li>
            <li to="#">
              <i className="fa-regular fa-user"></i>
              Hisobingiz
            </li>
            <li>
              <Link className="link" to={'/add-prod'}>
                <button>E'lon berish</button>
              </Link>
            </li>
          </ul>
>>>>>>> 58bf73008e0b09e7091a98d9c4d406dc810bffb2
        </div>
        <div className="media-navbar">
            <ul className="media-list">
                <li className="media-item">
                    <NavLink style={{textDecoration: 'none'}} to="/" className="media-link">
                        <i className="fa-solid fa-house-chimney"></i>
                       Bosh sahifa
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink style={{textDecoration: 'none'}} to="/" className="media-link">
                        <i className="fa-solid fa-heart"></i>
                        Saqlangan
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink style={{textDecoration: 'none'}} to="/add-prod" className="media-link">
                        <i className="fa-solid fa-circle-plus"></i>
                       Yaratish
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink style={{textDecoration: 'none'}} to="/message" className="media-link">
                        <i className="fa-solid fa-comment"></i>
                       Habarlar
                    </NavLink>
                </li>
                <li className="media-item">
                    <NavLink style={{textDecoration: 'none'}} to="/settings" className="media-link">
                        <i className="fa-solid fa-user"></i>
                        Profil
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar