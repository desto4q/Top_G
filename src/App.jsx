import React, { useEffect } from 'react'
import "./App.scss"
import WebFont from 'webfontloader'
import Router from './router/Router'
function App() {
  WebFont.load({
    google: {
      families: ["Montserrat"]
    }
  })

useEffect(()=> {
  let a = document.querySelectorAll("a")
  a.forEach((itm)=>{
    itm.addEventListener("click",(e)=>{
      e.preventDefault()
    })
  })
},[])
  return (
    <div className="app">
      <Router/>
    </div>
  )
}

export default App