import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {
    const [arr, setarr] = useState("1");
 
    const [arrdata, setarrdata] = useState([]);   
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
            let datax = response.data
            setgunlist(datax)
            setarrdata(datax)
            // console.log(datax)

        });
    };
    useEffect(() => {
        getgunlist()
    }, []);

    function setuparr(x) {
        setarr(x)
        setarrdatax(x)

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
    const type2 = arrdata.filter(item => item.id_subtype >= 6 && item.id_subtype <= 8) || [];
    const type3 = arrdata.filter(item => item.id_subtype >= 9 && item.id_subtype <= 10) || [];





    return (
        <>
            <body className='lg'>
                <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>

                            <button class="btn  col btnn" value={1} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1"
                                aria-expanded="true" aria-controls="multiCollapseExample1">PISTON</button>
                            <button class="btn btnn col" value={2} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample2" aria-expanded="true"
                                aria-controls="multiCollapseExample2">SMG</button>
                            <button class="btn btnn col" value={3} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample3" aria-expanded="true"
                                aria-controls="multiCollapseExample3">ASSAULT RIFLE</button>
                            <button class="btn btnn col" value={4} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample4" aria-expanded="true"
                                aria-controls="multiCollapseExample4">SNIPER RIFLE</button>
                            <button class="btn btnn col" value={5} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample5" aria-expanded="true"
                                aria-controls="multiCollapseExample5">SHOTGUN</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type1.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>

                <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            <button class="btn btnn col" value={6} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6"
                                aria-expanded="true" aria-controls="multiCollapseExample6">BIKER</button>
                            <button class="btn btnn col" value={7} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample7" aria-expanded="true"
                                aria-controls="multiCollapseExample7">CAR</button>
                            <button class="btn btnn col" value={8} type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample8" aria-expanded="true"
                                aria-controls="multiCollapseExample8">FLY</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type2.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>

                <div class="card text-center">
                    <div class="card-body">
                        <p className="row " onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                                <button class="btn   btnn col" value={9} type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample9"
                                    aria-expanded="true" aria-controls="multiCollapseExample9">MALE</button>
                                <button class="btn  btnn  col" value={10} type="button" data-bs-toggle="collapse"
                                    data-bs-target="#multiCollapseExample10" aria-expanded="true"
                                    aria-controls="multiCollapseExample10">FEMALE</button>
                        </p>
                        <div className=' row row-cols-2 ' value={0} onClick={(event) => {
                            setuparr(event.target.value)
                        }}>
                            {type3.map((item) => (
                                <div key={item.id_data} className="row" >
                                    <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
                                        <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body itemm">
                                            <h5 className="itemm">
                                                {(item.Name_data).toUpperCase()}
                                                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
                                            </h5>
                                        </div>
                                    </div>

                                </div>

                            ))}</div>


                    </div>

                </div>
            </body>
        </>
    )
}