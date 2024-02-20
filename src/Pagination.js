import { useState } from "react"
import { act } from "react-dom/test-utils"

function Pagination({total,record,update,move,move1}){
    let n=Math.ceil(total/record)
    
let page=[]
    for( let i=1;i<=n;i++)
    page.push(i)

const[active,setActive]=useState(1)
const data=(n)=>{
    setActive(n)
}

const nextt = (e)=>{
    setActive(active+1)
}
    return(
        <div>
<ul className="pagination">
    <li className="page-item">
        <a className="page-link btn btn-success" onClick={move}>Prev</a>
    </li>
   {page.map((p)=>(
    <li className={`page-item ${active === p? "active":""}`}>
     <a className="page-link" onClick={()=>{update(p);data(p)}}>{p}</a>
 </li>
   ))}
   <li className="page-item">
    <a className="page-link btn btn-success" onClick={()=>{move1();nextt()}}>Next</a>
   </li>
</ul>
        </div>
    )
}
export  default Pagination;