import React from 'react';
import './App.css';
import InputSettingsGroups  from './component/inputSettingsGroups';


function App() {
  let value = 10000;
  return (
    <div className="App">
      <header className="App-header">
        <span className="sucess"> React App</span>
      </header>
      <InputSettingsGroups key={value}  columns={'send value'}/>
    </div>
  );
}

export default App;
