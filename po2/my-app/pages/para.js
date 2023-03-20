
import Image from 'next/image'
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import Head from 'next/head'
import Link from "next/link"
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
        getgunlist();
        // parse the 'type' query parameter from the URL and call setuparr
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type) {
            setuparr(type);
        }
    }, []);

    function setuparr(x) {
        setarr(x)
        setarrdatax(x)
        // update query parameter 'type' in the URL with x
        const params = new URLSearchParams(window.location.search);
        params.get('subtype', x);
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        console.log(params);
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
    return (<>
       

        <div className="card text-center lg" value={0} onClick={(event) => {
            setuparr(event.target.value)
        }}>
            <div className="card-body">
                <p className="row " >
                    <Link href={"/subtype/para6?subtype=6"} className="btn  col btnn">BIKER <button  type="button"
                    ></button></Link>
                    <Link href={"/subtype/para7?subtype=7"} className="btn  col btnn">CAR <button type="button"
                    ></button></Link>
                    <Link href={"/subtype/para8?subtype=8"} className="btn  col btnn">FLY<button  type="button"
                    ></button></Link>
                     <Link href={"/subtype/para9?subtype=9"} className="btn  col btnn">MALE<button  type="button"
                    ></button></Link>
                     <Link href={"/subtype/para10?subtype=10"} className="btn  col btnn">FEMALE<button  type="button"
                    ></button></Link>


                </p>
            </div>
        </div>
    </>
    );
} 
