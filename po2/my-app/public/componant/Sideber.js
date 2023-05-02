import img8 from "../image/w2.jpg"
import img7 from "../image/wr.png"
import { useState } from "react";
import img5 from "../image/mw.png"
import axios from 'axios';

import Image from 'next/image'


// import styles from '@/styles/globals.css'

export default function header() {
 


  return (


    <header>




      {/* <!--Main Navigation--> */}

      {/* <!-- Sidebar --> */}
      <nav id="sidebarMenu" className=" navs d-lg-block d-sm-block sidebar  sin">
        
      
        <br></br>
        <br></br>
        <br></br>
        {/* <div className="call Ima">
          <Image src={img8} alt="" height="82" /></div> */}
        
        <div className="position-sticky  accordion" id="accordionExample">
          <div className="accordion accordion-flush sin  " id="accordionFlushExample">
            <a
              href="#"
              className="list-group-item list-group-item-action py-1 ripplev sin " aria-current="true">
            </a>

            <a href="#" className="a py-1  bgg sin " id="flush-headingOne">
              <button className=" sia dropdown-toggle btn btn-toggle d-inline-flex accordion collapsed align-items-center accordion collapsed sin " type="button " data-bs-toggle="collapse"  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                WARZONE™ 2.0
              </button>
              <div className="accordion-collapse collapse pb"aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" id="flush-collapseOne">
                <ul className="accordion-body fw-normal pb-3 ">
                  <li><a href="/" className=" bgg a">HOME</a></li>
                  <li><a href="pro" className="bgg a">PRODUCTS</a></li>
                  <li><a href="/item" className="bgg a">ITEM</a></li>
                </ul>
              </div>
            </a>




            <a href="#" className="a py-1  bgg sin" id="flush-headingTwo">
              <button className=" sia dropdown-toggle btn btn-toggle d-inline-flex accordion collapsed align-items-center accordion collapsed sin " type="button"  data-bs-toggle="collapse"data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                SEASON 02
              </button>
              <div className="accordion-collapse collapse pb" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" id="flush-collapseTwo">
                <ul className="accordion-body   fw-normal pb-2  ">
                  <li><a href="" className=" bgg a">NEWS</a></li>
                  <li><a href="" className="bgg a">SHOP</a></li>
                  <li><a href="" className="bgg a">ESPORTS</a></li>
                </ul>
              </div>
            </a>
            
            <a href="#" className="a py-1  bgg sin" id="flush-headingThree">
              <button className=" sia dropdown-toggle btn btn-toggle d-inline-flex  accordion collapsed align-items-center   sin "type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"aria-expanded="false" aria-controls="flush-collapseThree">
                NEW MODE
              </button>
              <div className="accordion-collapse collapse pb " aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" id="flush-collapseThree">
                <ul className="accordion-body fw-normal pb-3 ">
                  <li><a href="/" className=" bgg a">HOME</a></li>
                    
                  <li><a href="pro" className="bgg a">PRODUCTS</a></li>
                  <li><a href="/item" className="bgg a">ITEM</a></li>
                </ul>
              </div>
            </a>




            <a href="#" className="list-group-item list-group-item-action py-2 ripple sin">
              <i className="fas fa-building fa-fw me-3 "></i><span></span></a>



          </div>

        </div>
      </nav>
      {/* <!-- Sidebar -->
  
    <!-- Navbar --> */}

    </header>




  )
}

