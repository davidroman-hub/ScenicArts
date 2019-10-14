import React from 'react'
import {NavLink} from 'react-router-dom'
import './SideDrawer.scss'

 const SideDrawer = (props) => {
      let drawerClasses = ['side-drawer'];
      if (props.show){
        drawerClasses = ['side-drawer','open'];
      } 

  return (
        <nav className= {drawerClasses.join(' ')}>
            <div className="menuToggle">
               <ul>
                 <li><NavLink exact to ="/Home" className="item" activeClassName="is-selected">Home</NavLink></li>
                 <li><NavLink exact to ="/Variaciones" className="item" activeClassName="is-selected">Variaciones C.</NavLink></li>
                 <li><NavLink exact to ="/Photos" className="item" activeClassName="is-selected">Fotografías</NavLink></li>
                 <li><NavLink exact to ="/videos" className="item" activeClassName="is-selected">Videos</NavLink></li>
                 <li><NavLink exact to ="/About-me" className="item" activeClassName="is-selected">Biografía</NavLink>  </li>
                 <li><NavLink exact to ="/Contact-me" className="item" activeClsassName="is-selected"> Contacto</NavLink></li>
                 
              </ul>            
              </div>
         </nav>
         );
       };

 export default SideDrawer