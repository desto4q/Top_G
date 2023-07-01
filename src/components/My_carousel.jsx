import React, { useEffect, useRef, useState } from 'react'



import  Carousel  from "nuka-carousel";
import { Artist_list } from '../data/data';
import NFT_hero from './NFT_hero';
function My_carousel() {
    // let indi = Array.from(Array(20))
    useEffect(() => {
        console.log(Artist_list)
    }, [])
    let [sIndex,setIndex] = useState(0)
    return (
        <div className="my_carousel">
            <div className="carousel_info">
                <div className="info">
                    <h1>Top Artist</h1>
                    <p>Mythias NFT helps Invetors and profitable oppurtunities,before everyone else</p>
                </div>

                <div className="buttons">
                    <button onClick={e=> {
                        if (sIndex > 0) {
                            setIndex( sIndex-1)
                        }
                    }}>
                        {"<"}
                    </button>
                    <button onClick={(e=>{
                        setIndex(sIndex + 1)
                    })}>
                        {">"}
                    </button>
                </div>
            </div>
            <Carousel
                slideIndex={sIndex}
                slidesToShow={4}
                withoutControls={true}


            >
             {Artist_list.map(({avatar,fullname,userName,items,owners,traded,bg},key)=> {
                return (
                    <NFT_hero avatar={avatar} fullname={fullname} owners={owners} bg={bg} traded={traded} username={userName} items={items} key={key}/> 
                )
             })}
            </Carousel>
            

        </div>
    )
}



export default My_carousel