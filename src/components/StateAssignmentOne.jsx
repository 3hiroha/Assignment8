import React, {useState} from 'react'

function StateAssignmentOne() {
    const[number, setNumber] = useState(0);
    
    const handleClick=() => {
        setNumber(number+1)

    }
  
    return (
    
    
        <section>
            <button onClick={handleClick}>{number}</button>
        </section>
            
            
  )
}

export default StateAssignmentOne