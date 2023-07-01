import React, { useEffect, useState } from 'react'
import User from './User'
import date from "date-and-time"
import { Rating } from "react-simple-star-rating"
import { Personel } from '../data/data'





function Card( {username,fullname,avatar,price,image,rating,product_name,}) {
  const now = new Date()
  const new_date = date.format(now, "MM, DD, YYYY")
  const [ratin, setRating] = useState(rating && rating)
  const handleRating = (rate) => {
    setRating(rate)
  }

  // useEffect(()=> {
      // rating? setRating(rating) : null
  // },[])
  return (
    <div className="card">
      <div className="container">
        <User avatar={avatar} displayname={username} fullname={fullname} />
        <div className="content_img">
          <img src={image && image} loading='lazy' alt="" />
        </div>

        <div className="title">
          <div className="title_name">
            <h5>
              {product_name && product_name}
            </h5>
            <div className="rating_cont">
              <Rating onClick={handleRating} initialValue={ratin} transition={true} size={16} allowFraction={true}
                className='rating' />
            </div>
          </div>
          <div className="title_time">
            <p>Aunction ending in</p>
            <h5>
              {new_date}
            </h5>
          </div>
        </div>
        <div className="bid">
          <div className="bidding">
            <p>current bid</p>
            <h5>{price} BTC</h5>
          </div>
          <button className='button'>
            Place a bid
          </button>
        </div>
      </div>


    </div>
  )
}

export default Card