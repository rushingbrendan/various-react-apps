import React from 'react'
import './css/bootstrap.css'
import GameDays from './GameDays'
import SortList from './SortList'

//serve -s build
//<GameDays />


function App() {
  return (
    <div className="container">
      <SortList />
    </div>
  );
}

export default App;
