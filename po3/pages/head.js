import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import imghead from '../pages/img/Bootstrap_logo.png'
import Link from 'next/link'
export default function head() {
  return (
    <>
     

    
        <nav class="navbar navbar-expand-lg navbar-light bg-black fixed-top ">
          <div class="container-fluid mx-5 ff">
            <a class="navbar-brand ff fw" href="/">
              <Image src={imghead} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Start Bootstrap
            </a>
            <button class="navbar-toggler nt text-black fs ff" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <span class="navbar-toggler-icon nti"></span>
            </button>
            <div class="collapse navbar-collapse   " id="navbarSupportedContent">
              <ul class="navbar-nav  me-auto mb-2 mb-lg-0">

              </ul>
              <ul class="navbar-nav  ">
                <li class="d-flex justify-content-end  ">
                  <a className="nav-link active fw" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                    About
                  </a>
                </li>
                <li class="d-flex justify-content-end  ">
                  <a className="nav-link active fw" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                    Project
                  </a>
                </li>
                <li class="d-flex justify-content-end  ">
                  <a className="nav-link active fw" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                    Contact
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </nav>

      
    </>
  )
}
