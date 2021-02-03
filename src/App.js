import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Main from './Components/Main';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

function App() {
  
  return (
      <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
        <Main/>
        </div>
      </Router>
      </ThemeProvider>
    
  );
}

export default App;
