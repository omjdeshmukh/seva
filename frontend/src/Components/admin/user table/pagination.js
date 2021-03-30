import React, { useState } from 'react'


function Paginaion(props){
   const { totalsuggestions , postperpages , paginate } = props
   //console.log(postperpages)
   const pageNumbers= [];

   for(let i=1 ; i <= Math.ceil(totalsuggestions && totalsuggestions.length / postperpages) ; i++){
       pageNumbers.push(i)
   }
   //console.log(pageNumbers)
    return(
        <nav>
            <ul className="pagination mt-5">
                {pageNumbers.map((numbers) =>{
                    return(
                        <li className="page-item">
                            <a onClick ={() =>{paginate(numbers)}} className="page-link">
                                {numbers}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Paginaion;