

import { useState } from "react";
import axios from "axios";
import Header1 from "../public/header2";
import Head from "next/head";
import { useEffect } from "react";

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
            <body className="lg ">
                <br></br>
                <br></br>
                <div className="container accordion-body  lgback">
                    <div className="row lgback">
                        <br></br>

                        <div className="col-md-5 m-auto colmd ">
                            <br></br>
                            <br></br>
                            <h1 className="display-4 text-xl-center ">Warzone™</h1>
                            <br></br>
                            <p className="lead text-start ">Sign In to your account</p>
                            <div className="card-body ">
                                <form onSubmit={Login}>
                                    <div className="mb-3">
                                        <label for="" className="form-label">
                                            Username
                                        </label>
                                        <input className="form-control" type="username" name="username" value={username}
                                            onChange={(e) => setUsername(e.target.value)} placeholder="" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="" className="form-label">
                                            Password
                                        </label>
                                        <input className="form-control" type="password" name="password" value={password}
                                            onChange={(e) => setPassword(e.target.value)} placeholder="" required />
                                    </div>

                                    <div className=" align-content-end row-8  ">
                                        <button className=" col-md-3 btn btn-secondary me-2 but  align-self-end " type="submit" value="Login" >
                                            {" "}
                                            Login{" "}
                                        </button>

                                        <button className="col-md-3 btn btn-secondary but align-self-end">
                                            <a href="register" className="a ">
                                                register
                                            </a>
                                        </button>
                                    </div>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
