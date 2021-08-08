import React, { Component } from 'react';
import Section from './components/Section';
import BlocDuHaut from './components/BlocDuHaut';
import BlocDuBas from "./components/BlocDuBas";

class App extends Component {
  
  render () {
    return (
      <>
        <BlocDuHaut/>
        <Section/>
        <BlocDuBas/>
      </>
    );
  }
}

export default App;