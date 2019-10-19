import React from 'react'
import {NavLink} from 'react-router-dom'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import './navBAr.scss'
import logo from './logo.jpg'
import Dropdown from './dropdownmenu'
 const NavbarView = (props) => {
   return (
       <header className= "site-navbar">
         <nav className ="site-navbar-navigation">
            <div className="nav-bar_toggle_button">
              <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="site-navbar-logo">
            <img  alt="logo" width="250px" height="160px"src={logo} />
            </div>
            <div className="spacer"/>
            
             <div className= "pages-item">
               <ul>
                 <li><NavLink exact to ="/Home" className="item" activeClassName="is-selected">Home</NavLink></li>
                 <li><NavLink exact to ="/Variaciones" className="item" activeClassName="is-selected">Variaciones C.</NavLink></li>
                 <li><NavLink exact to ="/Photos" className="item" activeClassName="is-selected">Fotografías</NavLink></li>
                 <li><NavLink exact to ="/videos" className="item" activeClassName="is-selected">Videos</NavLink></li>
                 <li><NavLink exact to ="/About-me" className="item" activeClassName="is-selected">Biografía</NavLink>  </li>
                 <li><NavLink exact to ="/Contact-me" className="item" activeClsassName="is-selected"> Contacto</NavLink>  </li>
                  <li><Dropdown></Dropdown></li>
              </ul>            
             </div>
           
         </nav>
       </header>
   )
 }

 export default NavbarView