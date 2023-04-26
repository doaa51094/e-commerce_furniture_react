import React from 'react'
import All from './All'
import BestSeller from './BestSeller'
import Chairs from './Chairs'
import Console from './Console'


function Category() {
  return (
    <>
    <section className='pt-5 ' id='Category'>
      <div className="container pt-5 p-4">
      <div className='d-flex justify-content-center'>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active"  data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">ALL</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-bestSeller" type="button" role="tab" aria-controls="pills-bestSeller" aria-selected="false">BEST SELLER</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-chairs" type="button" role="tab" aria-controls="pills-chairs" aria-selected="false">CHAIRS</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link"  data-bs-toggle="pill" data-bs-target="#pills-console" type="button" role="tab" aria-controls="pills-console" aria-selected="false">CONSOLE</button>
  </li>
 
</ul>
      </div>
      
      <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
  <div className="row g-4">
     <All/>
      
      </div>
        </div>
  <div className="tab-pane fade" id="pills-bestSeller" role="tabpanel" aria-labelledby="pills-bestSeller-tab" tabIndex="0">
    <div className="row g-4">
  <BestSeller/>
    </div>
  </div>
  <div className="tab-pane fade" id="pills-chairs" role="tabpanel" aria-labelledby="pills-chairs-tab" tabIndex="0">
    <div className="row g-4">
 <Chairs/>
    </div>
  </div>
  <div className="tab-pane fade" id="pills-console" role="tabpanel" aria-labelledby="pills-console-tab" tabIndex="0">
    <div className="row g-4">
 <Console/>
    </div>
  </div>
</div>
    

      </div>
    </section>
    
    </>
  )
}

export default Category