import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Naviga() {
  return (
    <div className='nav1'>
        <p className='white'>Elite</p>
        <p className='red'>Trip</p>
        
        <div className='side'>
          <div className='item'><a href="#home">Home</a></div>
          <div className='item'><a href="#search">Search</a></div>
          <div className='item'><a href="#Guide">Guide</a></div>
          <div className='item'><a href="#Blog">Blog</a></div>
          <div className='contact'>Contact Us</div>
        </div>
      </div>
  )
}
