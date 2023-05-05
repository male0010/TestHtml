// import { useEffect } from "react";

// export default function NextPage() {
//     useEffect(() => {
//         // เช็คว่าผู้ใช้ล็อกอินเข้าสู่ระบบหรือไม่
//         const isLoggedIn = localStorage.getItem("isLoggedIn");

//         if (isLoggedIn === "true") {
//             // ถ้าผู้ใช้ล็อกอินเข้าสู่ระบบแล้ว ให้ดึงข้อมูล username และ name จาก localStorage
//             const username = localStorage.getItem("username");
//             const name = localStorage.getItem("name");

//             console.log(`Welcome back player ${username} (${name})`);
//             // ทำอย่างอื่นต่อไป...
//         } else {
//             // ถ้าผู้ใช้ยังไม่ได้ล็อกอิน ให้ redirect ไปยังหน้า login
//             window.location.href = "/login";
//         }
//     }, []);
//     const handleLogout = () => {
//         localStorage.removeItem("isLoggedIn");
//         localStorage.removeItem("username");
//         localStorage.removeItem("name");
//         window.location.href = "/login";
//     }


//     return (<>
//         <body className="lg ">
//             <div className=" card-body">
//                 welcomeeeeeeeeeeeeeeeeeeeeee
//             </div>
//             <div card-body>
//                 <button className="col-md-3 btn btn-secondary but align-self-end"onClick={handleLogout}>

//                         Logout

//                 </button>
//             </div></body>
//     </>
//     );
// }

import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import Image from 'next/image'
import Navbar1 from "../public/componant/Navbar.js"
import img8 from "../public/image/w2.jpg"
import Head from "next/head.js";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import TESTFOOT from "./testfoot"

