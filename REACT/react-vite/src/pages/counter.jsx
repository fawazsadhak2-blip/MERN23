import React, {useState} from 'react'

const Counter = () => {
    // var value = 5
    var [value, setValue] = useState(0)

    var [name, setname] = useState("Ram") 

    var [valid,setvalid] = useState(false)
  return (
    <div>
        {/* Number */}
        <div className='flex flex-col gap-2 p-5'>
        <h1>Counter</h1>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl'>{value}</h1>
            <div className='flex gap-4'>
                <button className='py-2 px-6 rounded-lg bg-green-600 text-white' onClick={()=>{
                    setValue(value-1)
                }}>-</button>
                <button className='py-2 px-6 rounded-lg bg-red-700 text-white' onClick={()=>{
                    setValue(value+1)   //re-render              
                    console.log("value",value);
                    
                    
                }}>+</button>
            </div>
        </div>
    </div>

    {/* String */}
     <div className='flex flex-col gap-2 p-5'>
        <h1>Counter</h1>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl'>{name}</h1>
            <div className='flex gap-4'>
                <button className='py-2 px-6 rounded-lg bg-green-600 text-white' onClick={()=>{
                    setname("Fawaz")                    
                }}>Change</button>
                
            </div>
        </div>
    </div>

    {/* boolean */}
    <div className='flex flex-col gap-2 p-5'>
        <h1>Counter</h1>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-3xl'>{valid ? "True" : "False"}</h1>
            <div className='flex gap-4'>
                <button className={`py-2 px-6 rounded-lg text-white ${valid ? "bg-green-600" : "bg-red-600"}`} onClick={()=>{
                    setvalid(!valid)                    
                }}>Toggle</button>
                
            </div>
        </div>
    </div>

    </div>
    
    
  )
}

export default Counter