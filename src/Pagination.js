import React from 'react'
import Test from './Test'

export default function Pagination({postsPerPage, totalPosts, paginate}) {

    window.acountstatementView = 1;

    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }    
    return (
        <React.Fragment>
            <ul id="pageNumberContent" class="pages">     
            <li id="prev"><a onClick = {()=>{}} className={`${(pageNumbers > 1) ? "": "disable"}`}>Prev</a></li>
            {pageNumbers.map(number =>(
               <li id="pageNumber"  key={number}>  <a className={`${(number==1) ? "select": ""}`} onClick={() => paginate(number)}  style={{cursor:'pointer '}}>
              {number}
            </a></li>
            ))}  	
            <li id="next"><a onClick = {()=>{}} className={`${(pageNumbers.length >= 2) ? "": "disable"}`} >Next</a></li>
            </ul>       
            {/* <Test/>  */}
        </React.Fragment>
    )
}