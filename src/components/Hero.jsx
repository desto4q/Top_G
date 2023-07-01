import React from 'react'
import Watermark from './Watermark'

function Hero({buttons,h2, p, user}) {
  return (
    <div className="hero">
        <Watermark/>
        <h1>
          {h2 && h2}
        </h1>
        <p>
          {p && p}
        </p>
        <div className="buttons">
          {buttons && buttons.map(({name,type},key)=> {
            return (
              <button className={type ? type : "hero_btn"}>
                    {name}
              </button>
            )
          })}
        </div>
    </div>
  )
}

export default Hero