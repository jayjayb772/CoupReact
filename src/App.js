import React from 'react';
import logo from './logo.svg';
import './App.css';
import JoinForm from './Form';
import {GridList} from "@material-ui/core";

function App() {
  return (
    <GridList container spacing={5}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <JoinForm/>

      </header>
    </GridList>
  );
}

export default App;
