import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';

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
    const [filter, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    const [sort, setsort] = useState();
    const [search, setsearch] = useState('')
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            setfilterdata(response.data);
            setsort(response.data);
        });
    };

    //เพื่อโหลดภาพ
    async function loadfile(event, urls, file_name) {
        event.preventDefault();
        const config = {
            headers: { "content-type": "image/jpeg" },
            responseType: "blob"
        }
        await axios.get(urls, config).then((response) => {
            console.log(response.data)

            var url = window.URL.createObjectURL(new Blob([response.data]));
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

    //filter
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
    function tysort(x1) {

        var datax = new Array;
        var datay = filterdata;
        // datax = x.sort((a, b) => (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1))
        // console.log(datax)

        if (x1 == 1) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() > b.Name_data.toUpperCase() ? 1 : -1);
            }); setsort(datax)

        }
        else if (x1 == 2) {
            datax = datay.sort(function (a, b) {

                return (a.Name_data.toUpperCase() < b.Name_data.toUpperCase() ? 1 : -1);
            }); console.log(datax); setsort(datax)
        }
        else {
            setsort(datay);

        }

    }
    function combined(x,y){
        const datax = sort;
        const datay = filterdata;
        datax = get.sort(x) }
            
    return (
        <>
            {/* <header>
                <div >


                    <nav className="navbar navbar-expand-lg  menu2">
                        <div className="container-fluid menu2"><a href="/">
                            <Image src={img4} alt="" width="250" height="70" /></a>


                            <div className="collapse navbar-collapse menu2" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu2">
                                    <li className="nav-item dropdown menu2">

                                        {gunlist?.map((item, index) => (
                                            <li class={"nav-item dropdown" + item.id}>
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown
                                                </a>
                                                <ul class="dropdown-menu 2" aria-labelledby="navbarDropdown">
                                                    <li><a class="dropdown-item" href="#">{item.file_name}</a></li>
                                                    <li><a class="dropdown-item" href="#">{item.file_name}</a></li>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <li><a class="dropdown-item" href="#">{item.file_name}</a></li>
                                                </ul>
                                            </li>
                                        ))} </li>
                                    <li className="nav-item dropdown menu2">
                                        <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            NEWS
                                        </a>

                                    </li>
                                    <li className="nav-item dropdown menu2">
                                        <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ESPORTS
                                        </a>

                                    </li>
                                    <li className="nav-item dropdown menu2">
                                        <a className="nav-link dropdown-toggle menu2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SHOP
                                        </a>

                                    </li>
                                </ul>
                                <form className="d-flex menu2">
                                    <input className="form-control me-2 search menu4" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-primary lead2" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header> */}
            {/* //search */}
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
                        tysort(event.target.value)
                    }}>
                        <option value={0} >ALL</option>
                        <option value={1}>a</option>
                        <option value={2} >z</option>
                    </select>
                </div>
                <div>
                    <br>
                    </br>
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