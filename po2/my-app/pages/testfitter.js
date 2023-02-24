import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';



export default function testfitter() {

    const [filter, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    // const [data, setdata] = useState()
    const [gunlist, setgunlist] = useState();
    
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            setfilterdata(response.data);
            console.log(response.data)
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

    return (
        <>
        <div className='row'>
            <select className='col-12 col-sm-1' onChange={(event) => {
                        setup(event.target.value)
                    }}>
                <option value={0}>ALL</option>
                <option value={1}>gun</option>
                <option value={2}>character</option>
                <option value={3}>car</option>

            </select>
            <select className='col-12 col-sm-1' onChange={(e) => setSortType(e.target.value)}>

            </select>
        </div>
            {filterdata?.map((item, index) => (
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
}