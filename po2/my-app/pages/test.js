import img8 from "../public/image/w2.jpg"
import zaya1 from "../public/image/zaya.jpg"
import bg1 from "../public/image/bg.jpg"
import Image from 'next/image'
import Sidebar1 from "../public/componant/Sideber.js"
// import styles from '@/styles/globals.css'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import Head from 'next/head'
import Navbar1 from "../public/componant/Navbar.js"

export default function Category() {
    const [Categoryr, setCategoryr] = useState("1");
    const [Categoryrdata, setCategoryrdata] = useState();
    const [gunlist, setgunlist] = useState();
    const [Categoryrarray, setCategoryrarray] = useState([]);
    const [subtypegunlist, setsubtypegunlist] = useState([]);
    const [arr, setarr] = useState("1");

    const [arrdata, setarrdata] = useState([]);
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setgunlist(datax)
            // console.log(datax)

        });
    };

    useEffect(() => {
        // setdata()
        getgunlist()
    }, []);

    useEffect(() => {
        axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
            .then(response => {
                const data = response.data;
                const mappedData = data.reduce((result, item) => {
                    const typeId = item.id_type;
                    if (!result[typeId]) {
                        result[typeId] = [];
                    }
                    result[typeId].push(item);
                    return result;
                }, {});
                // console.log(mappedData);
                setCategoryrarray(mappedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const type1Array = Categoryrarray[1] || [];
    const type2Array = Categoryrarray[2] || [];
    const type3Array = Categoryrarray[3] || [];

    useEffect(() => {
        axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
            .then(response => {
                const data = response.data;
                const mappedData = data.reduce((result, item) => {
                    const subtypeId = item.id_subtype;
                    if (!result[subtypeId]) {
                        result[subtypeId] = [];
                    }
                    result[subtypeId].push(item);
                    return result;
                }, {}); console.log(mappedData);
                setsubtypegunlist(mappedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const subtype1Array = subtypegunlist[1] || [];
    const subtype2Array = subtypegunlist[2] || [];
    const subtype3Array = subtypegunlist[3] || [];

    function setup2(x) {
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
    //เพื่อโหลดภาพ
    async function loadfile(event, urls, file_name) {
        event.preventDefault();
        const config = {
            headers: { "content-type": "image/jpeg" },
            responseType: "blob"
        }
        await axios.get(urls, config).then((response) => {
            console.log(response.data)

            var url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;

            link.setAttribute(
                'download',
                file_name
            );
            // Append to html link element page

            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);

        });
    }
    function setuparr(x) {
        setarr(x)
        setarrdatax(x)

    }




    function setarrdatax(x) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            setarrdata(gunlist);
        } else {

            gunlist.forEach(element => {
                if (element['id_subtype'] == x) {
                    y.push(element)
                    console.log(element);
                }
            });
            setarrdata(y);
        }
    }
    const type1 = arrdata.filter(item => item.id_subtype >= 1 && item.id_subtype <= 5) || [];
    const type2 = arrdata.filter(item => item.id_subtype >= 6 && item.id_subtype <= 8) || [];
    const type3 = arrdata.filter(item => item.id_subtype >= 9 && item.id_subtype <= 10) || [];



    return (
        <>
            <head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="public\image\logo.jpg" />
            </head>
            {/* <Sidebar1/> */}

            <nav class="navbar fixed-top navbarr row-4">
                <div className=" Ima col-1 ">
                    <Image src={img8} alt="" height="70" /></div>
                <div class="container col-9 ">
                    <div className="col ">
                        <input className="  search searchh col-2 "
                            placeholder="Search.... "
                            onChange={(event) => {
                                setsearch(event.target.value)
                            }}
                        />
                    </div>

                    <div class="col-md-2 ">
                        <button type="button" class="btn btn-primary me-2 butt "><a href="/login" className="a">SIGN IN</a></button>
                        <button type="button" class="btn btn-secondary butt"><a href="/register " className="a">SIGN UP</a></button>
                    </div>


                </div>
            </nav>

            <div className=" bgg" >
                <div className="bgContent">
                    <div className="bg-image">
                        <div className="content ">
                            <div className="contentLayoutContainer ">
                                <div class="content2 ">
                                    <h2>UP TO 32v32</h2>
                                    <h1> BATTLE MAPS </h1>
                                    <p>CALL OF DUTY® MODERN WARFARE® II AND WARZONE™ 2.0 </p>
                                    <div className="contentButton">
                                        <div className="jsx-1751277314 h-buttons-group">
                                            <span className=" h-buttons-group-button">
                                                <a href="">
                                                    <button type="button" className="buttong">go to collection</button>
                                                </a>
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>



            {/* <div class="card text-white bg-image">
            <div className="contentLayoutContainer ">
              <div class="content2">
                <h4 class="">UP TO 32v32</h4>
                <h1> BATTLE MAPS </h1>
                <p class="">Call of Duty: Next and the Open Beta are showcasing....</p>
                <div className="contentButton">
                                        <div className="jsx-1751277314 h-buttons-group">
                                            <span className=" h-buttons-group-button">
                                                <a href="">
                                                    <button type="button" className="buttong">go to collection</button>
                                                </a>
                                            </span>
                                        </div>

                                    </div>
                

              </div>
              </div> 
            </div> */}


            <div className="contentBelowBanner___1csYL" value={0} onClick={(event) => {
                                        setuparr(event.target.value)
                                    }}>
                <section className="hover contentAreaNoPadding___2M1NZ">
                    <div >
                        <p>
                            <button class="btn btt"
                                type="button"  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                GUN
                            </button>
                        </p>
                        <div class="collapse  " id="collapseExample" >
                        <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>

                            <button class="btn  col btnn" value={1} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1"
                                aria-expanded="true" aria-controls="multiCollapseExample1">PISTON</button>
                            <button class="btn btnn col" value={2} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample2" aria-expanded="true"
                                aria-controls="multiCollapseExample2">SMG</button>
                            <button class="btn btnn col" value={3} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample3" aria-expanded="true"
                                aria-controls="multiCollapseExample3">ASSAULT RIFLE</button>
                            <button class="btn btnn col" value={4} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample4" aria-expanded="true"
                                aria-controls="multiCollapseExample4">SNIPER RIFLE</button>
                            <button class="btn btnn col" value={5} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample5" aria-expanded="true"
                                aria-controls="multiCollapseExample5">SHOTGUN</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type1.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>









                        </div>
                    </div>

                    <div className="horizontalScroll___1O_E3" id="containersc">
                        <button type="button"  className="sideArrow___1s2uV sideArrowRight___3W9nJ">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M29 44L13 24L29 4"></path>
                            </svg>

                        </button>
                        <div className="row___2fBWZ">
                            {type1Array?.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <li className="cell___3sPIk">
                                    <div className="cellGuts___1TMU_">

                                        <span className="clickableBox___1HFCs">
                                            <div className="boxWithAspectRatioContainer___2hILe">
                                                <div className="boxWithAspectRatioInner___2gUvu">

                                                    <div className="css-1k8lzl2">
                                                        <div class="content1 ">


                                                            <Image className="css-2pknc3 " src={"https://www.imgen.site/imgen2" + item.path} width={355} height={355} alt="" />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </span>

                                    </div>
                                </li>))}

                        </div>
                    </div>
                </section>


                <br></br>




                <section className="hover contentAreaNoPadding___2M1NZ">
                    <div>
                        <p>
                            <button class="btn btt"
                                type="button" value={0} data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                                CAR
                            </button>
                        </p>
                        <div class="collapse  " id="collapseExample1">
                        <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            <button class="btn btnn col" value={6} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6"
                                aria-expanded="true" aria-controls="multiCollapseExample6">BIKER</button>
                            <button class="btn btnn col" value={7} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample7" aria-expanded="true"
                                aria-controls="multiCollapseExample7">CAR</button>
                            <button class="btn btnn col" value={8} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample8" aria-expanded="true"
                                aria-controls="multiCollapseExample8">FLY</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type2.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>



                        </div>
                    </div>
                    <div className="horizontalScroll___1O_E3" id="containersc">
                        {/* <button type="button" className="sideArrow___1s2uV sideArrowRight___3W9nJ">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M29 44L13 24L29 4"></path>
                            </svg>

                        </button> */}
                        <div className="row___2fBWZ">
                            {type3Array?.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <li className="cell___3sPIk">
                                    <div className="cellGuts___1TMU_">

                                        <span className="clickableBox___1HFCs">
                                            <div className="boxWithAspectRatioContainer___2hILe">
                                                <div className="boxWithAspectRatioInner___2gUvu">

                                                    <div className="css-1k8lzl2">
                                                        <div class="content1 ">
                                                            <Image className="css-2pknc3 " src={"https://www.imgen.site/imgen2" + item.path} width={355} height={355} alt="" />
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </span>

                                    </div>
                                </li>))}

                        </div>
                    </div>
                </section>


                <br></br>


                <section className="hover contentAreaNoPadding___2M1NZ">
                    <div>
                        <p>
                            <button class="btn btt"
                                type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                                CHARACTER
                            </button>
                        </p>
                        <div class="collapse  " id="collapseExample2">
                        <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                                <button class="btn   btnn col" value={9} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample9"
                                    aria-expanded="true" aria-controls="multiCollapseExample9">MALE</button>
                                <button class="btn  btnn  col" value={10} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#multiCollapseExample10" aria-expanded="true"
                                    aria-controls="multiCollapseExample10">FEMALE</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type3.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>


                        </div>
                    </div>
                    <div className="horizontalScroll___1O_E3" id="containersc">
                        {/* <button type="button" className="sideArrow___1s2uV sideArrowRight___3W9nJ">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M29 44L13 24L29 4"></path>
                            </svg>

                        </button> */}
                        <div className="row___2fBWZ">
                            {type2Array?.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <li className="cell___3sPIk">
                                    <div className="cellGuts___1TMU_">

                                        <span className="clickableBox___1HFCs">
                                            <div className="boxWithAspectRatioContainer___2hILe">
                                                <div className="boxWithAspectRatioInner___2gUvu">

                                                    <div className="css-1k8lzl2">
                                                        <div>

                                                            <Image className="css-2pknc3 " src={"https://www.imgen.site/imgen2" + item.path} width={355} height={355} alt="" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </span>

                                    </div>
                                </li>))}

                        </div>
                    </div>
                </section>
            </div>




        </>

    )
}

