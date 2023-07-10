import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/context'
import { Spin as Hamburger } from "hamburger-react"
let Links = [
    "Home",
    "NFTs Market",
    "collection",
    "About Us"
]

function Nav() {
    let { winSize, burger, setBurger } = useContext(userContext)

    let [scrollPos,setScrollpos] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 100) {
                setScrollpos(true)
            }
            else {
                setScrollpos(false)
            }
        })
       return () => window.addEventListener("scroll", (e) => {
        if (window.scrollY > 100) {
            setScrollpos(true)
        }
        else {
            setScrollpos(false)
        }
    })
    }, [])


    
    return (
        <div className={`nav ${scrollPos == true ? "nav_active" : null}`}>
            <span className='logo'> Logo</span>
            {
                winSize > 1000 ?
                    <>
                        <div className='links'>
                            {Links.map((item, key) => {
                                return (
                                    <a href='#' key={key}>{item}</a>
                                )
                            })}
                        </div>
                        <div className="button">
                            Sign in
                        </div>
                    </>
                    :
                    <>
                        <div className="ham">
                            <Hamburger toggled={burger} toggle={setBurger} color='white' />
                        </div>
                        <div className="m_nav" style={{ transform: `translateY(${burger ? 0 : -100}vh)` }}>
                            {Links.map((item, key) => {
                                return (
                                    <a href='#' onClick={() => {
                                        setBurger(false)
                                    }} key={key}>{item}</a>
                                )
                            })}
                        </div>
                    </>

            }
        </div>
    )
}

export default Nav