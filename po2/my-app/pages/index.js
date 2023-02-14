import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import img1 from "../public/image/callbg.jpg"
import Header0 from "../public/image/header"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const card = [
  //   {
  //     image: img,
  //     title: "cute",
  //     text: "dhjshdjshdjk",
  //     dow: "download"
  //   },
  //   {
  //     image: img,
  //     title: "Card title",
  //     text: "dhjshdjshdjk",
  //     dow: "download"
  //   }
  //   , {
  //     image: img,
  //     title: "Card title",
  //     text: "dhjshdjshdjk",
  //     dow: "download"
  //   }

  // ]


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header0/>
 

      {/* head */}

      
      {/* <div className='container'>
        <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
          {card.map((item, index) => (
            <div className="col">
              <div className="card" >
                <Image width={245} height={200} src={item.image}
                  className="card-Image-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href="#" className="btn btn-primary">{item.dow}</a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div> */}
    </>
  )
}
