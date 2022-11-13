import {useState} from 'react'

function State() {

   const [number,setNumber] = useState(51)
   function handleState() {
      // setNumber((Math.random()* 100).toFixed(0))
      setNumber((prev)=>{
         console.log(prev);
         return prev+1;
      })
      
   }
   return (
      <div className="state-demo" style={{backgroundColor:'white',padding:'2em'}}>
         <h2>This is area <b>{number}</b></h2>
         <h1 id="fill">Inner text</h1>
         <button onClick={handleState}>CLick</button>
      </div>
      );
}

export default State;

