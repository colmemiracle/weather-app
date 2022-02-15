import './App.scss';
import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import SearchTown from "./components/Search.jsx";
import HomePage from "./components/Home.jsx";
import WeatherBoard from "./components/Weather.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

class App extends React.Component{
  constructor(props) {
    super(props)

    let town = document.getElementById("town")
    let today = new Date(),
    time = today.getHours() + ':' + today.getMinutes()
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      currentTime: time
    }
  }
  getWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=9ed2cc0d52d0095dc17fc83a4ee6b92e")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        }
      )
  }

  render() {
    return (      
      <Router>
      <div>
        {/* <button onClick={this.getWeather}>press</button> */}

        <Link to="/"></Link>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/search" element={<SearchTown weatherMethod = {this.result}/>} />
          <Route exact path="/dashboard" element={<WeatherBoard/>} />
        </Routes>
      </div>
    </Router>
    )
  }
  }
export default App;