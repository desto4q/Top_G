import { createContext, useEffect, useLayoutEffect, useState } from "react"


export let userContext = createContext()


export let  AppContext = ({children}) =>{

  let [winSize,setWinsize] = useState(window.innerWidth)
  useLayoutEffect(()=> {
    setWinsize(window.innerWidth)
  },[])
  
  let [burger,setBurger] = useState(false)

  

  useEffect(()=> {
    console.log(winSize)
    
  },[winSize])

  
 
  let values = {
    winSize,burger,setBurger
  }



  return(
    <userContext.Provider value={values}>
      {children}
    </userContext.Provider>
  )
}