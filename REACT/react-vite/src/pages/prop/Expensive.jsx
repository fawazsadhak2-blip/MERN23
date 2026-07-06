import React, { useMemo, useState } from 'react'

const Expensive = () => {

    const [count,setCount]= useState(0);
    const [text,setText] = useState("");    

    const expensiveCalculation = useMemo(() => {
        console.log("Running expensive operation.... ")
        let total=0;
        for (let i=0; i<200000; i++){
            total+=count
        }
        return total
    },[count]) //only upon clicking count it re renders and not while inputting text

    // const expensiveCalculation = () => {
    //     console.log("Running expensive operation.... ")
    //     let total=0;
    //     for (let i=0; i<200000; i++){
    //         total+=count
    //     }
    //     return total
    // }

  return (
    <div>
        <div>
            <h1>Counter</h1>
            <button onClick={()=> setCount(count+1)}>Click</button>
            <p>Count: {count}</p>
            <input type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e)=> setText(e.target.value)} 
            />

            <div>
                <h1>Expensive calculation: {expensiveCalculation}</h1>
            </div>
        </div>
    </div>
  )
}

export default Expensive