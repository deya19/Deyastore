import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./categories.scss"

const Categories = ({storesRef}) => {

 
  return (
    <div className='categories' ref={storesRef}>
      <div className="col">
        <div className="row">
          <img src="/img/pexels-photo-2036646 (1).jpeg" loading="lazy" alt="" />
          <button>
            <Link className='link' to={`/products/1`}>Women</Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/pexels-photo-1192609 (1).jpeg" loading="lazy" alt="" />
          <button>
            <Link className='link' to={`/products/2`}>Men</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/img/pexels-photo-11479012.jpeg" loading="lazy" alt="" />
          <button>
            <Link className='link' to={`/products/3`}>Girls</Link>
          </button>
        </div>
      </div>
      <div className=" col col-l">
        <div
         className="row">
          <div className="col">
            <div className="row">
              <img src="/img/pexels-photo-713959.jpeg" loading="lazy" alt="" />
              <button>
            <Link className='link' to={`/products/4`}>Babies</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/pexels-photo-7100320.jpeg" loading="lazy" alt="" />
              <button>
            <Link className='link' to={`/products/5`}>Boys</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="/img/pexels-photo-1652340.jpeg" loading="lazy" alt="" />
          <button>
            <Link className='link' to={`/products/6`}>Elderly</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories