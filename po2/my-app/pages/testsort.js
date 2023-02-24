import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';


export default function testsort() {
    
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            Sortup(response.data)
            Sortlow(response.data)
            // setfilterdata(response.data);
            // console.log(response.data)
        });
    };

    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])


    function Sortup(x) {
        var datax = new Array;
        var datay = gunlist;
        datax = x.sort((a, b) => (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1))
        console.log(datax)
    }

    function Sortlow(x) {
        var datay = new Array;
        var datay = gunlist;
        datay = x.sort((a, b) => (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1))
        // console.log(datay)
    }
 
    function setsort(){
        Sortup(x)=(1)
        Sortlow(x)=(2)


    }

    return (
        <>
            <select className='col-12 col-sm-1' onChange={(event) => {
                        setsort(event.target.value)
                    }}>
                <option value={0}>ALL</option>
                <option value={1}>gun</option>
                <option value={2}>character</option>
            </select>

            {gunlist?.map((item, index) => (
                <div key={item.id_data} >
                    <div className="col" >
                        <div className="card" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data} >
                            <Image width={245} height={200} src={item.path}
                                className={'imgBack'} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{(item.file_name).replace(".jpg", '')}</h5>
                                <p className="card-text">{item.uploaded_on}</p>
                                <button onClick={(e) => { loadfile(e) }} className="btn btn-primary">download</button>
                            </div>
                        </div>

                        <div class="modal fade" id={"exampleModal" + item.id_data} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel"><Image width={245} height={200} src={item.path}
                                            className="card-Image-top" alt="..." />
                                        </h1>
                                        f                                    </div>
                                    <div class="modal-body">
                                        {(item.file_name).replace(".jpg", '')}
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

};