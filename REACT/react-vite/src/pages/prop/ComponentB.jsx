import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name, setName}) => {
  return (
    <div>
        <div>ComponentB {name}</div>
        <button onClick={()=> setName() } >Change</button>
        <ComponentC name={name} />
    </div>
    
  )
}

export default ComponentB