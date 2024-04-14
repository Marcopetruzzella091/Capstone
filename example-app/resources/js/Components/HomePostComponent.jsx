import React from 'react'

export default function HomePostComponent() {
  return (
    <>
    <div className="section-box mt-4" id="portfolio">
    <div className="row">
      <div className="col-12 col-md-10 col-xl-8">
        <h6 className="title-heading mb-3" data-backdrop-text="Post">Post</h6>
        <h1>Ultimi post</h1>
       
      </div>
    </div>
    <div className="filter mt-4 mt-lg-5 mb-3">
      <ul>
        <li data-filter="all" className="mixitup-control-active">Visualizza tutti</li>
        <li data-filter=".category-1">Piu recenti</li>
        <li data-filter=".category-2">Piu popolari</li>
      </ul>
    </div>
    </div>
    </>
    
  )
}
