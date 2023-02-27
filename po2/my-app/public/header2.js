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
import Sidebar1 from "../public/image/Sidebar"

// import styles from '@/styles/globals.css'


export default function header() {
  return (
    <header>









      {/* <!--Main Navigation--> */}

      {/* <!-- Sidebar --> */}
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white ">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-1 ">
            <a
              href="#"
              class="list-group-item list-group-item-action py-1 ripple"
              aria-current="true">
            </a>




            <a href="#" class="list-group-item list-group-item-action py-2 ripple  bgg">
              <button class="  dropdown-toggle btn btn-toggle d-inline-flex align-items-center " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false ">
                Type
              </button>
              <div class="collapse " id="home-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
                  <li><a href="#" class=" bgg">Overview</a></li>
                  <li><a href="#" class="bgg">Updates</a></li>
                  <li><a href="#" class="bgg">Reports</a></li>
                </ul>
              </div>

            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple bgg ">
              <button class=" btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                Sort
              </button>
              <div class="collapse" id="dashboard-collapse">
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  
                  <li><a href="#" class=" bgg">Weekly</a></li>
                  <li><a href="#" class=" bgg">Monthly</a></li>
                  <li><a href="#" class=" bgg">Annually</a></li>
                </ul>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
              <i class="fas fa-building fa-fw me-3 "></i><span></span></a
            >

          </div>
        </div>
      </nav>
      {/* <!-- Sidebar -->

  <!-- Navbar --> */}
      <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Brand --> */}
          <a class="navbar-brand" href="#">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/07/Modern-Warfare-Emblem.png"
              height="50"
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
  )
}