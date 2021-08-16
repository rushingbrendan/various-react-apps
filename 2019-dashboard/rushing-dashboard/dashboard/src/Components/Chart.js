
import React, {Component} from 'react';
//import {Bar, Line, Pie} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: false,
    bezierCurve: true,
    displayLegend: false,    
    legendPosition:'right',
    location:'City',
    labelString: 'Fog Lamps',
    
  }

  render(){
    return (<div>

<div className="container">
<Line
          data={this.state.chartData}
          options={{
            title: {
              display:this.props.displayTitle,
              text: this.props.chartTitle,
              fontSize:12,
              lineTension: 0,           
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
      </div>
    )
  }
}

export default Chart;