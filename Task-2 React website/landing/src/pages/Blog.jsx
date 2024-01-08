import React from 'react'
import blog1 from '../assets/Blog1.png'
function Blog() {
  return (
    <>
    <div id="Blog" className='blog-top'>
    <h1>
        Customer <span className='black'>Says!!</span>
    </h1> 
    </div>
    <div className='blog-details'>
        <div className='blog-img'>
        <img src={blog1} alt='blog'/>
        </div>
        <div className='blog-write'>
        Elitetrip went above and beyond my expectations with their excellent service and attention to detail. My trip was made unforgettable by their knowledge and specific recommendations. Strongly recommended!
        <h2>-Sathya Priyan S</h2>
        <p>Influencer Traveler</p>
        </div>
    </div>
    </>
  )
}

export default Blog