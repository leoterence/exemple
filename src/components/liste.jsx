import Items from "./items"
export default function Liste({taches,del}) {
  
  return (
   <ul className=" w-99 mx-auto flex flex-col gap-y-2 mb-10">
      {taches.map((value,index)=>{
        return(
          <Items key={index} value={value} del={del}/>
        )
      })}
   </ul>
  )
}