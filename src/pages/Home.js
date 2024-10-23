import React, { useContext } from 'react'
import Box1 from '../components/Box1'
import Box2 from '../components/Box2'
import Box3 from '../components/Box3'
import Box4 from '../components/Box4'
import { NameContext } from '../contexts/NameContext'

function Home() {
    const {theme,name,setTheme} = useContext(NameContext)
    const handleThemeChange = ()=>{
        if (theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }
  return (
   <>
    <button onClick={handleThemeChange}>{theme === 'light' ? "Light" : "Dark"}</button>

    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <h1>{name}</h1>   
    <h1>Austin</h1> 
    <Box1 theme={theme}/>
    <Box2/>
    </div>
   <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>
   <Box3/>
   <Box4/>
   </div>
   </>
  )
}

export default Home