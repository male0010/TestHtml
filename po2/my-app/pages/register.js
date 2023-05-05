// import Sidebar1 from "../public/componant/Sideber.js"
// import axios from 'axios';
// import { useState } from "react";
// import Image from 'next/image'
// import { useEffect } from 'react';
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
                <div className="container accordion-body my-4  ">
                    <div className="row justify-content-center">
                        < br></br>
                        <div className="col-md-8 m-auto colmds card   px-0" >
                            <h1 className="display-4 text-center css">Warzone™</h1>
                            <h2 className="lead text-start sc ">Sign up to your account</h2>
                            <form className="card-body " onSubmit={Register}>
                                <div className="mb-3 ">
                                    <label for="" className="form-label">Username</label>
                                    <input className="form-control  searchh " type="username" name="username" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Password</label>
                                    <input className="form-control searchh" type="password" name="password" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Email</label>
                                    <input className="form-control searchh" type="email" name="email" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">First name</label>
                                    <input className="form-control searchh" type="text" name="name" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Last name</label>
                                    <input className="form-control searchh" type="text" name="lastname" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Number Phone</label>
                                    <input className="form-control searchh" type="text" name="phone" placeholder="" required />
                                </div>
                                <div className=" text-end">
                                    <Link href="/login" className="a">if you have member </Link>
                                </div>
                                <div className=" align-content-end row-8">
                                    <button className="col-md-3 btn btn-primary but  align-self-end " type="submit"
                                        value="Register">Sign Up</button>
                                </div>
                                <br></br>
                            </form>
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
