import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';
import Header1 from "../public/header2"
import { Head } from 'next/head';
import Link from "next/link.js";
export default function Register() {

//     async function Register(e){  
//     e.preventDefault();
//     const [username, password, email, name, lastname, phone] = e.target.elements;
//     var formdata = new FormData;
//     formdata.append("acc_username", username.value);
//     formdata.append("acc_password", password.value);
//     formdata.append("acc_email", email.value);
//     formdata.append("acc_name", name.value);
//     formdata.append("acc_lastname", lastname.value);
//     formdata.append("acc_phone", phone.value);
//     const config = {
//         headers: { "content-type": "multipart/form-data" },
//     };
//     axios.post("http://localhost:8080/bpo2/register.php", formdata, config).then((response) => {
//         if (response.data == "success") {
//             alert("register success you can login now");
//             window.location.assign("/login")
//         } else {
//             alert("fail")
//         }
//     });
// }

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Register</title>
            </Head>
            <Header1 />
            {/* <body className="register body ">
                <br></br>
                <br></br>
                <div className="container accordion-body  lgback ">
                    <div className="row lgback">
                        < br></br>
                        <div className="col-md-8 m-auto colmds" >
                            <h1 className="display-4 text-center ">Warzone™</h1>
                            <h2 className="lead text-start ">Sign up to your account</h2>
                            <div class="card-body ">
                                <div class="mb-3 ">
                                    <label for="" class="form-label">Username</label>
                                    <input class="form-control  searchh " type="username" name="username" placeholder="" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Password</label>
                                    <input class="form-control searchh" type="password" name="password" placeholder="" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Email</label>
                                    <input class="form-control searchh" type="email" name="email" placeholder="" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">First name</label>
                                    <input class="form-control searchh" type="text" name="name" placeholder="" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Last name</label>
                                    <input class="form-control searchh" type="text" name="lastname" placeholder="" required/>
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">Number Phone</label>
                                    <input class="form-control searchh" type="text" name="phone" placeholder="" required/>
                                </div>
                                <div className=" text-end">
                                    <Link href="/login" className="a">if you have member </Link>
                                </div>
                                <div class=" align-content-end row-8">
                                    <button class="col-md-3 btn btn-primary but  align-self-end " type="submit"
                                        value="Register">Sign Up</button>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </body> */}

        </>
    )
}