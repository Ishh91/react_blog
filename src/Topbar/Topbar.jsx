import React from 'react'
import "./Topbar.css";
function Topbar() {
    return (
        <div className='top'>
            <div className='topleft'>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
            <div className='topcenter'>
                <ul className='toplist'>
                    <li className='toplistItem'> Home </li>
                    <li className='toplistItem'> About </li>
                    <li className='toplistItem'> Contact</li>
                    <li className='toplistItem'> Write </li>
                    <li className='toplistItem'> Logout</li>

                </ul>

            </div>
            <div className='topright'>
                <img 
                className='topImg'
                    src='https://unsplash.com/photos/lsdA8QpWN_A'
                    alt=''
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}

export default Topbar
