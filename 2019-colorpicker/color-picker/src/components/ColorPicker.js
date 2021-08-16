import React, { Component } from 'react';

import '../css/bootstrap.min.css';
import '../css/HeaderBar.css';
import '../css/ColorPicker.css';
import '../css/ColorSlider.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { faEyeDropper} from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';



library.add(faStroopwafel);
library.add(faEyeDropper);
library.add(faPlusCircle);
library.add(faMinusCircle);


class ColorPicker extends Component {
    constructor(){
      super();

      this.state = { 
          red: 0,
          green: 0,
          blue: 0,
        };

    }
    updateRed(event) {

        this.setState({
          red: event.target.value
        });
        
        return true;
    }

    updateGreen(event) {

        this.setState({
          green: event.target.value
        });
        
        return true;
    }

    updateBlue(event) {

        this.setState({
          blue: event.target.value
        });
        
        return true;
    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }



    /* 
        Function name: updateSearchInput
        
        Purpose:    Function is called when the text in the input search box has changed.
                    The value from the event is put into searchInput variable in class state.
                
        Parameters:     event
        Return:         true
    */
   updateSearchInput(event, colorOrder) {

    // This is red.
    if (colorOrder === 1){

        
        // Set the red color state.
        this.setState({
            red: event.target.value
        });
        
    }

    // This is green.
    else if (colorOrder === 2){

        // Set the green color state.
        this.setState({
            green: event.target.value
        });
    }

    // This is blue.
    else if (colorOrder === 3){

        // Set the blue color state.
        this.setState({
            blue: event.target.value
        });
    }


    
    return true;
}


    DisplayColors(){

        let colorBoxes= []

        // Loop through all colors.
        for (let i = 0; i < 10000; i++) {

            i = i + 10;

            // Convert integer value to hex.
            var hexCode = i.toString(16);            
            var currentColor = '#';

            // Check if color hexcode is smaller than 6 and needs to be filled with 0's.
            if (hexCode.length < 6){

                for (var y=0; y < 6 - hexCode.length; y++){
                    currentColor += '0';
                }
                currentColor += hexCode;
                currentColor = currentColor.toUpperCase();
            }          

          colorBoxes.push(<div key={i} className="colorBox" style={{backgroundColor: `${currentColor}`}}></div>)
          
        }
        return(
            <div className="colorBoxContainer">{colorBoxes}</div>
        )
    }
    

    render() {
      return (        
        <div>
            <br></br>
            <h1>Create ColorCode</h1>
            <br></br>               
               <div className="container">
                  <table>
                    <tbody>
                        <tr>                    
                            <th>
                                <h3>Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </th>
                            <th style={{width: '100px', alignItems: 'right'}}>                            
                                <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.red}
                                    onChange={event => this.updateSearchInput(event,1)}
                                    onKeyDown={event => {
                                        if (event.target.value === ''){
                                            //this.submitForm()
                                        }                                        
                                        else if (event.key === 'Enter') {                        
                                            //this.submitForm();
                                        }                      
                                    }}>
                                </input>
                            </th>
                            <th>
                            {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000" /> */}
                            
                            </th>
                            <th>
                            {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                            </th>
                            <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                            
                            <th style={{width: '600px',
                                        alignItems: 'right' }}>                        
                                <input className="slider" id="redSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                                onChange={event => this.updateRed(event)}
                                />
                            </th>
                            <th style={{width: '50px',
                                        alignItems: 'right' }}>      
                            <h1>{this.state.red}</h1>
                            </th>
                            


                        </tr>
                    </tbody>
                </table>                
               </div>
               {/* <br></br> */}
               <div className="container">
               <table>
                   <tbody>
                        <tr>                    
                            <th>
                            <h3>Green&nbsp;&nbsp;&nbsp;</h3>
                            </th>

                            <th style={{width: '100px',
                                    alignItems: 'right'}}>
                            {/* <NumericInput min={0} max={256} value={50}/>   */}
                            <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.green}
                             onChange={event => this.updateSearchInput(event,2)}
                             onKeyDown={event => {
                            if (event.target.value === ''){
                                //this.submitForm()
                            }                                        
                            else if (event.key === 'Enter') {                        
                                //this.submitForm();
                            }                      
                            }}>
                            </input>

                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000"/> */}
                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                        </th>
                        <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                        <th style={{width: '600px',
                                    alignItems: 'right' }}>                        
                            <input className="slider" id="greenSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                            onChange={event => this.updateGreen(event)}/>
                        </th>
                        <h1>{this.state.green}</h1>
                        </tr>
                    </tbody>
                </table>                
               </div>
               {/* <br></br> */}
               <div className="container">
               <table>
                   <tbody>
                        <tr>                    
                            <th>
                            <h3>Blue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
                            </th>
                            <th style={{width: '100px',
                                    alignItems: 'right'}}>
                            {/* <NumericInput min={0} max={256} value={50}/>   */}
                            <input type="text" class="form-control" placeholder="" maxLength='3' value={this.state.blue}
                             onChange={event => this.updateSearchInput(event,3)}
                             onKeyDown={event => {
                            if (event.target.value === ''){
                                //this.submitForm();
                            }                                        
                            else if (event.key === 'Enter') {                        
                                //this.submitForm();
                            }                      
                            }}>
                            </input>

                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="minus-circle" size="2x" color="#ff0000"/> */}
                        </th>
                        <th>
                        {/* <FontAwesomeIcon icon="plus-circle" size="2x" color="#13bf41"/> */}
                        </th>
                        <th><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></th>
                        <th style={{width: '600px',
                                    alignItems: 'right' }}>                        
                            <input className="slider" id="blueSlider" type="range" min="0" max="256" defaultValue="3" step="1"
                            onChange={event => this.updateBlue(event)}/>
                        </th>
                        <th>
                            <h1>{this.state.blue}</h1>
                        </th>
                        </tr>
                </tbody>
            </table>                
               </div>

               {/* <br></br> */}
               <hr></hr>

               <div className="container">
                <div className="form-row">
                    <div className="col-2">
<h1>FFE710</h1>
                    </div>
                    <div className="col-6">
                    
                    <button type="button" class="btn btn-success"> Copy Color </button>

                        </div>
                    <h3></h3>
                </div>
               </div>
               <div className="container">
  
  <div className="card">
    <div className="card-body" 
    style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
  
        <br></br>
        <br></br></div>
  </div>
</div>
<br></br>
         </div>
      );
    }
  }
  
  export default ColorPicker;