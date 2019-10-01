import React from 'react'
import {NavLink} from 'react-router-dom'
import './navBAr.scss'
import logo from './logo.jpg'

const NavbarView = (props) => {
  return (
      <header className= "site-navbar">
        <nav>
          <ul>
              <div className="main-logo">
              </div>
            <div className= "pages-item">
                <li><img  alt="logo" width="260px" height="160px" src={logo} /></li>
                <li><NavLink exact to ="/Home" className="item" activeClassName="is-selected">Home</NavLink></li>
                <li><NavLink exact to ="/About-me" className="item" activeClassName="is-selected">Acerca de mi</NavLink>  </li>
                <li><NavLink exact to ="/Contact-me" className="item" activeClsassName="is-selected"> Contactame</NavLink>  </li>
            </div>
          </ul>
        </nav>
      </header>
  )
}

export  default NavbarView