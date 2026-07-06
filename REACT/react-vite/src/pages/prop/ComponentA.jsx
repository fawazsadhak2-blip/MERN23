import React, { useContext, useState } from 'react'
import ComponentB from './ComponentB'
import UserStore from '../../store/UserStore'

const ComponentA = () => {
    const [name, setName] = useState("Sam")
    const userData = useContext(UserStore)
    
    const setData = () => {
        setName("Ram")
    }

  return (
    <div>
        <h1>ComponentA {userData.name}</h1>
        <ComponentB name= {name} setName={setData} />
    </div>
  )
}

export default ComponentA