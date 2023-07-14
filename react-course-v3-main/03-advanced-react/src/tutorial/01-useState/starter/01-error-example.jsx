import { useState } from "react";

const ErrorExample = () => {
 const [increase,setIncrease] = useState(0)

 const handleIncrease = () => setIncrease(increase + 1)
  return (
   <>
    <h2>You Clicked {increase} times</h2>
    <button className ="btn" onClick ={handleIncrease}>Increase</button>
   </>
  ) 
};

export default ErrorExample;
