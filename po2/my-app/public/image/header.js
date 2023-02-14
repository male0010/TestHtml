import Head from 'next/head'
import Image from 'next/image'
import img1 from "../image/logo.jpg"

// import styles from '@/styles/globals.css'


export default function header() {
    return (
        <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="container-fluid vh-100 bg">
                <div className="menu">
                    <div className="logo">
                        <Image src={img1}/>
                    </div>
                    <ul>
                        <li><a href="#">PRODUCTS</a></li>
                        <li><a href="#">CAMPAIGN</a></li>
                        <li><a href="#">MULTIPLAYER</a></li>
                        <li><a href="#">COMMUNITY</a></li>
                        <li><a href ="#" class="btn btn-primary  lead2">SIGN IN</a></li>
                    </ul>


                </div>


            </div>


        </header>



    )

}
