import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react'
import '@/styles/fortest.css'
import '@/styles/index.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>

      <Head>

        <title>Call of DUTY®</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </>

  )
}

