import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Dropdown extends Component{

    constructor(){
        super();
    
    this.state = {
        displayMenu: false,
    }

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu:true}, () => {
            document.addEventListener('click',this.hideDropdownMenu);
        });
    }

    hideDropdownMenu(){
        this.setState({ displayMenu:false}, () => {
            document.removeEventListener('click',this.hideDropdownMenu);
        })
    }
    render() {
        return (
            <div  className="dropdown" >
             <div className="button-4" onClick={this.showDropdownMenu}> My Setting </div>
    
              { this.state.displayMenu ? (
              <ul>
             <li><NavLink exact to ='/home'>Registro</NavLink></li>
             <li><a href="#Manage Pages">Manage Pages</a></li>
             
              </ul>
            ):
            (
              null
            )
            }
    
           </div>
    
        );
      }
    }

export default Dropdown