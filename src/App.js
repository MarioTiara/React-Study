import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentRegComponent from './components/ParentRegComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ParentRegComponent></ParentRegComponent>
      </div>
    );
  }

}

export default App;
