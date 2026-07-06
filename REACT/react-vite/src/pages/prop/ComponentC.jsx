import React, { useContext } from 'react'
import UserStore from '../../store/UserStore'

const ComponentC = ({name}) => {
    
    const data = useContext(UserStore)
    console.log("data from context ",data)

  return (
    <div>ComponentC {data.name}</div>
  )
}

export default ComponentC