import NavBar from './NavBar'
import DescriptionDisplay from './edit'
import Add from "./add"
import Home from "./home"
import "./styles.css"
import "./add.css"


import React, {useEffect, useState} from 'react'


function App() {

  let component;

  console.log(window.location.pathname);

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break
    case "/add":
      component = <Add />;
      break
  }
  return( 
  <div>
   
  <><NavBar/>
  {component}
  </>
  
  
  </div>
  )
}


export default App