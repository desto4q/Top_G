import React from 'react'
import Nav from '../components/Nav'
import Grainy from '../components/grainy'
import Hero from '../components/Hero'
import { explore, hero, sect2 } from '../data/data'
import ImageCont from '../components/ImageCont'
import Card from '../components/Card'
import NFT_View from '../components/NFT_View'
import Top_artist from '../components/Top_artist'
import Conclusion from '../components/Conclusion'

import image from '../public/card.png';

function Img_card() {
  return (
    <img src={image} alt="" />
  )
}



function Hero_card () {
  return(
    <div className="hero_cards">
      <img src={image} alt="" />
      <img src={image} alt="" />
      <img src={image} alt="" />
    </div>
  )
}
function Home() {











  return (
    <div className="home">
      <Grainy />
      <Nav />
      <section className='hero_section'>
        <Hero h2={hero.h2} p={hero.p} buttons={hero.buttons} />
        <ImageCont content={<Hero_card/>} />
      </section>
      <section className='section_2'>
        <ImageCont content={<Img_card />} />
        <Hero h2={sect2.h2} p={sect2.p} buttons={sect2.buttons} />
      </section>
      <section className='nft_view_section'>
        {/* <Card/> */}
        <NFT_View />
      </section>
      <section className='top_artist_section'>
        <Top_artist />
      </section>
      <section>
        <Hero h2={explore.h2} p={explore.p} buttons={explore.buttons} />
        <ImageCont content={<Hero_card/>}/>
      </section>
      <div className='conc_section'>
        <Conclusion />
      </div>
    </div>
  )
}

export default Home