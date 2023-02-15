import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from "react";
import img from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"

export default function Home() {
    // const [gunlist, setgunlist] = useState();
    // axios.post('https://www.imgen.site/imgen2/api_male/api.php', { x: 1, buf: new Buffer(10) }, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // }).then(({ data }) =>  setgunlist(data[0]));

    //     axios.post('https://www.imgen.site/imgen2/api_male/api.php', {x: 1, buf: new Buffer(10)}, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }).then(({data}) => console.log(data));

    const [gunlist, setgunlist] = useState();
    async function getgun() {
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        await axios.get("https://www.imgen.site/imgen2/api_male/api.php", config)
            .then((response) => {
               let setgunlist = (response.data);
                if (setgunlist.status == "success") {
                    console.log(setgunlist)
                } else {
                    alert("fail")
                    console.log(setgunlist)
                }

            });

    }



    //     const config = {
    //                 headers: { "content-type": "multipart/form-data" },
    //             };
    //    async function  getgun() {

    //        await axios.post('https://www.imgen.site/imgen2/api_male/api.php',config).than((response) => {
    //             setgunlist(response.data);

    //             console.log(response.data)

    //         });
    //     }
    // getgun()
    return (
        <>
            {gunlist?.map((item, index) => (
                <div className="col" key={data}>
                    <div className="card" >
                        <Image width={245} height={200} src={item.path}
                            className="card-Image-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.file_name}</h5>
                            <p className="card-text">{item.uploaded_on}</p>
                            <a href={item.path} className="btn btn-primary">dowlode</a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}