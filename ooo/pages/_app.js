import '@/styles/globals.css'
import '../styles/Home.css';
import '../styles/stylelogin.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <Component {...pageProps} />
}
