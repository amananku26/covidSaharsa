import React, { useState } from 'react'
import './Help.css'


function Cards () {

  return (
    <div className='app'>
        <div style={{marginTop:"15px"}}>
            <p style={{margin:"10px"}}>All Information are verified</p>
             <iframe width="360" height="150" src="https://www.youtube.com/embed/-t9QC6mgvvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <p style={{margin:"10px"}}></p>
             <iframe width="360" height="150" src="https://www.youtube.com/embed/cro-xUTsYJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <p style={{margin:"10px"}}></p>
        </div>
   
    </div>
  )
}

export default Cards