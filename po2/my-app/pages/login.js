import b from "../public/image/kkpp.jpg"
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import Header1 from "../public/header2";
import Head from "next/head";
import { useEffect } from "react";
import Image from 'next/image'
import n from "../public/image/neew.png"
import e from "../public/image/neww.jpg"
import w from "../public/image/newww.jpg"
import z from "../public/image/nw.jpg"

import TESTFOOT from "./testfoot"
import footer from "@/public/componant/footer";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function Login(e) {
        e.preventDefault();
        const [username, password] = e.target.elements;
        var formdata = new FormData;
        formdata.append("acc_username", username.value);
        formdata.append("acc_password", password.value);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        await axios.post("https://www.imgen.site/imgen2/api_male/login.php", formdata, config).then((response) => {
            var datax = response.data;
            if (datax.status == "success") {
                const { acc_username, acc_name } = datax;
                alert("Welcome back player " + datax.acc_username + "( " + datax.acc_name + " )");
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", acc_username);
                localStorage.setItem("name", acc_name);
                window.location.href = "/afterlogin";
            }
            else {
                alert("fail")
                console.log(datax)
            }
        });
    }
    useEffect(() => {
        // เช็คว่าผู้ใช้ล็อกอินเข้าสู่ระบบหรือไม่
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
            // ถ้าผู้ใช้ล็อกอินเข้าสู่ระบบแล้ว ให้ดึงข้อมูล username และ name จาก localStorage
            const username = localStorage.getItem("username");
            const name = localStorage.getItem("name");

            console.log(`Welcome back player ${username} (${name})`);
            window.location.href = "/afterlogin";
            // ทำอย่างอื่นต่อไป...
        }
    }, []);
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
            </Head>
            <Header1 />
            <body className=" vh-100 lg ">
                <br></br>
                <br></br>
                <div className="container accordion-body   lgback">
                    <div className="row lgback justify-content-center">
                        <br></br>

                        <div className="col-md-5  colmd card   px-0  ">
                            <br></br>
                            <br></br>
                            <h1 className="display-4 text-xl-center css">Warzone™</h1>
                            <br></br>
                            <p className="lead text-start sc ">Sign In To Your Account</p>
                            <div className="card-body ">
                                <form onSubmit={Login}>
                                    <div className="mb-3 ssc" >
                                        <label for="" className="form-label">
                                            Username
                                        </label>
                                        <input className="form-control" type="username" name="username" value={username}
                                            onChange={(e) => setUsername(e.target.value)} placeholder="" required />
                                    </div>
                                    <div className="mb-3 ssc">
                                        <label for="" className="form-label">
                                            Password
                                        </label>
                                        <input className="form-control" type="password" name="password" value={password}
                                            onChange={(e) => setPassword(e.target.value)} placeholder="" required />
                                    </div>

                                    <div className=" align-content-end row-8   ">
                                        <button className=" col-md-3 btn btn-secondary me-2 but  align-self-end butc " type="submit" value="Login" >
                                            {" "}
                                            Login{" "}
                                        </button>

                                        <button className="col-md-3 btn btn-secondary but align-self-end butc ">
                                            <a href="register" className="a ">
                                                register
                                            </a>
                                        </button>
                                    </div>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3  ">
                            <div class="card casd  m-2 linnn">
                                {/* <Image src="..." class="card-img-top" alt="..."/> */}
                                <div class="card-body ">
                                    <h5 class="card-title css-z6wpf22 fs-4 ">Modern Warfare FC | Call of Duty: Modern Warfare II & Warzone 2.0</h5>
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EwoXZw1RKUA?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="card-footer">
                                    <small class=" card-title fs-6 css-z6wpf22 ">SEASON 03 RELOADED FEATURES ALBORAN HATCHERY,
                                        RAID EPISODE 03, WARZONE RANKED PLAY, AND MORE.</small>
                                </div>
                            </div>
                            <div class="card casd m-2 linnn">
                                <Image className='imgg' src={b} height={500} width={1200} alt="#" />
                                <div class="card-body linnn">
                                    <h5 class="card-title fs-2 css-z6wpf22">NEW</h5>
                                    <small class=" card-title fs-6  ">The <Link href=''>new Battle Pass for Season 02</Link> features 100+ rewards across 20 Sectors, including three new functional weapons and the Operator Ronin The Season 02 Battle Pass launches at the start of the season on February 15. Upgrade to the full Battle Pass for access to all of Season 02 s Battle Pass items or purchase the Battle Pass Bundle to earn additional Battle Token Tier Skips and get a head start on conquering the map</small>

                                </div>
                                <div class="card-footer">
                                    <ul>
                                        <li className='tag-item'>
                                            NEWS
                                        </li>
                                        <li className='tag-item'>
                                            Mode Recon
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

<br></br>
<br></br>

<br></br>





<hr className="css-17d1bj66"></hr>
<section class=" text-center container">
    <div class="row  ">
      <div class="col-lg-4 col-md-5 mx-auto">
        <h1 class="fw-light css">GET THE GAME</h1>
        
      </div>
    </div>
  </section>

  <div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    
                    <div class="col">
                        <div class="card h-100">
                        <Image className="img-fluid" src={n} alt="..." />
                                <div className="card-body csc">
                                <h5 className="card-title cs">CALL OF DUTY: MODERN WARFARE II</h5>
                                    <p className="card-text ccs">Call of Duty®: Modern Warfare® II & Warzone™ 2.0 Season 01 Patch Notes</p>
                                </div>
                               
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <Image className="img-fluid" src={e} alt="..." />
                                <div className="card-body csc">
                                    <h5 className="card-title cs">CALL OF DUTY: MODERN WARFARE II</h5>
                                    <p className="card-text  ccs">CALL OF DUTY®: MODERN WARFARE® II & WARZONE™ 2.0 SEASON 03 PATCH NOTES</p>
                                </div>
                                
                        </div>
                    </div>
                    {/* <div class="col">
                        <div class="card h-100">
                        <Image className="img-fluid" src={w} alt="..." />
                                <div className="card-body csc">
                                    <h5 className="card-title cs">CALL OF DUTY: MODERN WARFARE I</h5>
                                    <p className="card-text ccs">Call of Duty®: Warzone™ Season Five Mid-Season Patch Notes</p>
                                </div>
                                
                        </div>
                    </div> */}
                       <div class="col">
                        <div class="card h-100">
                        <Image className="img-fluid" src={w} alt="..." />
                                <div className="card-body csc">
                                    <h5 className="card-title cs">CALL OF DUTY: MODERN WARFARE I</h5>
                                    <p className="card-text ccs">Call of Duty®: Warzone™ Season Five Mid-Season Patch Notess</p>
                                </div>
                                
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card h-100">
                        <Image className="img-fluid" src={z} alt="..." />
                                <div className="card-body csc">
                                    <h5 className="card-title cs">CALL OF DUTY: WARZONE</h5>
                                    <p className="card-text ccs">SQUAD UP, DROP IN! CALL OF DUTY®: WARZONE™ 2.0 TACTICAL OVERVIEW NEW FEATURES, DMZ, AND MORE</p>
                                </div>
                                
                        </div>
                    </div>
                    
                </div>
               
                </div>

                <br></br>
                

                <hr className="css-17d1bj66"></hr>

                <footer className="footerrr   ">
                    <TESTFOOT className=' py-5' />
                </footer>
            </body>

        </>
    );
}
