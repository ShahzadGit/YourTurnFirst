import React from 'react';

function Room() {
    const [isLit, setLit] = React.useState(false);
    const [temp, setTemp] = React.useState(22);
    const brightness = isLit ? "lit" : "dark";
    const [light, setLight] = React.useState(false);
    
    return (
      <div className={`room ${brightness}`}>
        <br />
        The room is {isLit ? "lit" : "dark"}
        <br />
        <button onClick={() => setLit(!isLit)}>Flip</button>
        <br />
        <br />
        <button onClick={() => setLight(true)}>ON</button>
        <button onClick={() => setLight(false)}>OFF</button>
        <h2>Light is {light ? "ON" : "OFF"}</h2>
        <br />
        <h2>Temprature: {temp}</h2>
        <button onClick={() => setTemp((temp + 1))}>+</button>
        <button onClick={() => setTemp((temp - 1))}>-</button>
      </div>
    );
  }
export default Room;