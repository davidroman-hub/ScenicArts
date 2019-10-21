import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './dropdm.scss'

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
             <div className="button-4" onClick={this.showDropdownMenu}> Fotografias </div>
                <div className="dropDownC">
              { this.state.displayMenu ? (
              <ul>
             <li><NavLink exact to ='./Photos' className="item2" activeClassName="is-selected">Arte de vida</NavLink></li>
             <li><NavLink exact to ='./Photos2' className="item2" activeClassName="is-selected"> Otros proyectos</NavLink></li>
             
              </ul>
            ):
            (
              null
            )
            }
                </div>
           </div>
    
        );
      }
    }

export default Dropdown