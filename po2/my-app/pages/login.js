import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';
import Register from './register';

export default function Login() {

    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Register</title>
            </head>

            <body className="login body">
                <br></br>
                <br></br>
                <div className="container accordion-body  lgback">
                    <div className="row lgback">
                        < br></br>
                        <div className="col-md-8 m-auto colmd" >
                            <h1 className="display-4 text-xl-center ">Wellcome to the Warzone™</h1>
                            <p className="lead text-start ">Sign In to your account</p>
                            <div className="card-body ">
                                <div className="mb-3">
                                    <label for="" className="form-label">Username</label>
                                    <input className="form-control" type="username" name="username" placeholder="" required />
                                </div>
                                <div className="mb-3">
                                    <label for="" className="form-label">Password</label>
                                    <input className="form-control" type="password" name="password" placeholder="" required />
                                </div>

                                <div className=" align-content-end row-8">
                                    <button className=" col-md-3 btn btn-primary   align-self-end " type="submit"
                                        value="Register">Login</button>

                                        
                                    <button className="col-md-3 btn btn-primary align-self-end" >
                                        <a href="register" className="a  " >register</a>
                                    </button>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}