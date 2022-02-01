import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import SearchTown from "./Search.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

class HomePage extends React.Component {
    
    render(){
        return Home()        
    }
}

function Home() {
    return (
    <div className='App'>

      <div className='header'>
      <div className='time'>
          {/* <p> { this.state.currentTime  } </p> */}
      </div>
      <div className='widgets'>
          <span>
          <img src={process.env.PUBLIC_URL + '/imgs/mobile_signal_white.png'} />
          <img src={process.env.PUBLIC_URL + '/imgs/wifi_white.png'} />
          <img src={process.env.PUBLIC_URL + '/imgs/battery_white.png'} />
          </span>
      </div>
      </div>

      <div className='select_town'>
      <span>
          <img id='location' src={process.env.PUBLIC_URL + '/imgs/location.png'} /> 
          </span>
      <p>Город не определен</p>
      </div>

      <div className='weather_cloud'>
      <img src={process.env.PUBLIC_URL + '/imgs/cloudy.png'}></img>
      <h1>-</h1>
      <p>-</p>
      </div>

      <button id='choose'><Link to="/search">Выбрать локацию</Link></button>
    </div>
    );
}

export default HomePage;