import React from 'react'
import "../styles/NewsWithImageComponent.css"

export default function NewsWithImageComponent({img, number, subtitle, paragraph}) {
    return (
        <div className='NewsWithImageComponent'>
            <div className="left-NewsWithImageComponent">
                <img className='img-NewsWithImageComponent' src={img} alt="" />
            </div>
            <div className="right-NewsWithImageComponent">
                <p className="number-NewsWithImagecomponent">{number}</p>
                <h3 className="h3-NewsWithImagecomponent">{subtitle}</h3>
                <p className="paragraph-NewsWithImagecomponent">{paragraph}</p>
            </div>
        </div>
    )
}
