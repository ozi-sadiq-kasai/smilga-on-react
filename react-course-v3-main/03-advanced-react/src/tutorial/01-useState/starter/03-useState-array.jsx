import {data} from '../../../data.js'
import { useState } from 'react'

const Starter = () => {
 const [persons,setPersons]= useState(data)

  function handleRemove(id){
        const newPersons = persons.filter((person)=> person.id !== id)
  setPersons(newPersons)   
 }


  return (
    <>
     {persons.map((item)=>{
      const{id,name} = item
      return(
       <div key={id}>
       <p>{name}</p>
       <button onClick={ ()=> handleRemove(id)}>remove</button>
       </div>
      )
     })}
     <button  onClick={() => setPersons([])}className='btn'>Clear items</button>
    </>
  )
}
export default Starter