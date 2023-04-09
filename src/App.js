import React, { Component } from 'react';
import './App.css';
import './appStyle.css'
import styles from './appStyle.module.css'
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErroBoundary from './components/ErroBoundary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErroBoundary>
          <Hero heroName="Batman" />
        </ErroBoundary>
        <ErroBoundary>
          <Hero heroName="Superman" />
        </ErroBoundary>
        <ErroBoundary>
          <Hero heroName="Joker" />
        </ErroBoundary>

      </div>
    );
  }

}

export default App;
