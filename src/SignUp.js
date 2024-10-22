import React, { useContext } from 'react'
import { NameContext } from './contexts/NameContext'

function SignUp(props) {
  console.log(props)
  const {theme} = useContext(NameContext)
  return (
    <div>
      <form>
        <input/>
        <input/>
        <button>Sign up</button>
        <div style={{borderRadius:"50%",height:"100px",width:"100px",background:theme === 'light'? 'gray': 'black' }}>

        </div>
      </form>
    </div>
  )
}


export default SignUp

