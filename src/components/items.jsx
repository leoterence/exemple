import { useState } from "react"

export default function   Items({value,del}) {
  const [val,setval]= useState(value)
  const [writte,setwritte]=useState(true)
  function whritteup(){
    setwritte(!writte)
  }
  function upd(e){
    setval(e.target.value)
  }
  
  return (
   <li className=" p-1 flex flex-row rounded-sm ring">
      <input type="text" value={val} className="outline-none w-full" onChange={upd} disabled={writte}/>
      <button type="button" className="bg-pink-500/25 p-1 text-white w-20 rounded-md hover:bg-violet-500/25" onClick={whritteup}>change</button>
      <button type="button" className="bg-pink-500/25 p-1 text-white w-20 rounded-md hover:bg-violet-500/25 ml-2" onClick={()=>{del(value)}}>supprimer</button>
   </li>
  )
}