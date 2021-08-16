import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';
import './baseballScores.css';

const Counter = props => (
  <div>
  <div>
      <div>
        
      </div>
  </div>
  <div>



  <div className="footballScoreContainer">
        <table border="0px" className="footballScoreTableTop">
            <tr className="footballScoreSpaceAboveQuarters"></tr>
            <tr>            
                <td><div className="footballScoreHeaderSpace"></div></td>
                <td><div className="footballQuarterScoreFont">1</div></td>
                <td><div className="footballQuarterScoreFont">2</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">4</div></td>
                <td><div className="footballQuarterScoreFont">OT</div></td>    
                <td><div className="footballScoreHeaderTotalSpace"></div></td>        
            </tr>
        </table>
        <div className="spaceUnderQuarterTitles"></div>
        <hr className="footballScoreLineBreak"></hr>
        <table border="0px">
            <tr>            
                <td><div className="footballTeamNameFont">New England</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">14</div></td>
                <td><div className="footballQuarterScoreFont">6</div></td>            
                <td><div className="footballTotalScoreFont">37</div></td>    
            </tr>
            <tr>            
                <td><div className="footballTeamNameFont">Kansas City</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">24</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>   
                <td><div className="footballTotalScoreFont">31</div></td>           
            </tr>        
        </table>
    </div>

    <div className="footballScoreContainer">
        <table border="0px" className="footballScoreTableTop">
            <tr className="footballScoreSpaceAboveQuarters"></tr>
            <tr>            
                <td><div className="footballScoreHeaderSpace"></div></td>
                <td><div className="footballQuarterScoreFont">1</div></td>
                <td><div className="footballQuarterScoreFont">2</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">4</div></td>
                <td><div className="footballQuarterScoreFont">OT</div></td>    
                <td><div className="footballScoreHeaderTotalSpace"></div></td>        
            </tr>
        </table>
        <div className="spaceUnderQuarterTitles"></div>
        <hr className="footballScoreLineBreak"></hr>
        <table border="0px">
            <tr>            
                <td><div className="footballTeamNameFont">New England</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">14</div></td>
                <td><div className="footballQuarterScoreFont">6</div></td>            
                <td><div className="footballTotalScoreFont">37</div></td>    
            </tr>
            <tr>            
                <td><div className="footballTeamNameFont">Kansas City</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">24</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>   
                <td><div className="footballTotalScoreFont">31</div></td>           
            </tr>        
        </table>
    </div>
    

    
    <div className="footballScoreContainer">
        <table border="0px" className="footballScoreTableTop">
            <tr className="footballScoreSpaceAboveQuarters"></tr>
            <tr>            
                <td><div className="footballScoreHeaderSpace"></div></td>
                <td><div className="footballQuarterScoreFont">1</div></td>
                <td><div className="footballQuarterScoreFont">2</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">4</div></td>
                <td><div className="footballQuarterScoreFont">OT</div></td>    
                <td><div className="footballScoreHeaderTotalSpace"></div></td>        
            </tr>
        </table>
        <div className="spaceUnderQuarterTitles"></div>
        <hr className="footballScoreLineBreak"></hr>
        <table border="0px">
            <tr>            
                <td><div className="footballTeamNameFont">New England</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">14</div></td>
                <td><div className="footballQuarterScoreFont">6</div></td>            
                <td><div className="footballTotalScoreFont">37</div></td>    
            </tr>
            <tr>            
                <td><div className="footballTeamNameFont">Kansas City</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">24</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>   
                <td><div className="footballTotalScoreFont">31</div></td>           
            </tr>        
        </table>
    </div>

    <div className="footballScoreContainer">
        <table border="0px" className="footballScoreTableTop">
            <tr className="footballScoreSpaceAboveQuarters"></tr>
            <tr>            
                <td><div className="footballScoreHeaderSpace"></div></td>
                <td><div className="footballQuarterScoreFont">1</div></td>
                <td><div className="footballQuarterScoreFont">2</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">4</div></td>
                <td><div className="footballQuarterScoreFont">OT</div></td>    
                <td><div className="footballScoreHeaderTotalSpace"></div></td>        
            </tr>
        </table>
        <div className="spaceUnderQuarterTitles"></div>
        <hr className="footballScoreLineBreak"></hr>
        <table border="0px">
            <tr>            
                <td><div className="footballTeamNameFont">New England</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">3</div></td>
                <td><div className="footballQuarterScoreFont">14</div></td>
                <td><div className="footballQuarterScoreFont">6</div></td>            
                <td><div className="footballTotalScoreFont">37</div></td>    
            </tr>
            <tr>            
                <td><div className="footballTeamNameFont">Kansas City</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>
                <td><div className="footballQuarterScoreFont">7</div></td>
                <td><div className="footballQuarterScoreFont">24</div></td>
                <td><div className="footballQuarterScoreFont">0</div></td>   
                <td><div className="footballTotalScoreFont">31</div></td>           
            </tr>        
        </table>
    </div>

    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>Current count: <strong>{props.count}</strong></p>

    <button onClick={props.increment}>Increment</button>
  </div>
  </div>
  
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
