import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import axios from 'axios';
import { useState } from "react";
import img from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"
import Header1 from "../public/header2"

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

    // axios.post('https://www.imgen.site/imgen2/api_male/api.php', { x: 1, buf: new Buffer(10) }, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // }).then(({ data }) => console.log(data));




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
    

    // const config = {
    //     headers: { "content-type": "image/jpeg" },
    //     responseType: "blob"
    //   };

    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute(
    //       'download',
    //       filename,
    //     );

    //     // Append to html link element page
    //     document.body.appendChild(link);

    //     // Start download
    //     link.click();

    //     // Clean up and remove the link
    //     link.parentNode.removeChild(link);

    async function loadfile(event, urls, file_name) {
        event.preventDefault();
        const config = {
            headers: { "content-type": "image/jpeg" },
            responseType: "blob"
        }
       await axios.get(urls,config).then((response) => {
            console.log(response.data)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                file_name
            );
            // Append to html link element page

            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);

        });

    }
    return (
        <>
            <Header1 />

            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                {gunlist?.map((item, index) => (
                    <div className="col" >
                        <div className="card" data-bs-toggle="modal" data-bs-target={"#exampleModal"+item.id} on >
                            <Image  width={245} height={200} src={item.path}
                                className={'imgBack'}  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{(item.file_name).replace(".jpg",'')}</h5>
                                <p className="card-text">{item.uploaded_on}</p>
                                <button onClick={(e)=>{loadfile(e)}} className="btn btn-primary">download</button>
                            </div>
                        </div>

                        <div class="modal fade" id={"exampleModal"+item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel"><Image width={245} height={200} src={item.path}
                                                        className="card-Image-top" alt="..." />
                                                    </h1>
                                                    
                                                </div>
                                                <div class="modal-body">
                                                {(item.file_name).replace(".jpg",'')}
                                                </div>
                                                <div class="modal-body">update on : 
                                                {item.uploaded_on}
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    </div>

                ))}</div>


            <div>
                <div>ssss</div>
            </div>
        </>
    )
}