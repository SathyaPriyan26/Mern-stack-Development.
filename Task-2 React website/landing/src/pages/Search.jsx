import React from 'react'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
import Frame3 from '../assets/Frame3.png'
import Frame4 from '../assets/Frame4.png'
import Frame5 from '../assets/Frame5.png'
import Frame6 from '../assets/Frame6.png'

function Search() {
  return (
    <>
    <div id="search" className='search-row1'>
        <div className='col1'><h1><span className='red1'>Popular</span> trips by EliteTrip</h1></div>
        <div className='col2'><p>Our greatest guides create our programs. Each individual will be able to select a program based on their interests and budget.</p></div>
    </div>
    <div className='images'>
        <div><img src={Frame1} alt="Frame1"/></div>
        <div><img src={Frame2} alt="Frame2"/></div>
        <div><img src={Frame4} alt="Frame4"/></div>
        <div><img src={Frame3} alt="Frame3"/></div>
        <div><img src={Frame5} alt="Frame5"/></div>
        <div><img src={Frame6} alt="Frame6"/></div>
    </div>
    <div className='showmore'>
        <a href="">Show More!</a>
    </div>
    </>
  )
}

export default Search