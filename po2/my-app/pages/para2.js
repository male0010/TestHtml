import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
export default function MyPage() {
    const [gunlist, setgunlist] = useState();
    const [arr, setarr] = useState("1");
    const [arrdata, setarrdata] = useState([]);
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

    function setuparr(x) {
        setarr(x)
        setarrdatax(x)
        // update query parameter 'type' in the URL with x
        const params = new URLSearchParams(window.location.search);
        params.set('type', x);
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }
    function setarrdatax(x) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            setarrdata(gunlist);
        } else {
            gunlist.forEach(element => {
                if (element['id_subtype'] == x) {
                    y.push(element)
                    console.log(element);
                }
            });
            setarrdata(y);
        }
    }
    const type1 = arrdata.filter(item => item.id_subtype >= 1 && item.id_subtype <= 5) || [];
    return (
        <div className="card text-center" value={0} onClick={(event) => {
            setuparr(event.target.value)
        }}>
            <div className="card-body">
                <p className="row " >
                    <button className="btn  col btnn" value={1} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1"
                        aria-expanded="true" aria-controls="multiCollapseExample1">PISTON</button>
                    <button className="btn btnn col" value={2} type="button" data-bs-toggle="collapse"
                        data-bs-target="#multiCollapseExample2" aria-expanded="true"
                        aria-controls="multiCollapseExample2">SMG</button>
                </p>
                <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                    setuparr(event.target.value)
                }}>
                    {type1.map((item) => (
                        <div key={item.id_data} className="row" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                            <div className=" card-body" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}  
