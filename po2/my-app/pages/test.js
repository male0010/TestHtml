import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';


export default function test() {

    const [filter, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    const [Categoryr, setCategoryr] = useState("1");
    const [Categoryrdata, setCategoryrdata] = useState();
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setfilterdata(response.data);
            setgunlist(response.data);
            setCategoryrdata(response.data);
            console.log(response.data)
        });
    };

    //console.log(sssss)

    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])

    function setup(x) {
        setCategoryr(x)
        setCategoryrx(x)

    }

    function setCategoryrx(x) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            setCategoryrdata(gunlist);
        } else {

            gunlist.forEach(element => {
                if (element['id_subtype'] == x) {
                    y.push(element)
                    // console.log(element);
                }
            });
            setCategoryrdata(y);
        }
    }
    function setup1(x) {
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





                <p>
                    <button class="btn btn-primary"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        GUN
                    </button>
                </p>
                <div class="collapse  " id="collapseExample">
                    <p className="row" onClick={(event) => {
                        setup(event.target.value)
                    }}>
                         <button class="btn btn-primary col" value={1} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample0" 
                        aria-expanded="true" aria-controls="multiCollapseExample0">SHOW/HIDE</button>
                        <button class="btn btn-primary col" value={1} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" 
                        aria-expanded="true" aria-controls="multiCollapseExample1">PISTON</button>
                        <button class="btn btn-primary col" value={2} type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample2" aria-expanded="true"
                            aria-controls="multiCollapseExample2">SMG</button>
                        <button class="btn btn-primary col" value={3} type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample3" aria-expanded="true"
                            aria-controls="multiCollapseExample3">ASSAULT RIFLE</button>
                        <button class="btn btn-primary col" value={4} type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample4" aria-expanded="true"
                            aria-controls="multiCollapseExample4">SNIPER RIFLE</button>
                        <button class="btn btn-primary col" value={5} type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample5" aria-expanded="true"
                            aria-controls="multiCollapseExample5">SHOTGUN</button>
                    </p>
                    <div className="row">
                        <div className="col">
                            <div class="collapse row row-cols-2 row-cols-lg-5 g-2 g-lg-3 " id="multiCollapseExample0">
                                {Categoryrdata?.map((item, index) => (
                                    <div key={item.id_subtype.value} className="col">
                                        <div className="card " data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                                            <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                                className="card-Image-top img-fluid " alt="..." />
                                            <div className="card-body itemm">
                                                <h5 className="itemm">
                                                    {/* {(item.file_name).replace(".jpg", '')} */}
                                                    {(item.Name_data).toUpperCase()}
                                                    <h6 className='card-subtitle mb-2 text-muted   '>{item.name_subtype}</h6>
                                                </h5>




                                                <div className="modal fade p-0 " id={"exampleModal" + item.id_data} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog ">

                                                        <div className="modal-content  text-center  ">
                                                            <Image className="card img-fluid" width={500} height={350} src={"https://www.imgen.site/imgen2" + item.path}
                                                                alt="..." />
                                                            <div className="modal-body itemm">
                                                                {/* {(item.file_name).replace(".jpg", '')} */}
                                                                {(item.Name_data).toUpperCase()}
                                                            </div>

                                                            <div className="modal-footer   border border-0 footer ">
                                                                <button onClick={(e) => { loadfile(e, item.path, item.file_name) }} className="btn btn-primary">download</button>

                                                                <button on type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                    {/* {filterdata?.map((item, index) => {
                                    <div key={item.id_subtype.value} className="">
                                        <div class="card card-body" key={index}>
                                            
                                                <div className='card-body'>

                                                    <h5 className='card-title '>{item.Name_data}</h5>
                                                    <h6 className='card-subtitle mb-2 text-muted   '>{item.name_subtype}</h6>
                                                </div>
                                                <div className='card-body'>
                                                    <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                                        className="card-Image-top img-fluid " alt="" />
                                                </div>
                                            </div>

                                        </div>

                                    
                                })} */}




                </div>


                {/* <p onClick={(event) => {
                    setup1(event.target.value)
                }}>
                    <button class="btn btn-primary" value={1}
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        GUN
                    </button>
                </p>
                <div class="collapse row " id="collapseExample">
                    {filterdata?.map((item, index) => (
                       <div key={item.id_subtype.value} className="col">
                       <div class="card">
                           <div className="card-body">
                               <div  className='card-body'>

                                   <h5 className='card-title '>{item.Name_data}</h5>
                                   <h6 className='card-subtitle mb-2 text-muted   '>{item.name_subtype}</h6>
                               </div>
                               <div className='card-body'>
                                   <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                       className="card-Image-top img-fluid " alt="" />
                               </div>
                           </div>

                       </div>

                   </div>
                    ))}
                </div> */}

                {/* <div key={item.id_subtype.value} className="col">
                             <div className="card ">
                                 <div key={index} className="card-body ">
                                    <h5 className='card-title '>{item.name_subtype}</h5>
                             </div>
                             </div>
                         </div>  */}



                {/* <div className='container text-center my-5 ' style={{ overflowX: 'f' }}>
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
                         ))} 
                        <div className=''>
                            <select className='' onChange={(event) => {
                                setup(event.target.value)
                            }}>
                                <option value={0}>ALL</option>
                                <option value={1}>gun</option>
                                <option value={2}>character</option>
                                <option value={3}>car</option>
                                <option value={4}>car</option>
                                <option value={5}>car</option>
                                <option value={6}>car</option>
                                <option value={7}>car</option>
                                <option value={8}>car</option>
                                <option value={9}>car</option>
                                <option value={10}>car</option>

                            </select>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>



                        {Categoryrdata?.map((item, index) => (
                            <div key={item.index} class="card">
                                <div className="card-body">
                                    <div key={index} className='card-body'>

                                        <h5 className='card-title '>{item.Name_data}</h5>
                                        <h6 className='card-subtitle mb-2 text-muted   '>{item.name_subtype}</h6>
                                    </div>
                                    <div className='card-body'>
                                        <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                            className="card-Image-top img-fluid " alt="..." />
                                    </div>
                                </div>

                            </div>


                        ))}
                    </div>
                </div> */}

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