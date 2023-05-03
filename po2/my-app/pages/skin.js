import Head from "next/head"
import Image from 'next/image';
import cam111 from "../public/image/cam1.jpg"
import cam2 from "../public/image/s2.jpg"
import s3 from "../public/image/s3.jpg"
import s4 from "../public/image/s4.jpg"
import Header1 from "../public/header2";
import TESTFOOT from "./testfoot"
import Link from 'next/link';

export default function skin() {
    return (
        <>
            <Head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header1 />
            <body>
                <div className="container accordion-body cam1">
                    <div className="card cam1">
                        <Image className=" accordion-flush imgg" src={cam111} height={500} width={1200} alt="#" ></Image>
                        <div className="card-body">
                            <h3 className="card-title">Season 02’s Ronin-themed Battle Pass allows players to choose their own path of the warrior as they navigate the newly updated Battle Pass System, inspired by the seven Bushido virtues.</h3>
                            <p className="card-text camtextsm">Battle Pass and Tier skips, or equivalent versions, will be accessible in Modern Warfare II once the season 1 Battle Pass, or equivalent system, is made available in game. Battle Pass redemption applies to one season of Modern Warfare II Battle Pass, or equivalent system only. For more information</p>
                            <p className="card-text text-lg-end">OCTOBER 13, 2022 by James Mattone</p>
                        </div>
                    </div>

                </div>
                <hr className="divider" />

                <div className="container accordion-body cam1">
                    <div class="container coo accordion-body cam1  ">
                        <div>

                            <h2 className="card-title text-start">GET UP TO
                                1400 CP BACK</h2>
                            <h6 className="card-text ">Play through all 20 sectors and earn up to 1400 Call of Duty® Points back. Plus, instantly unlock a new operator, Ronin.</h6>
                        </div>
                        <div>
                            <Image className="accordion-flush imggg " src={cam2} height={250} width={400} alt="#" />

                        </div>

                    </div>

                    <br></br><br></br><br></br>
                    <div class="container coo accordion-body cam1 ">
                        <div>
                            <Image className="accordion-flush imgggg " src={s3} height={250} width={400} alt="#" />

                        </div>
                        <div>
                            <h2 className="card-title text-start">BATTLE PASS</h2>
                            <h6 className="card-text ">Grants access to unlock:

                                New Operator: Ronin

                                + 100 Battle Pass Items

                                Up to 1400 COD Points back</h6>
                            <p className="card-text text-lg-end">1100 CP - PURCHASE ON IN-GAME STORE</p>

                        </div>

                    </div>

                    <br></br><br></br><br></br>

                    <div class="container coo accordion-body cam1 ">
                        <div>

                            <h2 className="card-title text-start">BATTLE PASS
                                BUNDLE</h2>
                            <h6 className="card-text ">Includes the Battle Pass
                                and 20 Battle Token Tier Skips*

                                PlayStation® Exclusive** - additional
                                5 Battle Token Tier Skips</h6>
                        </div>
                        <div>
                            <Image className="accordion-flush imggg " src={s4} height={250} width={400} alt="#" />

                        </div>

                    </div>
                   
                   


                </div>
                <div className="cam2">
                        <Link href="/" className="btnnn text-center justify-content-end ">back to home</Link>
                    </div>
                    <hr className="divider" />

            </body>

            <TESTFOOT />

        </>
    )
}