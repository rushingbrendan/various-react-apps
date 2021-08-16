import React from 'react';
import HeaderBar from './Components/HeaderBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard.js';

//import './css/bootstrap.css';



function App() {
  return (
    // <div style={{backgroundColor: '#F5F4F5'}}> 
    <div style={{backgroundColor: '#F5F4F5'}}> 
    <Router>
    
      <HeaderBar></HeaderBar>

      <Route exact={true} path="/" render={() => (
        <div>
        <br></br>        
            <Dashboard></Dashboard>



        </div>
        
      )} />  

      {/* <Route exact={true} path="" render={() => (
        <ColorPicker></ColorPicker>
        
      )} />    */}

      {/* <Route exact={true} path="" render={() => (
        <ColorPicker></ColorPicker>
        
      )} />    */}

        
      
      </Router>
    </div>
  );
}

export default App;
