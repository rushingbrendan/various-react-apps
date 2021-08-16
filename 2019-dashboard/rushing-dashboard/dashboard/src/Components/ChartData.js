import React, { Component } from 'react';
import '../App.css';
import Chart from './Chart.js';


class ChartData extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: [
                 'June 1' 
               , 'June 2' , 'June 3' , 'June 4' , 'June 5' , 'June 6' , 'June 7' 
               , 'June 8' , 'June 9' , 'June 10' , 'June 11' , 'June 12' , 'June 13' 
               , 'June 14' , 'June 15' , 'June 16' , 'June 17' , 'June 18' , 'June 19' 
               , 'June 20' , 'June 21' , 'June 22' , 'June 23' , 'June 24' , 'June 25' 
               , 'June 26' , 'June 27' , 'June 28' , 'June 29' , 'June 30' , 'June 25' 
               , 'June 26'],
        datasets:[
          {
            label:'Earnings',
            lineTension: 0,
            data:[
              230,
              110,
              210, 
              310,
              210,
              340,     
              220,                                     
              320,
              160,
              20,
              120,
              5,
              -135,
              -35,
              -135,
              -235,
              -335,
              -225,
              -385,
              -550,
              -650,
              -550,
              -450,
              -350,
              -450,
              -350,
              -520,
              -620
              -720,
              -610,
              -510,
              -640,
              -740
              


            ],
            backgroundColor:[
              //'#FFE710',
              'rgba(71, 203, 67, 1)',

            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">                        
        <div className="container">
          <Chart chartData={this.state.chartData} legendPosition="right"/>
        </div>
        <div>        
        </div>
      </div>
    );
  }
}

export default ChartData;