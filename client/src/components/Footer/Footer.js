import React from 'react'
import "./footer.scss"

const Footer = ({aboutRef,contactRef}) => {
  return (
    <div className='footer' ref={aboutRef}>
      <div className="top" ref={contactRef}>
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookie</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsa praesentium amet obcaecati? Aperiam nisi eligendi, expedita quia id sed iste, deleniti molestiae voluptates officia 
            Iure voluptates laboriosam sed deserunt consectetur.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias omnis velit nulla, temporibus magni cumque, soluta sunt, nobis error esse explicabo voluptate nemo </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Deyastore</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment (1).png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Footer