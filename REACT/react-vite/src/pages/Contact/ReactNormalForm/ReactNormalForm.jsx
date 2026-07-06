import React, { useState } from 'react'

const ReactNormalForm = () => {
    const [name,SetName] = useState("")
    const [email,SetEmail] = useState("")

  return (
    <div className="p-2">
        <div className="flex flex-col gap-5 border shadow-lg p-5 rounded-lg">
        <h2 className='text-2xl font-body text-center'>Contact Form</h2>
        <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" id="name" className="py-2 rounded-lg outline-none border pl-2" onChange={(e)=>{setName(e.target.value)

            }} />
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" id="email" className="py-2 rounded-lg outline-none border pl-2" onChange={(e)=>{
                SetEmail(e.target.value) //heavy re render
            }} />
        </div>

        <button className='py-2 px-3 rounded-lg bg-green-600 text-white'>Submit</button>
    </div>
    </div>
  )
}

export default ReactNormalForm