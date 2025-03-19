import {useState} from 'react'
import Liste from './components/liste'
export default function Todo() {
    /*Liste de taches a faire*/
    const [taches,Settaches]=useState([])

     /*fonction pour mettre a jour la liste des taches*/
    function addT(){
        Settaches([...taches,tache])
        setTache('')
      }

    /*controleur des entrées des taches*/
    const [tache,setTache]=useState('')

     /*fonction pour mettre a jour les entrées*/
     function setval(e){
       setTache(e.target.value)
         }function del(e){
          const valeur = taches.filter(val=>val ==e)
          Settaches([valeur])
        }

  return (
    <div className='border w-110 pt-3 mx-auto 4 bg-linear-to-t from-violet-500 to-fuchsia-500'>
        <form className="flex flex-row  w-99 mx-auto mb-5 text-white gap-1">
            <input type="text" placeholder="New tache" className="border p-1 w-full outline-none" value={tache} onChange={setval}/>
            <button type="button" className="border w-35 rounded-sm hover:bg-violet-400/50 " onClick={addT}>Ajouter Tache</button>
        </form>
        <Liste taches={taches} del={del} />
    </div>
  )
}