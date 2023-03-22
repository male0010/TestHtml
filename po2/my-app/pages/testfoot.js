import React from 'react';
import Home from './pro';
import Link from 'next/link';
export default function TESTFOOT() {
    return (
        <footer className="container footertest card-footer ">
            <div className="row card-body  ">
                <div className="col-12 col-sm-3 card-title">
                    <h3>HOME</h3>
                    <br></br>
                    <ul className='card-text'>
                        <Link href={"/pro"} >
                            <li>PRODUCTS</li></Link>
                        <br></br>
                        <li>CAMPAIGN</li>
                        <br></br>
                        <li>MULTIPLAYER</li>
                        <br></br>
                        <li>COMMUNITY</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 card-title">
                    <Link href={"/pro"} >
                        <h3>PRODUCTS</h3></Link>
                    <br></br>
                    <ul className='card-text'>
                        <li>GAMES</li>
                        <br></br> <Link href={"/item"} >
                            <li>ITEM</li></Link>
                        <br></br><Link href={"/category"} >
                            <li>CATEGORY</li></Link>
                        <br></br>
                        <li>SHOP</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 card-title">
                    <Link href={"/item"} >
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
                <div className="col-12 col-sm-3">
                    <h3>COMING SOON...</h3>

                </div>
            </div>
        </footer>
    );
}
