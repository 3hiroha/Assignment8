import React, { useState } from 'react';

let StateAssignmentTwo=()=>{
    
    
    let [number1,setNumber1]=useState([]);
    let ranD=()=>{
        let newRandom = Math.floor(Math.random()*9);
        setNumber1([...number1,newRandom]);
    }
    return(
        <section>
            <button onClick={ranD}>Click me!</button>
            <div>
        {number1.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
      </div>
        </section>
    );
}
export default StateAssignmentTwo