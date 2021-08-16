import React, { Component } from 'react';
import ChartData from './ChartData.js';
import '../css/Dashboard.css';

// import Chart from './Chart.js';
import '../css/HeaderBar.css';
import '../css/seasonRange.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);

//import { library } from '@fortawesome/fontawesome-svg-core';



//import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
// import { faEyeDropper} from '@fortawesome/free-solid-svg-icons';
//import { faGitHub } from '@fortawesome/free-solid-svg-icons';



// Sort icon for tables.
//import { faSort } from '@fortawesome/free-solid-svg-icons';
//library.add(faSort);

//library.add(faStroopwafel);
//library.add(faEyeDropper);
//library.add(faGitHub);


class Dashboard extends Component {
    constructor(){
      super();
      this.state = {
  
      }
    }

    updateRed(event) {

      this.setState({
        red: event.target.value
      });
      
      return true;
  }

    renderTopTeams(){
      
      let renderTopTeams =[] ;

      for (var i = 0; i++; i < 30){
        

          
      }
      return(
        
        <div>
          
        </div>
      )
    }

    render() {
      return (        
        <div className="container" style={{ }}>
            
<div class="row" >

    <div class="col-md-3 shadow-sm p-3 mb-5 bg-white rounded"> 
    <h5>Season Ranking</h5>    
    <hr></hr>
      <ol>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
      <li>NYY 52-28 +1026</li>
    </ol>
  </div>

    <div class="col-md-9">
      <div class="container shadow-sm bg-white rounded" >
        <br></br>
        <h2>New York Yankees&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(52-28 +1026)</h2>      
        <br></br>
        <label for="">March 20, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.red}</label>
        <label for="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;March 20, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>

        <input className="slider" id="redSlider" type="range" min="0" max="256" defaultValue="3" step="1"
          onChange={event => this.updateRed(event)} >
        </input>
        <br></br>
      
        <br></br>

        <ChartData></ChartData>
        <br></br>      
      </div>
    </div>
  </div>
  <div className="row">
    <div className="md-12">
    <div class="container shadow-sm bg-white rounded" >
      
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Date &nbsp;&nbsp;<FontAwesomeIcon icon="sort-down" size="1x" /></th>
      <th scope="col">Time</th>
      <th scope="col">Location</th>
      <th scope="col">Opponent</th>
      <th scope="col">Line</th>
      <th scope="col">Result</th>
      <th scope="col">Team Score</th>
      <th scope="col">Opponent Score</th>
      <th scope="col">Earnings</th>
      <th scope="col">Season Earnings</th>
    </tr>
  </thead>
  <tbody>
    <tr>      
      <td>June 30 2019</td>
      <td>7:00 PM</td>
      <td>Away</td>
      <td>San Francisco</td>
      <td>-125</td>
      <td>Win</td>
      <td>6</td>
      <td>8</td>
      <td>100</td>
      <td>-740</td>
    </tr>
    <tr>      
      <td>June 30 2019</td>
      <td>7:00 PM</td>
      <td>Away</td>
      <td>San Francisco</td>
      <td>-125</td>
      <td>Win</td>
      <td>6</td>
      <td>8</td>
      <td>100</td>
      <td>-740</td>
    </tr>
    <tr>      
      <td>June 30 2019</td>
      <td>7:00 PM</td>
      <td>Away</td>
      <td>San Francisco</td>
      <td>-125</td>
      <td>Win</td>
      <td>6</td>
      <td>8</td>
      <td>100</td>
      <td>-740</td>
    </tr>
    <tr>      
      <td>June 30 2019</td>
      <td>7:00 PM</td>
      <td>Away</td>
      <td>San Francisco</td>
      <td>-125</td>
      <td>Win</td>
      <td>6</td>
      <td>8</td>
      <td>100</td>
      <td>-740</td>
    </tr>
    
  </tbody>
</table>   
      </div>
    </div>
  </div>


        </div>
      );
    }
  }
  
  export default Dashboard;