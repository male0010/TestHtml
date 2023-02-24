import axios from 'axios';
import { useState } from "react";
import Image from 'next/image';
export default function test() {

    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
        });
    };
    getgunlist()

    const [search, setsearch] = useState('')

    return (
        <>
        {/* //search */}
            <div> 
                <input
                    placeholder="search...."
                    onChange={(event) => {
                        setsearch(event.target.value)
                    }}
                />
            <div>
                <br>
                </br>
            </div>
                <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                    {gunlist?.filter((item) => {
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