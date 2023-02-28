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
        <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          NEWS
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
<hr />

<nav class="navbar navbar-expand-lg  filter ">

<div class=" navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav ">
    <li class="nav-item dropdown ">
      <a class="nav-link dropdown-toggle filter" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Type
      </a>
      <ul class="dropdown-menu  ">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
    <li class="nav-item dropdown ">
      <a class="nav-link dropdown-toggle filter" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Sort
      </a>
      <ul class="dropdown-menu  ">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
    <div class="container text-center">
      <div class="row">
      <div class="col">
        <form className="d-flex">
        <input className=" me- search" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </div>
  </ul>
</div>
</nav>

<div class=" p-3  sidebar ">
<a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">

</a> 
<ul class="list-unstyled ps-0">
<li class="mb-1 mb">
  <button class="  dropdown-toggle btn btn-toggle d-inline-flex align-items-center   " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false ">
  Type
  </button>
  <div class="collapse " id="home-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
      <li><a href="#" class=" mb">Overview</a></li>
      <li><a href="#" class="mb">Updates</a></li>
      <li><a href="#" class="mb">Reports</a></li>
    </ul>
  </div>
</li>
<li class="mb-1 mb">
  <button class=" btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
  Sort
  </button>
  <div class="collapse" id="dashboard-collapse">
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class=" mb">Overview</a></li>
      <li><a href="#" class=" mb">Weekly</a></li>
      <li><a href="#" class=" mb">Monthly</a></li>
      <li><a href="#" class=" mb">Annually</a></li>
    </ul>
  </div>
</li>
<li class="mb-1 mb">
  <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
    Orders
  </button>
  <div class="collapse" id="orders-collapse" >
    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
      <li><a href="#" class=" mb">New</a></li>
      <li><a href="#" class="mb">Processed</a></li>
      <li><a href="#" class=" mb">Shipped</a></li>
      <li><a href="#" class=" mb">Returned</a></li>
    </ul>
  </div>
</li>
<li class="border-top my-3"></li>
</ul>
</div>
</>
)
}