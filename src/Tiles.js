// src/Tiles.js

import React from 'react'
import './App.css';

function Tiles() {
  return (
    <div id="tiles">
      <div className="section">
        <div className="background" style={{backgroundImage: "url(/img/mw_igor_desktop.jpg)"}}></div>
        <div className="inner-left-bottom">
          <h1 style={{textTransform: "uppercase", marginBottom: "10px"}}>The Via Project</h1>
          <h2 style={{textTransform: "uppercase"}}>Into the Milky Way's final frontier</h2>
        </div>
      </div>
    </div>
  )
}

export default Tiles
