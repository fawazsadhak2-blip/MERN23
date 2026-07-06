import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {    
    const [text,setText] = useState("Ram")
    const name = "Revamp b -23"

    const data = [{
        name:"Revampp",
    }]

    const value = {
        name,
        text,
        setText,
        data
    }

    return <AppContext value={value}>{children}</AppContext>

}