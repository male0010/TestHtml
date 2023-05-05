// import Sidebar1 from "../public/componant/Sideber.js"
// import axios from 'axios';
// import { useState } from "react";
// import Image from 'next/image'
// import { useEffect } from 'react';
import b from "../public/image/ball.jpg"
import Header1 from "../public/header2"
import Head from 'next/head';
import Link from "next/link.js";
import axios from "axios";
import TESTFOOT from "./testfoot"
import Image from 'next/image'
import n from "../public/image/neew.png"
import e from "../public/image/neww.jpg"
import w from "../public/image/newww.jpg"
import z from "../public/image/nw.jpg"
import E from "../public/image/se.jpg"
import se from "../public/image/see.jpg"
import es from "../public/image/seee.png"



export default function Register() {


    async function Register(e) {
        e.preventDefault();
        const [username, password, email, name, lastname, phone] = e.target.elements;
        var formdata = new FormData;
        formdata.append("acc_username", username.value);
        formdata.append("acc_password", password.value);
        formdata.append("acc_email", email.value);
        formdata.append("acc_name", name.value);
        formdata.append("acc_lastname", lastname.value);
        formdata.append("acc_phone", phone.value);
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        axios.post("https://www.imgen.site/imgen2/api_male/register.php", formdata, config).then((response) => {
            if (response.data == "success") {
                alert("register success you can login now");
                window.location.assign("/login")
            } else {
                alert("fail")
            }
        });
    }

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Register</title>
            </Head>
            <Header1 />
            <body className="register lg body ">
                <br></br>
                <br></br>
                <div className="container accordion-body my-5 lgback ">
                    <div className="row lgback  justify-content-center ">
                        < br></br>
                        <div className="col-md-5  mx-2 colmd card  px-0 " >
                        <div class="card casd   p-5 linnn">
                            <h1 className="display-4 text-center css">Warzone™</h1>
                            <h2 className="lead text-start sc ">Sign up to your account</h2>
                            <form className="card-body ssc px-0 " onSubmit={Register}>
                                <div className="mb-3 d-flex flex-column fs-5 ">
                                    <label for="" className="form-label ">Username</label>
                                    <input className="form-control d-flex searchh px-5" type="username" name="username" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label">Password</label>
                                    <input className="form-control  searchh" type="password" name="password" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5">
                                    <label for="" className="form-label">Email</label>
                                    <input className="form-control searchh" type="email" name="email" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label">First name</label>
                                    <input className="form-control searchh" type="text" name="name" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label">Last name</label>
                                    <input className="form-control searchh" type="text" name="lastname" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label">Number Phone</label>
                                    <input className="form-control searchh" type="text" name="phone" placeholder="" required />
                                </div>
                                <div className=" text-end fs-6">
                                    <Link href="/login" className="a">if you have member </Link>
                                </div>
                                <div className=" align-content-end row-8 ">
                                    <button className="btn btn-primary  me-2 but  my-2 butc " type="submit"
                                        value="Register">Sign Up</button>
                                </div>
                                <br></br>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5  mx-2" >
                            <div class="card casd  m-2 linnn" >
                                <h5 class="card-title css-z6wpf22 fs-1 ">NEWS</h5>
                            </div>
                            <Link class="card casd  m-2 linnn a"  href="/Ashika">
                                {/* <Image src="..." class="card-img-top" alt="..."/> */}
                                <div class="card-body p-2 ">
                                    <h5 class="card-title css-z6wpf22 fs-4 py-2">New Exclusion Zone: Ashika Island</h5>

                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y_Bn8Iw-iJk?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <div class="card-footer p-2 px-4">
                                    <small class=" card-title fs-6 css-z6wpf22 "> Infiltrate Ashika Island, the third Exclusion Zone to be added to <Link href=''>DMZ</Link> after Al Mazrah and Building 21. Unlike Building 21, which requires that you first acquire a keycard, Ashika Island can be chosen as your DMZ destination at any time.</small>

                                </div>
                            </Link>
                            <Link class="card casd m-2 linnn a px-2" href='/Reloaded'>
                                <Image className='imgg' src={b} height={500} width={1200} alt="#" />
                                <div class="card-body linnn p-1">
                                    <h5 class="card-title fs-4 css-z6wpf22">SEASON 01 RELOADED: WHAT TO KNOW ABOUT CALL OF DUTY®: WARZONE™ CUP, LIVE DECEMBER 14-23</h5>
                                    <small class=" card-title fs-6 css-z6wpf22">During Season 01 Reloaded, Call of Duty®: Warzone™ 2.0 will have a limited-time Call of Duty®: WarzoneTM Cup mode from December 14 at 10 a.m. PT to December 23 at 10 a.m. PT to close out its Modern Warfare® FC event.</small>

                                </div>
                                <div class="card-footer">
                                    <ul>
                                       
                                        <li className='tag-item'>
                                            Mode Recon
                                        </li>
                                    </ul>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>



                <br></br>
                <br></br>
                <br></br>



                <div className="card text-center colmd m-2 py-1 px-1" >
                    <div className="card-title m-2 w-100">
                        <div class="  px-4 py-2 text-center">
                            <div class="py-3">
                                <h1 class="display-5  css">ENLIST NOW</h1>
                                <div class="col-lg-4 mx-auto">
                                    <p class="fs-5 mb-4 scs">GET THE LATEST INTEL: Your source for the most current news, get alerts for new events or updates, and view heatmaps.</p>
                                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                        <a href="https://www.callofduty.com/warzone" class="btn btn-primary lead2">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" card-body m-2">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner ">
                                <div class="carousel-item active">
                                    <Image className="img-fluid" src={E} width={1400} height={800} alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <Image className="img-fluid" src={se} width={1400} height={800} alt="..." />

                                </div>
                                <div class="carousel-item">
                                    <Image className="img-fluid" src={es} width={1400} height={800} alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>






                <footer className="footerrr   ">
                    <TESTFOOT className=' py-5' />
                </footer>
            </body>

        </>
    )
}
