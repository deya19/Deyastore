import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import "./navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = ({storesRef,aboutRef,contactRef}) => {
  

  const products = useSelector((state) => state.cart.products);

  const [open,setOpen] = useState(false);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className='navbar'>
     <div className="wrapper">
      <div className="left">
       <div className="item">
        <img  loading="lazy" style={{width:"40px",height:"25px",objectFit:"cover"}} src="/img/Jordan.png" alt="" />
        <KeyboardArrowDownIcon/>
       </div>
       <div className="item">
        <span>JOD</span>
        <KeyboardArrowDownIcon/>
       </div>
       <div className="item">
        <Link className='link' to="/products/1" >Women</Link>
       </div>
       <div className="item">
        <Link className='link' to="/products/2">Men</Link>
       </div>
       <div className="item">
        <Link className='link' to="/products/3">Girls</Link>
       </div>
       <div className="item">
        <Link className='link' to="/products/5">Boys</Link>
       </div>
      </div>
      <div className="center">
        <Link className='link' to="/">DEYASTORE</Link>
      </div>
      <div className="right">
      <div className="item">
        <Link className='link' to="/">Homepage</Link>
      </div>
      <div className="item">
        <Link className='link' onClick={() => handleScroll(aboutRef.current)}>About</Link>
      </div>
      <div className="item">
        <Link className='link' onClick={() => handleScroll(contactRef.current)}>Contact</Link>
      </div>
      <div className="item">
        <Link className='link' to="/">Stores</Link>
      </div>
      <div className="icons">
        <SearchIcon/>
        <PersonOutlineOutlinedIcon/>
        <FavoriteBorderOutlinedIcon/>
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
          <ShoppingCartOutlinedIcon/>
          <span>{products.length}</span>
        </div>
      </div>
      </div>
     </div>
     {open && <Cart/>}
    </div>
  )
}

export default Navbar