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
                                    <NavLink style={{textDecoration: 'none'}} to='/'><li>Elonlar {filtered.length}</li></NavLink>
                                    <NavLink style={{textDecoration: 'none'}} to='/'><li>Qidiruv 0</li></NavLink>
                                    <li className='exit' onClick={exit}><code>Chiqish</code></li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink style={{textDecoration: 'none'}} to="/add-prod" className="nav-link">
                                <button className='header-btn'>
                                    E'lon berish
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
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
                    <NavLink style={{textDecoration: 'none'}} to="/announce" className="media-link">
                    <i className="fa-solid fa-user-plus"></i>
                        Elonlar
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