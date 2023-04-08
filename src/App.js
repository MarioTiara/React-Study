import React, { Component } from 'react';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FocusInput/>
      </div>
    );
  }

}

export default App;
