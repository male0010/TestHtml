import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';


export default function testsort() {

    const [gunlist, setgunlist] = useState();
    const [sort, sortlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            sortlist(response.data.Name_data);
            SortType(response.data)
            // setfilterdata(response.data);
            // console.log(response.data)
        });
    };
    getgunlist()



    function SortType(x) {
        var datax = new Array;
        var datay = gunlist;
        datax=x.sort((a,b)=> (a.Name_data > b.Name_data ? 1:-1))
        console.log(datax)



    }
    






return (
    <>


        {/* {gunlist?.map((item, index) => (
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
            ))} */}
    </>
)

};