import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome  from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent/>
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <Counter></Counter> */}
        {/* <Message/> */}
        {/* <Greet name="mario" herroName="superman">
            <p>This is children props</p>
        </Greet>
        <Greet name="tiara" herroName="spiderman">
           <button>Action</button>
        </Greet>
        <Greet name="pratama" herroName="batman"/>
        <Welcome name="mario" herroName="superman"/> */}
        {/* <Greet name="pratama" herroName="batman"/>
        <Welcome name="mario" herroName="superman"/> */}

      
      </div>
    );
  }

}

export default App;
