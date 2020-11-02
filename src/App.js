import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [ currentColor, setCurrentColor ] = useState([]);

  // const newBox = (props) => {
  //   setCurrentBoxes([...currentBoxes, props]);
  // }

  const changeColor = ( newColor ) => {
    setCurrentColor([ ...currentColor, newColor ]);
  }

  return (
    <div className="body">
      <div className="text-light">
        <BoxForm onNewColor={ changeColor }/>
        <BoxDisplay color={ currentColor }/>
      </div>
    </div>

  );
}

export default App;
