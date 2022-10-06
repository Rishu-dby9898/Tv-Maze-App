import React from 'react'
import Search from './Search';
import "./TvMazze.css";


function Navbar() {
  return (
    <div className='nav'>
        <div className='logos'>
            <img src='https://static.tvmaze.com/images/favico/apple-touch-icon-120x120.png' className='logo' alt='logo' />
            <img src='https://static.tvmaze.com/images/tvm-header-logo.png' className='logo1' alt='logo1' />

            
        </div>

        <div className='search'>
             <Search />
        </div>
    </div>
  )
}

export default Navbar