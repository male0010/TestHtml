/* eslint-disable @next/next/no-html-link-for-pages */
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
import Link from "next/link"

// import styles from '@/styles/globals.css'


export default function header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-black fixed-top ">
        <div class="container-fluid">
          <Link href='/'>  <Image src={img4} alt="" width="220" height="70" /></Link>
          <button class="navbar-toggler nt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon nti"></span>
          </button>
          <div class="collapse navbar-collapse da" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="d-flex justify-content-end  ">
                <a className="nav-link bg-black menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                  GAMES
                </a>
              </li>
              <li class="d-flex justify-content-end  ">
              <a className="bg-black nav-link  menu2" href="/item" >
                  ITEM
                </a>
              </li>
              <li class="d-flex justify-content-end  ">
              <a className="nav-link bg-black menu2" href="category">
                  CATEGORY
                </a>
              </li>
              <li class="d-flex justify-content-end  ">
              <a className="nav-link bg-black menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>
              </li>
           

            </ul>
          
          </div>
        </div>
      </nav>
      






    </>
  )
}