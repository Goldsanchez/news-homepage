import React from 'react'
import NewsWithImageComponent from './NewsWithImageComponent'
import "../styles/NewsWithImage.css"
import img1 from "../assets/images/image-retro-pcs.jpg"
import img2 from "../assets/images/image-top-laptops.jpg"
import img3 from "../assets/images/image-gaming-growth.jpg"


export default function NewsWithImage() {
  return (
    <div className='NewsWithImage'>
        <NewsWithImageComponent img={img1} number="01" subtitle="Reviving Retro PCs" paragraph="hat happens when old PCs are given modern upgrades?" />
        <NewsWithImageComponent img={img2} number="02" subtitle="Top 10 Laptops of 2022" paragraph="Our best picks for various needs and budgets."/>
        <NewsWithImageComponent img={img3} number="03" subtitle="The Growth of Gaming" paragraph="How the pandemic has sparked fresh opportunities."/>
    </div>
  )
}
