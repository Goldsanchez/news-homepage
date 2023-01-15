import React from 'react'
import NewsTextComponent from './NewsTextComponent'
import '../styles/NewsText.css'


export default function NewsText() {
  return (
    <div className='NewsText'>
        <h1 className="h1-NewsText">New</h1>
        <NewsTextComponent title = "Hydrogen VS Electri Cars" paragraph="Will hydrogen-fueled cars ever cach up to EVs?" line ={true}/>
        <NewsTextComponent title = "The Downsides of AI Artistry" paragraph="What are the possible adverse effects of on-demand a image generation?" line ={true}/>
        <NewsTextComponent title = "Is VC Funding Drying Up?" paragraph="Private funding by VC firms is down 50% YOY. We take a look at what that means." line ={false}/>
    </div>
  )
}
