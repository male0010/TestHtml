import { useEffect } from 'react';
import img8 from "/public/image/w2.jpg"
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header1 from "/public/header2"

export default function MyPage() {
    const [gunlist, setgunlist] = useState();
    const [arr, setarr] = useState("1");
    const [subtypegunlist, setsubtypegunlist] = useState([]);
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setgunlist(datax)

        });
    };
    useEffect(() => {

        getgunlist()
        const params = new URLSearchParams(window.location.search);
        params.get('subtype');
        // window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        console.log(params.get('subtype'));
    }, []);

    useEffect(() => {
        axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
            .then(response => {
                const data = response.data;
                const mappedData = data.reduce((result, item) => {
                    const subtypeId = item.id_subtype;
                    if (!result[subtypeId]) {
                        result[subtypeId] = [];
                    }
                    result[subtypeId].push(item);
                    return result;
                }, {}); console.log(mappedData);
                setsubtypegunlist(mappedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const subtype1Array = subtypegunlist[8] || [];


    return (

        <div>
            <Head>
                <title>FLY</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="public\image\logo.jpg" />
            </Head>

            <Header1 />

            <div className="card text-center" >
                <div className="card-body row-cols-1">
                    <button className="btn  col btnn" type="button"
                    >FLY</button>
                    <div className=' row row-cols-2'>
                        {subtype1Array.map((item) => (
                            <div key={item.id_data} className="row" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                                <div className=" card-body" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                    <Image width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body itemm">
                                        <h5 className="itemm">
                                            {(item.Name_data).toUpperCase()}
                                            <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                        </h5>
                                        <div className="modal fade p-0 " id={"exampleModal" + item.id_data} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog ">

                                                <div className="modal-content  text-center  ">
                                                    <Image className="card" width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`}
                                                        alt="..." />
                                                    <div className="modal-body itemm">
                                                        {(item.file_name).replace(".jpg", '')}
                                                    </div>

                                                    <div className="modal-footer  border border-0 footer">
                                                        <button onClick={(e) => { loadfile(e, 'https://www.imgen.site/imgen2' + item.path, item.file_name) }} className="btn btn-primary">download</button>

                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
}  
