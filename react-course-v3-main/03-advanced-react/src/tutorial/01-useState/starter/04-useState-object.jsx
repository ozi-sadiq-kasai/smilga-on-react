import { useState } from 'react';

const UseStateObject = () => {
 const[persons,setPersons]= useState({name: "ozi",age:40,hobby:'Netflix'})

 const handleChange = () =>{
  return(
   setPersons({name: "Leah",age:10,hobby:'Whimpy Kid'})
  )
 }
const{name,age,hobby} = persons
   return(
    <>
    <h1>{name}</h1>
    <h3>{age}</h3>
    <p>{hobby}</p>
    <button onClick={handleChange}className = 'btn'>Change Person</button>
    </>
   )
  } 

export default UseStateObject;
