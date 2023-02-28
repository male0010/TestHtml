import img8 from "../image/w2.jpg"

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
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white ">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-1 ">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
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
              <i class="fas fa-building fa-fw me-3 "></i><span></span></a>



          </div>
        </div>
      </nav>
      {/* <!-- Sidebar -->
  
    <!-- Navbar --> */}
      <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">

        <div class="container-fluid">

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


          <a class="navbar-brand" href="#">
            <Image src={img5} alt="" height="65" /></a>





          {/*             
            <form class="d-none d-md-flex input-group w-auto my-auto">
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder='Search'
              // style="min-width: 300px;"
              />
  
            </form>
   */}


        </div>

      </nav>
    </header>




  )
}

