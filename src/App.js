import React, {useState, useEffect} from 'react'
import './App.css';
import Home from './Home';
import ImageUpload from './ImageUpload';

import { Route } from 'react-router-dom';
import Navigation from './Navigation';





function App() {
  return (
      <div>
      <Navigation/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/ImageUpload' component={ImageUpload}/>

      {/* <NavigationContainer>
        <MyTabs />
      </NavigationContainer> */}
      </div> 
  )
    
}

export default App