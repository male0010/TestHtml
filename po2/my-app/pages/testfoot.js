import React from 'react';
import Home from './pro';
import Link from 'next/link';
export default function TESTFOOT() {
    return (
        <footer className="container footertest card-footer fff ">
            <div className="row card-body  justify-content-between ">
                <div className="grid col-sm-3 card-title lll">
                    <h3 className='link '>HOME</h3>
                    <br></br>
                    <ul className='card-text linkk  link lll'>
                        <Link className='link linkk2' href={"/pro"} >
                            <li >PRODUCTS</li></Link>
                        <br></br>
                        <li>CAMPAIGN</li>
                        <br></br>
                        <li>MULTIPLAYER</li>
                        <br></br>
                        <li>COMMUNITY</li>
                    </ul>
                </div>
                
                <div className="grid col-sm-3 card-title linkk lll">
                    <Link className='link' href={"/pro"} >
                        <h3>PRODUCTS</h3></Link>
                    <br></br>
                    <ul className='card-text'>
                        <li>GAMES</li>
                        <br></br> <Link className='link linkk2' href={"/item"} >
                            <li>ITEM</li></Link>
                        <br></br><Link className='link linkk2' href={"/category"} >
                            <li>CATEGORY</li></Link>
                        <br></br>
                        <li>SHOP</li>
                    </ul>
                </div>
                <div className="grid col-sm-3 card-title linkk lll">
                    <Link className='link ' href={"/item"} >
                        <h3>ITEM</h3></Link>
                    <br></br>
                    <ul className='card-text'>
                        <li>GUN</li>
                        <br></br>
                        <li>CHARACTER</li>
                        <br></br>
                        <li>CAR</li>
                        <br></br>
                    </ul>
                </div>
                <div className="grid col-sm-3 ">
                    <h3 className='link '>COMING SOON...</h3>
                    <form>
          
        </form>
                
                </div>
            </div>


<<<<<<< HEAD
            <div class="d-flex flex-column flex-sm-row  py-3 my-5 border-top linkk3  justify-content-center text-center">
                <p>© 2023, Epic Games, Inc. Quixel, Megascans, and Unreal Engine are trademarks  trademarks of Epic Games, Inc. in the USA .</p>
=======
            <div class="d-flex flex-column flex-sm-row  py-3 my-5 border-top linkk3 align-items-center">
                <p>© 2023, Epic Games, Inc. Quixel, Megascans, and Unreal Engine are trademarks  trademarks of Epic Games, Inc. in the USA</p>
>>>>>>> 6797c3714a2c1ff8e23c7d7bc3ff3251fafd6f79
                <ul class="list-unstyled d-flex">

                </ul>
            </div>
        </footer>



    );
}
