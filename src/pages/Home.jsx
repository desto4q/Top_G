import React from 'react'
import Nav from '../components/Nav'
import Grainy from '../components/grainy'
import Hero from '../components/Hero'
import { hero, sect2 } from '../data/data'
import ImageCont from '../components/ImageCont'
import Card from '../components/Card'
import NFT_View from '../components/NFT_View'

function Home() {











  return (
    <div className="home">
      <Grainy/>
      <Nav/>
      <section className='hero_section'>
        <Hero h2={hero.h2} p={hero.p} buttons={hero.buttons}/>
        <ImageCont/>
      </section>
      <section className='section_2'>
        <ImageCont />
        <Hero h2={sect2.h2} p={sect2.p} buttons={sect2.buttons}/>
      </section>
      <section>
        {/* <Card/> */}
        <NFT_View/>
      </section>
      <section>
        
      </section>

    </div>
  )
}

export default Home