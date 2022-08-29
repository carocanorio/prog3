import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import About from "./screens/About/About";
import Characters from './components/Characters/Characters';
import OneCharacter from "./components/OneCharacter/OneCharacter";
import NotFound from './screens/NotFound/NotFound';

import { Route, Switch } from 'react-router-dom';


function App() {
  

  return (
    <React.Fragment>
      <Navbar />
      <h1>My App in React</h1>
      <main>  
        <Characters />
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/aboutus' component={About}/>
          <Route path='/characters' exact={true} component={Characters}/>
          <Route path='/characters/id/:id' component={OneCharacter}/>
          <Route path='' component={NotFound} />
        </Switch>     
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
