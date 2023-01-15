import React from 'react'
import imagePrincipal from "../assets/images/image-web-3-mobile.jpg"
import "../styles/news-principal.css"

export default function NewsPrincipal() {
  return (
    <div className='news-principal'>
        <img className='image-principal' src={imagePrincipal} alt="gg" />
        <h2 className='h2-principal'>The Bright Future of Web 3.0?</h2>
        <p className='paragraph-principal'>We dive into he next evolution of the web that claims to put the power of  platforms back into the hands of the people. But is it really fullfilling its promise?</p>
        <button className='btn-principal'>READ MORE</button>
    </div>
  )
}
