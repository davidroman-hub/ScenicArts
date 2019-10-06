import React,{Component, Fragment} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import NavbarView from './Shared/Navbar/navbar'
import AboutMe from './pages/About-me/aboutme'
import ContactMe from './pages/Contact-me/contactme'
import Home from './pages/Home/home'
import Photos from './pages/Photos/photos'
import Videos from './pages/videos/videos'
import Variaciones from './pages/Variaciones/variaciones'
import Backdrop from './Shared/Backdrop/Backdrop'
import SideDrawer from './Shared/Navbar/SideDrawer/SideDrawer'

class App extends Component{
    state={
      sideDrawerOpen: false
    }
    drawerToggleClickHandler= () => {this.setState((prevState)=> {return{sideDrawerOpen:!prevState.sideDrawerOpen};
  });
};

backdropClickhandler = () => {
  this.setState({sideDrawerOpen:false})
};

render(){
  let backdrop;

  if (this.state.sideDrawerOpen){
    backdrop= <Backdrop click = {this.drawerToggleClickHandler}/>
}

return(
  <BrowserRouter>
       <Fragment>
         <NavbarView drawerClickHandler={this.drawerToggleClickHandler}/>
         <SideDrawer show={this.state.sideDrawerOpen}/>
         {backdrop}
         <Route exact path='/' component={Home}></Route>
         <Route exact path='/About-me' component={AboutMe}></Route>
         <Route exact path='/Contact-me' component={ContactMe}></Route>
         <Route exact path='/Home' component={Home}></Route>
         <Route exact path='/videos' component={Videos}></Route>
         <Route exact path='/Photos' component={Photos}></Route>
         <Route exact path='/Variaciones' component={Variaciones}></Route>
       </Fragment>
    </BrowserRouter>
      )
    }
  }






// function App() {
//   return (
//    <BrowserRouter>
//       <Fragment>
//         <NavbarView></NavbarView>
//         <Route exact path='/' component={Home}></Route>
//         <Route exact path='/About-me' component={AboutMe}></Route>
//         <Route exact path='/Contact-me' component={ContactMe}></Route>
//         <Route exact path='/Home' component={Home}></Route>
//         <Route exact path='/videos' component={Videos}></Route>
//         <Route exact path='/Photos' component={Photos}></Route>
//         <Route exact path='/Variaciones' component={Variaciones}></Route>
//       </Fragment>
//    </BrowserRouter>
//   );
// }

export default App;
