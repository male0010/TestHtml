// import styles from '@/styles/globals.css'
import img8 from "../image/w2.jpg"



export default function header() {
    return (
        <>

        
            <nav class="navbar fixed-top navbarr">
                
                <div class="container">
                <div className="col ">
                        <input className="  search col-2 "
                            placeholder="Search.... "
                            onChange={(event) => {
                                setsearch(event.target.value)
                            }}
                        />
                    </div>
                    <br></br>
                    <br></br>  
                    
                             
                    <div className="d-flex col-6 ">
                        <select className='d-flex all col-sm-2 ' onChange={(event) => {
                            combine(event.target.value, finalsort)
                        }}>

                            <option value={0}>ALL</option>
                            <option value={1}>gun</option>
                            <option value={2}>character</option>
                            <option value={3}>car</option>

                        </select>
                    -
                        <select className='d-flex all col-sm-2' onChange={(event) => {
                            combine(finalfilter, event.target.value)
                        }}>

                            <option value="0">Sort</option>
                            <option value="1">a-z</option>
                            <option value="2">z-a</option>
                        </select>
                    </div>
                   
                </div>
            </nav>









        </>
    )
}