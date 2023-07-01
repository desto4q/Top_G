import React from 'react'

let Links = [
    "Home",
    "NFTs Market",
    "collection",
    "About Us"
]

function Nav() {
    let  bg 
    return (
        <div className="nav">
            <span className='logo'> Logo</span>
            <div className='links'>
                {Links.map((item,key)=>{
                    return (
                        <a href='#' key={key}>{item}</a>
                    )
                })}
            </div>
            <div className="button">
                Sign in
            </div>
        </div>
    )
}

export default Nav