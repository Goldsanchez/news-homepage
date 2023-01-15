import iconMenu from "../assets/images/icon-menu.svg"
import iconClose from "../assets/images/icon-menu-close.svg"
import logo from "../assets/images/logo.svg"

import "../styles/Menu.css"
import { useRef } from 'react';


function Menu({backgroundMain}) {
  const menuRef = useRef()
  const hamburgerRef = useRef()
  const closeRef = useRef()

  const menuClick = () => {
      if(menuRef.current.id === "menu__ul"){
        menuRef.current.className += " responsive"
        backgroundMain.current.style.backgroundColor = "#00000050"
      }
  }

  const closeClick = () => {
      menuRef.current.className = "menu__ul"
      backgroundMain.current.style.backgroundColor = ""
  }


  return (
    <div className="menu">
      <img className="menu__logo" src={logo} alt="" />
      <ul className="menu__ul" id="menu__ul" ref={menuRef}>
          <img className="menu__close" src={iconClose} alt="img" ref={closeRef} onClick={closeClick} />
          <li className="menu__li"><a className="menu__a" href="#about">Home</a></li>
          <li className="menu__li"><a className="menu__a" href="#projects">New</a></li>
          <li className="menu__li"><a className="menu__a" href="#skills">Popular</a> </li>
          <li className="menu__li"><a className="menu__a" href="#skills">Trending</a> </li>
          <li className="menu__li"><a className="menu__a" href="#skills">Categories</a> </li>
      </ul>
      <img className="menu__hamburger" src={iconMenu} alt="img" ref={hamburgerRef} onClick={menuClick} />
    </div>
  )
}

export default Menu