import Sidebar1 from "../public/componant/Sideber.js"
import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';

// import styles from '@/styles/globals.css'



export default function header() {
    const [filter, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    const [sort, setsort] = useState();
    const [search, setsearch] = useState('')
    const [gunlist, setgunlist] = useState();
    const [finalfilter, setfinalfilter] = useState();
    const [finalsort, setfinalsort] = useState()

    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            let datax = response.data
            setgunlist((datax).slice(0));
            setsort((datax).slice(0));
            setfilterdata((datax).slice(0));
        });
    };

    //console.log(sssss)

    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])

    function setup(x) {
        setfilter(x)
        filtertype(x)

    }

    function filtertype(x) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            setfilterdata(gunlist);
        } else {

            gunlist.forEach(element => {
                if (element['id_type'] == x) {
                    y.push(element)
                    // console.log(element);
                }
            });
            setfilterdata(y);
        }
    }
    async function tysort(x1) {
        var datax = new Array;
        var datay = gunlist;
        if (x1 == 1) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1);
            });
            await setsort([])

        } else if (x1 == 2) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1);
            });
            await setsort([])
        } else {
            await setsort([]);
            datax = gunlist

        }
        setsort(datax);
        console.log(gunlist);
    }

    return (

        <> < Sidebar1 />
           

            <div className="container overflow-hidden text-center">
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <div>
                        <input
                            placeholder="search...."
                            onChange={(event) => {
                                setsearch(event.target.value)
                            }}
                        />
                    </div>
                    <div className='row'>
                        <select className='col-12 col-sm-1' onChange={(event) => {
                            setup(event.target.value)
                        }}>
                            <option value={0}>ALL</option>
                            <option value={1}>gun</option>
                            <option value={2}>character</option>
                            <option value={3}>car</option>

                        </select>
                        <select className='col-12 col-sm-1' onChange={(event) => {
                            tysort( event.target.value)
                        }}>

                            <option value="1">a</option>
                            <option value="2">z</option>
                        </select>
                    </div>

                </div>
                <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                    {filterdata?.filter((item) => {
                        if (search == "") {
                            return item
                        } else if (item.file_name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((item, index) => {
                        return (
                            <div key={index} className="col">
                                <div className="card" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                                    <Image width={245} height={200} src={item.path}
                                        className="card-Image-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="itemm">{(item.file_name).replace(".jpg", '')}</h5>




                                        <div className="modal fade p-0 " id={"exampleModal" + item.id_data} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog ">

                                                <div className="modal-content  text-center  ">
                                                    <Image className="card" width={500} height={350} src={item.path}
                                                        alt="..." />
                                                    <div className="modal-body itemm">
                                                        {(item.file_name).replace(".jpg", '')}
                                                    </div>

                                                    <div className="modal-footer  border border-0 footer">
                                                        <button onClick={(e) => { loadfile(e, item.path, item.file_name) }} className="btn btn-primary">download</button>

                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </>








    )
}