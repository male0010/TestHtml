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
import Image from "next/image";
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
                            <h1 className="display-4 text-center css">Warzone™</h1>
                            <h2 className="lead text-start sc ">Sign up to your account</h2>
                            <form className="card-body ssc px-0  w-50" onSubmit={Register}>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label ">Username</label>
                                    <input className="form-control  searchh " type="username" name="username" placeholder="" required />
                                </div>
                                <div className="mb-3 fs-5 ">
                                    <label for="" className="form-label">Password</label>
                                    <input className="form-control searchh" type="password" name="password" placeholder="" required />
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
                <footer className="footerrr   ">
                    <TESTFOOT className=' py-5' />
                </footer>
            </body>

        </>
    )
}
