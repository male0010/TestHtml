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
                <div className="container accordion-body my-4  lgback">
                    <div className="row lgback justify-content-center">
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
                <footer className="footerrr   ">
                    <TESTFOOT className=' py-5' />
                </footer>
            </body>

        </>
    )
}
