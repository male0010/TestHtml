import Head from "next/head"
import Image from 'next/image';
import cam1 from "../public/image/cam1.jpg"
import cam2 from "../public/image/cam2.jpg"
import Header1 from "../public/header2";
import TESTFOOT from "./testfoot"
export default function cam() {
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
                        <Image className=" accordion-flush imgg" src={cam1} height={500} width={1200} alt="#" ></Image>
                        <div className="card-body">
                            <h3 className="card-title">CALL OF DUTY®: MODERN WARFARE® II CAMPAIGN REWARDS: EARN DURING EARLY ACCESS FOR A HEAD START AT LAUNCH</h3>
                            <p className="card-text camtextsm">Play the Modern Warfare® II Campaign to get Captain Price’s signature Weapon Blueprint and over a dozen other rewards for use in Multiplayer, Special Ops, and Call of Duty®: Warzone™ 2.0. Preorder to get Campaign Early Access for a head start on unlocking all of these before launch.</p>
                            <p className="card-text text-lg-end">OCTOBER 13, 2022 by James Mattone</p>
                        </div>
                    </div>

                </div>
                <hr className="divider" />

                <div className="container accordion-body cam1">
                    <div className="card cam1">
                        <div className="card-body">
                            <h5 className="card-text textcam ">
                                This is everything you can unlock in chronological mission order:
                            </h5>
                        </div>
                        <Image className=" accordion-flush imgg" src={cam2} height={500} width={1200} alt="#" ></Image>
                        <div className="card-body">
                            <p className="card-text textcam ">
                                <ul>
                                    <li >
                                       -Calling Card: Soap s Determination
                                    </li>
                                    <li >
                                       -Emblem:“What s Done Is Done
                                    </li>
                                    <li >
                                        -30 Minute Double XP Token
                                    </li>
                                    <li >
                                        -30 Minute Double Weapon XP Token
                                    </li>
                                    <li >
                                        -Base Operator: Chuy
                                    </li>
                                    <li >
                                        -Base Operator: Nova
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
            </body>
            
            <TESTFOOT/>
           
        </>
    )
}