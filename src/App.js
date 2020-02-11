import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <center className="title"></center>
      </header>
      <div className="content">
        <div className="html title"> HTML </div>
        <div className="javascript title"> Javascript </div>
        <div className="css title"> CSS </div>
      </div>
      <div className="content">
        <div className="html" id="html">
        </div>
        <div className="javascript" id="javascript">
        </div>
        <div className="css" id="css">
        </div>
      </div>
      <iframe id="output" className="iframe" style={{border: 'none',width: '100%',height: 'calc(100vh - 340px)'}}></iframe>
    </div>
  );
}

export default App;
