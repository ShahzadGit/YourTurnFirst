import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './MediaCard.js';
import abc from './abc.jpg';
import MediaCard from './MediaCard.js';
import Gate from './Gate.js';
import Room from './Room.js';

function App(props) {
  return (
    <div className="App">
      <h1>Your Turn-1</h1>
      <h2>Hi, This is <strong>{props.name}</strong></h2>
      <h2>In this tutorial, following topics were discussed</h2>
      <ul>
        <li>React</li>
        <li>JSX</li>
        <li>JavaScript</li>
      </ul>
      <h3>This value is of an expression: {20+4-3}</h3>
      <br />
      <h1>Your Turn-2: MediaCard</h1>
      <MediaCard title="Media Card" body="This is the second property of this component" imageUrl={abc}>
      </MediaCard>
      <h1>Gate Component</h1>
      <Gate isOpen={false}></Gate>
      <h1>Room Component</h1>
      <Room></Room>
      
      
      

    </div>
  );
}

export default App;
