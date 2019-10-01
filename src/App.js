import React,{Fragment} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import NavbarView from './Shared/Navbar/navbar'
import AboutMe from './pages/About-me/aboutme'
import ContactMe from './pages/Contact-me/contactme'
import Home from './pages/Home/home'

function App() {
  return (
   <BrowserRouter>
      <Fragment>
        <NavbarView></NavbarView>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/About-me' component={AboutMe}></Route>
        <Route exact path='/Contact-me' component={ContactMe}></Route>
        <Route exact path='/Home' component={Home}></Route>

      </Fragment>
   </BrowserRouter>
  );
}

export default App;
