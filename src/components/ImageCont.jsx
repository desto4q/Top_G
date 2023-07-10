import React, { useEffect } from 'react'
import bg from "../public/grid.png"

function ImageCont({content}) {
  useEffect(() => {
    console.log(bg)
  }, [])
  return (
    <div className='Img_cont'>
      <div className="container">
        <img src={bg} alt="" className="bg" />
      </div>
      <div className="content">
        {content && content}
      </div>
    </div>
  )
}

export default ImageCont