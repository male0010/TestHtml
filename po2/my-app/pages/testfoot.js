import React from 'react';
import Home from './pro';
import Link from 'next/link';
export default function TESTFOOT() {
    return (
        <footer className="container footertest card-footer fff ">
            <div className="row card-body  justify-content-between ">
                <div className="grid col-sm-3 card-title lll">
                <Link className='link linkk2' href={"/"} >
                    <h3 className='link '>HOME</h3></Link>
                    <br></br>
                    <ul className='card-text linkk  link lll'>
                        <Link className='link linkk2' href={"/pro"} >
                            <li >PRODUCTS</li></Link>
                        <br></br>
                        <Link className='link linkk2' href={"/cam"} >
                        <li>CAMPAIGN</li></Link>
                        <br></br>
                        <Link className='link linkk2' href={"/multi"} >
                        <li>MULTIPLAYER</li></Link>
                        <br></br>
                        <Link className='link linkk2' href={"/cam"} >
                        <li>COMMUNITY</li></Link>
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
                    <Link className='link ' href={"/item"} >
                        <li>GUN</li></Link>
                        <br></br>
                        <Link className='link ' href={"/item"} >
                        <li>CHARACTER</li></Link>
                        <br></br>
                        <Link className='link ' href={"/item"} >
                        <li>CAR</li></Link>
                        <br></br>
                    </ul>
                </div>
                <div className="grid col-sm-3 ">
                    <h3 className='link '>COMING SOON...</h3>
                    <form>
          
        </form>
                
                </div>
            </div>


            <div class="d-flex flex-column flex-sm-row  py-3 my-5 border-top linkk3  justify-content-center text-center">
                <p>© 2023, Epic Games, Inc. Quixel, Megascans, and Unreal Engine are trademarks  trademarks of Epic Games, Inc. in the USA .</p>
                <ul class="list-unstyled d-flex">

                </ul>
            </div>
        </footer>



    );
}
