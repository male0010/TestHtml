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

          <div className="collapse navbar-collapse menu2" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu2">
              <li className="nav-item dropdown menu2">
                <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  GAMES
                </a>
              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link dropdown-toggle menu2" href="/item#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ITEM
                </a>

              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ESPORTS
                </a>

              </li>
              <li className="nav-item dropdown menu2">
                <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>

              </li>
            </ul>
            <form className="d-flex menu2">
              <input className="form-control me-2 search menu4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary lead2" type="submit">Search</button>
            </form>
          </div>
          


        </div>
      </nav>
      
      

      

<<<<<<< HEAD
          {/* <!-- Brand --> */}
          <a class="navbar-brand" href="#">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/07/Modern-Warfare-Emblem.png"
              height="60"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* <!-- Search form --> */}
          <form class="d-none d-md-flex input-group w-auto my-auto">
            <input
              autocomplete="off"
              type="search"
              class="form-control rounded"
              placeholder='Search'
              
            // style="min-width: 225px;"
            />

          </form>

          {/* <!-- Right links --> */}
          <ul class="navbar-nav ms-auto d-flex flex-row">
            {/* <!-- Notification dropdown --> */}
            <li class="nav-item dropdown">

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >



              </ul>
            </li>

            {/* <!-- Icon --> */}
            <li class="nav-item">
              <a class="nav-link me-3 me-lg-0" href="#">
                <i class="fas fa-fill-drip"></i>
              </a>
            </li>
            {/* <!-- Icon --> */}
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>

            {/* <!-- Icon dropdown --> */}


            {/* <!-- Avatar --> */}

          </ul>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}

      {/* <!--Main Navigation--> */}
      {/* 
<!--Main layout--> */}


      {/* <!--Main layout--> */}





    </header>
=======
      
    </>
>>>>>>> eb420e309785a1224a3f22c1d481c70f946f70b3
  )
}