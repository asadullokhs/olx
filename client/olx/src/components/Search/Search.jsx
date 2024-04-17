import React from 'react'
import "./Search.scss";

const Search = () => {
    return (
        <div className="container">
            <div className='Search_Com'  >
                <input type="text" placeholder='Nimani qidiryapsiz?' className='search' />
                <input type="text" placeholder="O'zbekiston" className='location' />
                <button className='Search_btn'> Qidruv <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}

export default Search