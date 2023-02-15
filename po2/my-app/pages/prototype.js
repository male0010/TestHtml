import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import axios from 'axios';
import { useState } from "react";
import img from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"

export default function prototype() {
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
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api.php").then((response) => {
            setgunlist(response.data.data);
        });
      };
    getgunlist()





    // async function getgun() {
    //     const config = {
    //         headers: { "content-type": "multipart/form-data" },
    //     };
    //      axios.get("https://www.imgen.site/imgen2/api_male/api.php", config)
    //         .then((response) => {
    //             let datax = (response.data);
    //             if (datax.status == "success") {
    //                 console.log(datax)
    //             } else {
    //                 alert("fail")
    //                 console.log(datax)
    //             }

    //         });

    // }



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
                <div className="col">
                    <div className="card" >
                        <Image width={245} height={200} src={item.path}
                            className="card-Image-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.file_name}</h5>
                            <p className="card-text">{item.uploaded_on}</p>
                            <a href={item.path} className="btn btn-primary">download</a>
                        </div>
                    </div>
                </div>
                
            ))}

            <div>
                <div>ssss</div>
            </div>
        </>
    )
}