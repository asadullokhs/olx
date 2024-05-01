import React from 'react'
import "./Search.scss";

const Search = () => {
    return (
        <div className="container">
            <div className='Search_Com'  >
                <div className='inp_div'><i class="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder='Nimani qidiryapsiz?' className='search' /> </div>
                <div className='inp_div'><i class="fa-solid fa-location-dot"></i> <input type="text" placeholder="O'zbekiston" className='location' /></div>
                <button className='Search_btn'> Qidruv <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}

export default Search