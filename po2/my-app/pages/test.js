import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';
import Navbar1 from "../public/componant/Navbar.js"
import img8 from "../public/image/w2.jpg"

export default function test() {
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setgunlist(datax)
            // console.log(datax)

        });
    };
    getgunlist()

    async function input(e) {
        e.preventDefault();
        const [numone] = e.target.elements;
        console.log(numone.value)
    }

    async function two(e) {
        e.preventDefault();
        const [numthree, numtwo] = e.target.elements;
        var z = numthree.value * numtwo.value
        console.log(z)
    }


    return (
        <>
            <body className="register body">
                <br></br>
                <br></br>
                <div className="container accordion-body  lgback">
                    <div className="row lgback">
                        <form class="mb-3" onSubmit={input} >
                            <label for="" class="form-label">Name</label>
                            <input type="text" name="numone" id="" aria-describedby="helpId" placeholder="" />
                            <input id="" type="submit" value="Button" />
                        </form>
                        <form class="mb-3" onSubmit={two} >
                            <label for="" class="form-label">two</label>
                            <input type="text" name="numtwo" id="" aria-describedby="helpId" placeholder="" />

                            <input type="text" name="numthree" id="" aria-describedby="helpId" placeholder="" />
                            <input id="" type="submit" value="Button" />
                        </form>
                    </div>
                </div>

                <div className='container text-center my-5 ' style={{ overflowX: 'f' }}>
                    <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                        {/* {gunlist?.map((item, index) => (
                            <div key={item} className="row" > 
                            <li className="">
                                <div className="">
                                <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                            className="card-Image-top " alt="..." />

                                </div>

                            </li>

                            </div>
                         ))} */}

                        {gunlist?.map((item, index) => (
                            <div class="scrollmenu">
                                <div className="card-body"> 
                                    <div key={index} className='card-body'>

                                        <h5 className='card-title'>{item.Name_data}</h5>
                                        <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                    </div>
                                    <div className='card-body'>
                                        <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                            className="card-Image-top " alt="..." />
                                    </div>
                                </div>

                            </div>


                        ))} 
                    </div>
                </div>


            </body>

        </>
    )
}// <div key={index} className='col-lg-4 col-md-6 col-sm-12'>
                            //     <div className='card'>
                            //         <div className='card-body'>

                            //             <h5 className='card-title'>{item.Name_data}</h5>
                            //             <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                            //         </div>
                                //     <div className='card-body'>
                                //         <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                //             className="card-Image-top " alt="..." />
                                //     </div>
                                // </div>