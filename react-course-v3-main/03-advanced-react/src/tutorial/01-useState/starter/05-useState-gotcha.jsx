import { useState } from "react";

const UseStateGotcha = () => {
 const [count, setCount] = useState(0)

 function handleCount(){
   setCount((currentState)=>{
    console.log(currentState +1)
    return currentState + 1
   })
    
 }
 


  return(
   <>
    <h2>{count}</h2>
    <button onClick = {handleCount }>Click</button>
   
   </>
  )
   
};

export default UseStateGotcha;


