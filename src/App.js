import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Table></Table>
      </div>
    );
  }

}

export default App;
