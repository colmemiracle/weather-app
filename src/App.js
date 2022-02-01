import './App.scss';
import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import SearchTown from "./components/Search.jsx";
import HomePage from "./components/Home.jsx";
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
  // componentDidMount() {
  //   fetch("http://api.openweathermap.org/data/2.5/weather?q=${town.value}&appid=9ed2cc0d52d0095dc17fc83a4ee6b92e")
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result)
  //       }
  //     )
  // }

  gettingWeather(e){
    e.preventDefault();
    let api_url 
    fetch("http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ed2cc0d52d0095dc17fc83a4ee6b92e");
    const data = api_url.json();
    console.log(data)
    console.log("data")
  }
  render() {
    return (      
      <Router>
      <div>
        <Link to="/"></Link>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/search" element={<SearchTown weatherMethod = {this.gettingWeather}/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
    )
  }
  }
export default App;
  




  function Dashboard() {
      return (
        <div>
        </div>
      );
  }