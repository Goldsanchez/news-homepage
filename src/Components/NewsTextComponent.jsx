import React from 'react'
import "../styles/NewsTextComponent.css"

export default function NewsTextComponent({title, paragraph, line}) {
  return (
    <>
        <h3 className="h3-NewsTextComponent">{title}</h3>
        <p className="paragraph-NewsTextComponent">{paragraph}</p>
        {line && <hr className='line-NewsTextComponent' />}
    </>
  )
}
