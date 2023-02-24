
import Image from "next/image"
// import mw from "../public/image/mw.png"


// import styles from '@/styles/globals.css'

export default function sidebar() {
    return (
      <div class=" p-3  sidebar ">
       <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      {/* <svg class="bi pe-none me-2" width="30" height="24"><Image src={mw} alt="" width="100" height="70" /></svg> */}
      {/* <span class="fs-5 fw-semibold">Collapsible</span> */}
    </a> 
      <ul class="list-unstyled ps-0">
        <li class="mb-1 mb">
          <button class="  dropdown-toggle btn btn-toggle d-inline-flex align-items-center   " data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false ">
          Type
          </button>
          <div class="collapse " id="home-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ">
              <li><a href="#" class=" mb">Overview</a></li>
              <li><a href="#" class="mb">Updates</a></li>
              <li><a href="#" class="mb">Reports</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1 mb">
          <button class=" btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Sort
          </button>
          <div class="collapse" id="dashboard-collapse">
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class=" mb">Overview</a></li>
              <li><a href="#" class=" mb">Weekly</a></li>
              <li><a href="#" class=" mb">Monthly</a></li>
              <li><a href="#" class=" mb">Annually</a></li>
            </ul>
          </div>
        </li>
        <li class="mb-1 mb">
          <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            Orders
          </button>
          <div class="collapse" id="orders-collapse" >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class=" mb">New</a></li>
              <li><a href="#" class="mb">Processed</a></li>
              <li><a href="#" class=" mb">Shipped</a></li>
              <li><a href="#" class=" mb">Returned</a></li>
            </ul>
          </div>
        </li>
        <li class="border-top my-3"></li>
      </ul>
    </div>
    )

        
        
        


}