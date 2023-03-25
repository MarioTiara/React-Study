import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        {/* <Message/> */}
        {/* <Greet name="mario" herroName="superman">
            <p>This is children props</p>
        </Greet>
        <Greet name="tiara" herroName="spiderman">
           <button>Action</button>
        </Greet>
        <Greet name="pratama" herroName="batman"/>
        <Welcome name="mario" herroName="superman"/>
        <Welcome name="mario" herroName="superman"/> */}
      </div>
    );
  }

}

export default App;
