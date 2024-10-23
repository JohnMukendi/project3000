import React, { useContext } from 'react'
import { NameContext } from '../contexts/NameContext'

function Box2() {
    const {theme} = useContext(NameContext)
  return (
    <div style={{ background: theme === "light" ? "gray" : "black", height: "200px", width: "200px" }}></div>
  )
}

export default Box2