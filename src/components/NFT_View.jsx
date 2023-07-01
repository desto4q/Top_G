import React, { useEffect, useState } from 'react'
import { Personel } from '../data/data'
import Card from './Card'

function NFT_View() {
    let filters = [
        "trending", "top", "virtual world", "art", "ausic", "photography", "sports"
    ]

    let [filter, setFilter] = useState("trending")
    return (
        <div className="nft_view">

            <h2>NFTs Overview</h2>
            <p>
                Mythias NFT helps investors and profitable oppourtunities, before anyone else
            </p>


            <div className="nft_filters">
                {filters.map((item, key) => {
                    if (
                        item.toLowerCase() == filter
                    ) {
                        return (
                            <div key={key} className="nft_filter active">
                                {item}
                            </div>
                        )
                    }
                    return (
                        <div key={key} onClick={e=> {
                            setFilter(item)
                        }} className="nft_filter">
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className="container">
                {Personel.map(({ image, rating, product_name, avatar, fullname, username, price }) => {

                    return (
                        <Card username={username} fullname={fullname} avatar={avatar} product_name={product_name} image={image} rating={rating} price={price} />
                    )
                })}
            </div>
        </div>
    )
}

export default NFT_View