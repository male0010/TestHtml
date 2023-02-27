import axios from 'axios';
import { useState } from "react";
import Image from 'next/image'
import { useEffect } from 'react';


export default function testsort() {
    const [search, setsearch] = useState('')
    const [sort, setsort] = useState();
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            setsort(response.data);
            // handlesort1(response.data);
            // handlesort2(response.data);
            // tysort(response.data, 1)
            // setfilterdata(response.data);
            // console.log(response.data)
        });
    };

    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])

    // function handlesort1(x){
    //     var datax = new Array;
    //     var datay = gunlist;
    //     datax = x.sort((a,b) => {
    //         return a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1
    //     })
    //     setsort(gunlist)

    // }
    // function handlesort2(x){
    //     var datax = new Array;
    //     var datay = gunlist;
    //     datax = x.sort((a,b) => {
    //         return a.Name_data.toUpperCase() >  b.Name_data.toUpperCase() ? 1 : -1
    //     })
    //     setsort(gunlist)

    // }
    function tysort(x1) {

        var datax = new Array;
        var datay = gunlist;
        // datax = x.sort((a, b) => (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1))
        // console.log(datax)

        if (x1 == 1) {
            datax = datay.sort(function (a, b) {
                return (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1);
            }); console.log(datax);setsort(datax)

        }
        else if (x1 == 2) {
            datax = datay.sort(function (a, b) {
                return (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1);
            }); console.log(datax); setsort(datax)
        }
        else {
           console.log(datay); setsort(datay);

        }

    }



    // users.sort(function (a, b) {
    //     if (a.name < b.name) {
    //       return -1;
    //     }
    //     if (a.name > b.name) {
    //       return 1;
    //     }
    //     return 0;
    //   });

    // function Sortlow(x) {
    //     var datay = new Array;
    //     var datay = gunlist;
    //     datay = x.sort((a, b) => (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1))
    //     // console.log(datay)
    // }

    // function setsort(){
    //     Sortup(x)=(1)
    //     Sortlow(x)=(2)


    // }

    return (
        <>
            <div>
                <input
                    placeholder="search...."
                    onChange={(event) => {  
                        setsearch(event.target.value)
                    }}
                />
            </div>
            <select className='col-12 col-sm-1' onChange={(event) => {
                tysort(event.target.value)
            }}>
                <option value={0} >ALL</option>
                <option value={1}>a</option>
                <option value={2} >z</option>
            </select>

            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
               {sort?.filter((item) => {
                    if (search == "") {
                        return item;
                    } else if (item.file_name.toLowerCase().includes(search.toLowerCase())) {
                        return item;
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
        </>
    )

};