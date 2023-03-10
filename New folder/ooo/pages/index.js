import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  async function login(e){
    e.preventDefault();
    const [username,password] = e.target.elements;
    var formdata = new FormData;
    formdata.append("user",username.value);
    formdata.append("pass",password.value);
    const config = {
headers: { "content-type": "multipart/form-data" },
};
await axios.post("http://localhost:8080/TestHtml/login.php",formdata,config).then((response) => {
        var datax = response.data ;
        if (datax.status == "success"){
            alert("Welcome " + datax.first_name + " " +datax.last_name);
        } else if (datax == "no"){
            alert("no data")
        }else{
            alert ("fail") 
            console.log(datax)       
        }
});
}

  return (
    <>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.3/axios.min.js" integrity="sha512-L4lHq2JI/GoKsERT8KYa72iCwfSrKYWEyaBxzJeeITM9Lub5vlTj8tufqYk056exhjo2QDEipJrg6zen/DDtoQ==" 
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <header className="top-header">
            <a className="menu-item brand" style={{alignItems: 'baseline'}} href="">หน้าแรก</a>
            <a className="menu-item" style={{alignItems: 'baseline'}} href="">แนะนำ</a>
            <a className="menu-item" href="">ของกิน</a>
            <a className="menu-item" style= {{alignItems: 'flex-end'}} href="">Login</a>
        </header>
      </Head>
      <main className={styles.main}>
      <form onSubmit= "login(event)" > 
        <div className="container">
            <div className="bg">
            
                <h1>Login</h1>
            <div className="email">
                <input type="email" name="username" placeholder="email"/>
            </div>
            <div className="password">
                <input type="password" name="password"  placeholder="password"/>
            </div>
            <div className="submit">
                <input type="submit" value="Login"/>
                <Link  href="/register"><button type="button" className="col align-self-end">register</button></Link>
                <Link  href="/forget"><button type="button" className="col align-self-end" >forget</button> </Link>
            </div>
            </div>
        </div>
        </form>

      </main>
    </>
  )
}