export default function NextPage() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [filters, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    const [sort, setsort] = useState();
    const [search, setsearch] = useState('')
    const [gunlist, setgunlist] = useState();
    const [finalfilter, setfinalfilter] = useState('0');
    const [finalsort, setfinalsort] = useState('1')

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            const storedUsername = localStorage.getItem("username");
            const storedName = localStorage.getItem("name");

            setUsername(storedUsername);
            setName(storedName);
        } else {
            // ถ้าผู้ใช้ยังไม่ได้ล็อกอิน ให้ redirect ไปยังหน้า login
            window.location.href = "/login";
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        window.location.href = "/login";
    };
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setgunlist((datax).slice(0));
            setsort((datax).slice(0));
            console.log(datax)




        });
    };

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

    //filter
    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])

    function setup(x) {
        setfilter(x)
        filtertype(x)

    }

    function filtertype(x, z) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            tysort(z, gunlist);
        } else {
            gunlist.forEach(element => {
                if (element['id_type'] == x) {
                    y.push(element)
                    // console.log(element);
                }
            });
            // setfilterdata(y); 
            tysort(z, y)
        }
    }
    //sort filter
    async function tysort(x1, y) {
        var datax = new Array;
        var datay = y;

        console.log(x1);
        console.log(y);
        if (x1 == 1) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1);
            });
            await setsort([])

        } else if (x1 == 2) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1);
            });
            await setsort([])
        } else {
            await setsort([]);
            datax = y

        }
        setsort(datax);
        console.log(y);
    }

    function combine(z, y) {
        setfinalfilter(z)
        setfinalsort(y)

        filtertype(z, y)
        console.log(z)

    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-black fixed-top ">
                <div class="container-fluid">
                    <Link href='/'> <Image className="oos" src={img8} alt="" height="85" /></Link>
                    <button class="navbar-toggler nt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon nti"></span>
                    </button>
                    <div class="collapse navbar-collapse da" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="d-flex justify-content-end
                             ">
                                <input className="  search col-2 justify-content-end "
                                    placeholder="Search.... "
                                    onChange={(event) => {
                                        setsearch(event.target.value)
                                    }}
                                />
                            </li>
                            <li class="d-flex justify-content-end">
                                <select className='d-flex  all col-1  mx-2 ' onChange={(event) => {
                                    combine(event.target.value, finalsort)
                                }}>

                                    <option value={0}>ALL</option>
                                    <option value={1}>GUN</option>
                                    <option value={2}>CHARACTER</option>
                                    <option value={3}>CAR</option>

                                </select>
                                <select className='d-flex all col-2 ' onChange={(event) => {
                                    combine(finalfilter, event.target.value)
                                }}>

                                    <option value="0">Sort</option>
                                    <option value="1">a-z</option>
                                    <option value="2">z-a</option>
                                </select>
                            </li>

                        </ul>
                        <form class="d-flex justify-content-end">
                            <div className="profile">
                                {username && (
                                    <>
                                        <span className="username">{username}</span>
                                    </>
                                )}
                            </div>
                            <button className="logout-btn  btn btn-secondary but " onClick={handleLogout}>
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </nav>



            <Sidebar1 />
            <div className="container con">

                <br></br>
                <br></br>
                <div>
                    {/* <div className="row">
        <input className="  search col-1"
            placeholder="Search.... "
            onChange={(event) => {
                setsearch(event.target.value)
            }}
        />
    </div>
    <br></br> */}

                    {/* <div className="d-flex row ">
        <select className='d-flex all col-sm-2 ' onChange={(event) => {
            combine(event.target.value, finalsort)
        }}>

            <option value={0}>ALL</option>
            <option value={1}>gun</option>
            <option value={2}>character</option>
            <option value={3}>car</option>

        </select>
    -
        <select className='d-flex all col-sm-2' onChange={(event) => {
            combine(finalfilter, event.target.value)
        }}>

            <option value="0">Sort</option>
            <option value="1">a-z</option>
            <option value="2">z-a</option>
        </select>
    </div> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        {/* <div className="row">
            <input className="  search col-1"
                placeholder="Search.... "
                onChange={(event) => {
                    setsearch(event.target.value)
                }}
            />
        </div> */}
                        <br></br>

                        {/* <div className="d-flex row ">
            <select className='d-flex all col-sm-2 ' onChange={(event) => {
                combine(event.target.value, finalsort)
            }}>

                <option value={0}>ALL</option>
                <option value={1}>gun</option>
                <option value={2}>character</option>
                <option value={3}>car</option>

            </select>
            -
            <select className='d-flex all col-sm-2' onChange={(event) => {
                combine(finalfilter, event.target.value)
            }}>

                <option value="0">Sort</option>
                <option value="1">a-z</option>
                <option value="2">z-a</option>
            </select>
        </div> */}
                        <br></br>
                    </div>
                    <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-5  row-cols-xl-5  row-cols-xxl-6 g-2 g-lg-5 itemss'>
                        {sort?.filter((item) => {
                            if (search == "") {
                                return item
                            } else if (item.Name_data.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        }).map((item, index) => {
                            return (

                                <div className="card its" key={index} data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                                    <Image width={245} height={200} src={"https://www.imgen.site/imgen2" + item.path}
                                        className="card-Image-top  imgite   " alt="..." />
                                    <div className="card-body itemm">
                                        <h5 className="itemm ">
                                            {/* {(item.file_name).replace(".jpg", '')} */}
                                            {(item.Name_data).toUpperCase()}
                                        </h5>




                                        <div className="modal fade p-0 " id={"exampleModal" + item.id_data} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered ">

                                                <div className="modal-content   text-center  ">
                                                    <Image className=" card-img" width={500} height={350} src={"https://www.imgen.site/imgen2" + item.path}
                                                        alt="..." />
                                                    <div className="modal-body itemm">
                                                        {/* {(item.file_name).replace(".jpg", '')} */}
                                                        {(item.Name_data).toUpperCase()}
                                                    </div>

                                                    <div className="modal-footer   border border-0 footer ">
                                                        <button onClick={(e) => { loadfile(e, item.path, item.file_name) }} className="btn bta  btn-primary">Download</button>

                                                        <button on type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}



                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <TESTFOOT />

        </>
    );
}
