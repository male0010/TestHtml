import Head from 'next/head'
import Image from 'next/image'
import img1 from "../image/logo.jpg"

// import styles from '@/styles/globals.css'


export default function header() {
    return (
        <header className="container-fluid vh-100 bg">
            <nav className="navbar  navbar-expand-lg   ">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <div className="menu accordion-header">
                    <div className="logo">
                        <Image src={img1} className='indlogo' />
                    </div>
                    <ul className="navbar navbar-expand-lg neno ">
                        <li><a href="pro">PRODUCTS</a></li>
                        <li><a href="cam">CAMPAIGN</a></li>
                        <li><a href="multi">MULTIPLAYER</a></li>
                        <li><a href="commu">COMMUNITY</a></li>
                        <li className='justify-content-end '><a href="#" class="btn btn-primary  lead2 ">SIGN IN</a></li>
                    </ul>
                </div>
            </nav>
        </header>



    )

}
