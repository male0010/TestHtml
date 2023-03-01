import img8 from "../image/w2.jpg"
import img7 from "../image/wr.png"

import img5 from "../image/mw.png"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';


// import styles from '@/styles/globals.css'

export default function header() {
  const [filter, setfilter] = useState("1");
  const [filterdata, setfilterdata] = useState();
  // const [data, setdata] = useState()
  const [gunlist, setgunlist] = useState();

  const getgunlist = () => {
    axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
      setgunlist(response.data);
      setfilterdata(response.data);
      console.log(response.data)
    });
  };

  //console.log(sssss)

  useEffect(() => {
    // setdata()
    getgunlist()
  }, [])

  function setup(x) {
    setfilter(x)
    filtertype(x)

  }

  function filtertype(x) {
    console.log(x)
    let y = new Array;
    if (x == 0) {
      setfilterdata(gunlist);
    } else {

      gunlist.forEach(element => {
        if (element['id_type'] == x) {
          y.push(element)
          // console.log(element);
        }
      });
      setfilterdata(y);
    }
  }


  return (


    <header>




      {/* <!--Main Navigation--> */}

      {/* <!-- Sidebar --> */}
      <nav id="sidebarMenu" class=" d-lg-block sidebar  sin ">
        
        <a class="navbar-brand " href="/">
            <Image src={img8} alt="" height="70" /></a>
        
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-3 sin">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripplev sin " aria-current="true">
            </a>
              
            <a href="#" class="list-group-item list-group-item-action py-1 ripple  bgg sin">
              <button class="  dropdown-toggle btn btn-toggle d-inline-flex align-items-center   sin " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false ">
              Warzone™ 2.0
              </button>
              <div class="collapse  " id="home-collapse">
                <ul class="btn-toggle-nav  fw-normal pb-3   ">
                  <li><a href="/" class=" bgg">HOME</a></li>
                  <li><a href="pro" class="bgg">PRODUCTS</a></li>
                  <li><a href="/item" class="bgg">ITEM</a></li>
                </ul>
              </div>

             

              


            </a>
            
              
              
        
            <a href="#" class="list-group-item list-group-item-action py-2 ripple sin">
              <i class="fas fa-building fa-fw me-3 "></i><span></span></a>



          </div>
        </div>
      </nav>
      {/* <!-- Sidebar -->
  
    <!-- Navbar --> */}
     
    </header>




  )
}

