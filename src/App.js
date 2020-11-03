import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [ currentColor, setCurrentColor ] = useState([]);

  const changeColor = ( newColor ) => {
    setCurrentColor([ ...currentColor, newColor ]);
  }

  return (
    <div className="body">
      <div className="text-light">
        <BoxForm onNewBox={ changeColor }/>
        <BoxDisplay box={ currentColor }/>
      </div>
    </div>

  );
}

export default App;
