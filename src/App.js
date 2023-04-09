import React, { Component } from 'react';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'
import PortalDemo from './components/PortalDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
       <PortalDemo></PortalDemo>
      </div>
    );
  }

}

export default App;
