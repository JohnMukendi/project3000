import React, { createContext, useState } from 'react'

export const NameContext = createContext(null)
function NameContextProvider({children}) {
    const [name,] = useState("John")
    const [theme,setTheme] = useState('light')
    const values ={name,theme,setTheme}
  return (
    <NameContext.Provider value={values}>
        
        {children}
    </NameContext.Provider>
  )
}

export default NameContextProvider