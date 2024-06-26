import React from 'react'
import "./Search.scss";

const Search = () => {
    return (

        <div div className="search-box" >
            <div className="container">
                <div className="search">
                    <label htmlFor="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder='Nimani qidiryapsiz ?' />
                    </label>
                    <label htmlFor="" className='map'>
                        <i className="fa-solid fa-location-dot"></i>
                        <input type="text" placeholder="O'zbekiston" />
                    </label>
                    <button>
                        <span>Qidiruv</span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button className='media-btn'>
                        <i className="fa-regular fa-bell"></i>
                    </button>
                </div>
            </div>
        </div>

        // {/*<div className="container">
        //      <div className='Search_Com'  >
        //         <div className='inp_div'><i class="fa-solid fa-magnifying-glass"></i> <input type="text" placeholder='Nimani qidiryapsiz?' className='search' /> </div>
        //         <div className='inp_div location'><i class="fa-solid fa-location-dot"></i> <input type="text" placeholder="O'zbekiston" className='location' /></div>
        //         <button className='Search_btn' style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
        //             <p style={{marginTop:"10px"}}>Qidruv</p>
        //             <i style={{margin:"7px"}} class="fa-solid fa-magnifying-glass"></i>
        //             </button>
        //             <div className='bell'>
        //                 <i class="fa-regular fa-bell"></i>
        //             </div>
        //     </div> 

        // </div>*/}
    )
}

export default Search