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
      <nav id="sidebarMenu" className=" d-lg-block sidebar  sin">
        
      
      
      <br></br>
        <div className="call">
          <Image src={img8} alt="" height="70" /></div>
        
        <div className="position-sticky  accordion" id="accordionExample">
          <div className="accordion accordion-flush sin  " id="accordionFlushExample">
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripplev sin " aria-current="true">
            </a>

            <a href="#" className="a py-1  bgg sin " id="flush-headingOne">
              <button className="  dropdown-toggle btn btn-toggle d-inline-flex accordion collapsed align-items-center accordion collapsed sin " type="button " data-bs-toggle="collapse"  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Warzone™ 2.0
              </button>
              <div className="accordion-collapse collapse pb"aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" id="flush-collapseOne">
                <ul className="accordion-body fw-normal pb-2 ">
                  <li><a href="/" className=" bgg a">HOME</a></li>
                  <li><a href="pro" className="bgg a">PRODUCTS</a></li>
                  <li><a href="/item" className="bgg a">ITEM</a></li>
                </ul>
              </div>
            </a>




            <a href="#" className="a py-1  bgg sin" id="flush-headingTwo">
              <button className=" dropdown-toggle btn btn-toggle d-inline-flex accordion collapsed align-items-center accordion collapsed sin " type="button"  data-bs-toggle="collapse"data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                SEASON 02
              </button>
              <div className="accordion-collapse collapse pb" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" id="flush-collapseTwo">
                <ul className="accordion-body   fw-normal pb-2  ">
                  <li><a href="" className=" bgg a">HOME</a></li>
                  <li><a href="" className="bgg a">PRODUCTS</a></li>
                  <li><a href="" className="bgg a">ITEM</a></li>
                </ul>
              </div>
            </a>
            
            <a href="#" className="a py-1  bgg sin" id="flush-headingThree">
              <button className="  dropdown-toggle btn btn-toggle d-inline-flex  accordion collapsed align-items-center   sin "type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"aria-expanded="false" aria-controls="flush-collapseThree">
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

