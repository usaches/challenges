import React, { Component } from 'react';
import './App.css';
import Checklist from "./Components/Checklist"

class App extends Component {
  render() {
    return (
      <div className="App">
<Checklist/>
          <Checklist
          question="123"
              answer="123"
          />
          <Checklist/>
          <Checklist/>
          <Checklist/>
      </div>
    );
  }
}

export default App;
