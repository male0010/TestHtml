import img from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"
import img3 from "../public/image/3.jpg"
import img4 from "../public/image/w2.jpg"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from "react";


// import styles from '@/styles/globals.css'


export default function header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg  menu2">
        <div className="container-fluid menu2"><a href="/">
          <Image src={img4} alt="" width="240" height="70" /></a>

          <div className="navbar-collapse menu2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu2">
              <li className="nav-item dropdown menu2">
                <a className="nav-link  menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                  GAMES
                </a>
              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link  menu2" href="/item" >
                  ITEM
                </a>

              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link  menu2" href="category">
                CATEGORY
                </a>

              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link  menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>

              </li>
            </ul>
            {/* <form className="d-flex menu2">
              <input className="form-control me-2 search menu4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary lead2" type="submit">Search</button>
            </form> */}
          </div>
          


        </div>
      </nav>
      
      

      

      
    </>
  )
}