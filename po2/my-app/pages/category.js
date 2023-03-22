/* eslint-disable @next/next/no-img-element */
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
import Link from "next/link"
import Navbar1 from "../public/componant/Navbar.js"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/free-mode";
import { FreeMode, Thumbs } from "swiper";
import "swiper/css/thumbs";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
        getgunlist();
        // parse the 'type' query parameter from the URL and call setuparr
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type) {
            setuparr(type);
        }
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
        // update query parameter 'type' in the URL with x
        const params = new URLSearchParams(window.location.search);
        params.set('type', x);
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        console.log(params);
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
    // const type1 = arrdata.filter(item => item.id_subtype >= 1 && item.id_subtype <= 5) || [];
    // const type2 = arrdata.filter(item => item.id_subtype >= 6 && item.id_subtype <= 8) || [];
    // const type3 = arrdata.filter(item => item.id_subtype >= 9 && item.id_subtype <= 10) || [];



    // const [swiperRef, setSwiperRef] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="public\image\logo.jpg" />
            </Head>
            {/* <Sidebar1/> */}

            <nav className="navbar fixed-top navbarr row-4">
                <div className=" Ima col-1 "><Link href="pro">
                    <Image src={img8} alt="" height="70" /></Link></div>
                <div className="container col-9 ">
                    <div className="col ">
                        <input className="  search searchh col-2 "
                            placeholder="Search.... "
                            onChange={(event) => {
                                setsearch(event.target.value)
                            }} />
                    </div>

                    <div className="col-md-2 ">
                        <button type="button" className="btn btn-primary me-2 butt "><Link href="/login" className="a">SIGN IN</Link></button>
                        <button type="button" className="btn btn-secondary butt"><Link href="/register " className="a">SIGN UP</Link></button>
                    </div>


                </div>
            </nav>

            <div className=" bgg">
                <div className="bgContent">
                    <div className="bg-image">
                        <div className="content ">
                            <div className="contentLayoutContainer ">
                                <div className="content2 ">
                                    <h2>UP TO 32v32</h2>
                                    <h1> BATTLE MAPS </h1>
                                    <p>CALL OF DUTY® MODERN WARFARE® II AND WARZONE™ 2.0 </p>
                                    <div className="contentButton">
                                        <div className="jsx-1751277314 h-buttons-group">
                                            <span className=" h-buttons-group-button">
                                                <Link href="">
                                                    <button type="button" className="buttong">go to collection</button>
                                                </Link>
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

            <div className="contentBelowBanner___1csYL"  >
                <div>
                    <p className="sw">
                        <button className="btn btt"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            GUN
                        </button>
                    </p>
                    <div className="collapse  " id="collapseExample" >
                        <div className="card text-center">
                            <div className="card-body">
                                <p className="row " >
                                    <Link href={"/subtype/para1?subtype=1"} className="btn  col btnn">PISTON <button type="button"
                                    ></button></Link>
                                    <Link href={"/subtype/para2?subtype=2"} className="btn  col btnn">SMG <button type="button"
                                    ></button></Link>
                                    <Link href={"/subtype/para3?subtype=3"} className="btn  col btnn">ASSAULT RIFLE <button type="button"
                                    ></button></Link>
                                    <Link href={"/subtype/para4?subtype=4"} className="btn  col btnn">SNIPER RIFLE <button type="button"
                                    ></button></Link>
                                    <Link href={"/subtype/5?subtype=5"} className="btn  col btnn">SHOTGUN<button type="button"
                                    ></button></Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="sw">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {type1Array.map((item) => (
                        <SwiperSlide key={item.id_data} data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${item.id_data}`}>
                            <div key={item.id_data} className="card">
                                <div
                                    className="card"

                                >
                                    <img
                                        width={500}
                                        height={350}
                                        src={"https://www.imgen.site/imgen2" + item.path}
                                        className="card-img-top img-fluid"
                                        alt="..." />

                                    <div className="card-body itemm">
                                        <h5 className="itemm">
                                            {item.Name_data.toUpperCase()}
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                {item.name_subtype}
                                            </h6>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <br></br>
            <br></br>
            <div>
                <p className="sw">
                    <button className="btn btt"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        CHARACTER
                    </button>
                </p>
                <div className="collapse  " id="collapseExample2">
                    <div className="card text-center">
                        <div className="card-body">
                            <p className="row " >
                                <Link href={"/subtype/para9?subtype=9"} className="btn  col btnn">MALE<button type="button"
                                ></button></Link>
                                <Link href={"/subtype/para10?subtype=10"} className="btn  col btnn">FEMALE<button type="button"
                                ></button></Link>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="sw">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}

                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {type2Array.map((item) => (
                        <SwiperSlide key={item.id_data} data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${item.id_data}`}>
                            <div key={item.id_data} className="card">
                                <div
                                    className="card"
                                    data-bs-toggle="modal"
                                    data-bs-target={`#exampleModal${item.id_data}`}
                                >
                                    <img
                                        width={500}
                                        height={350}
                                        src={"https://www.imgen.site/imgen2" + item.path}
                                        className="card-img-top img-fluid-d"
                                        alt="..." />
                                    <div className="card-body itemm">
                                        <h5 className="itemm">
                                            {item.Name_data.toUpperCase()}
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                {item.name_subtype}
                                            </h6>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <br></br>



            <div>
                <p className="sw">
                    <button className="btn btt"
                        type="button" value={0} data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                        CAR
                    </button>
                </p>
                <div className="collapse  " id="collapseExample1">
                    <div className="card text-center">
                        <div className="card-body">
                            <p className="row ">
                                <Link href={"/subtype/para6?subtype=6"} className="btn  col btnn">BIKER <button type="button"
                                ></button></Link>
                                <Link href={"/subtype/para7?subtype=7"} className="btn  col btnn">CAR <button type="button"
                                ></button></Link>
                                <Link href={"/subtype/para8?subtype=8"} className="btn  col btnn">FLY<button type="button"
                                ></button></Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div><div className="sw">
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {type3Array.map((item) => (
                        <SwiperSlide key={item.id_data} data-bs-toggle="modal"
                            data-bs-target={`#exampleModal${item.id_data}`}>
                            <div key={item.id_data} className="card">
                                <div
                                    className="card"
                                >
                                    <img
                                        width={500}
                                        height={350}
                                        src={"https://www.imgen.site/imgen2" + item.path}
                                        className="card-img-top img-fluid"
                                        alt="..." />
                                    <div className="card-body itemm">
                                        <h5 className="itemm">
                                            {item.Name_data.toUpperCase()}
                                            <h6 className="card-subtitle mb-2 text-muted">
                                                {item.name_subtype}
                                            </h6>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>





    )
}

