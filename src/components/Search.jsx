import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import getWeather from '../App';

function geo() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
    });
} 

const SearchTown = (props, state) => {
  return (
    <div className='Search'>
    {/* {props.weatherMethod.main.temp} */}
    <div className='header'>
      <div className='time'>
        <p> { this.state.currentTime  } </p>
      </div>
      <div className='widgets'>
          <span>
          <img src={process.env.PUBLIC_URL + '/imgs/mobile_signal_black.png'} />
          <img src={process.env.PUBLIC_URL + '/imgs/wifi_black.png'} />
          <img src={process.env.PUBLIC_URL + '/imgs/battery_black.png'} />
          </span>
      </div>
    </div>

    <div className='search_town'>
      <Link to="/"><img src={process.env.PUBLIC_URL + '/imgs/back.png'} id='back'></img></Link>
      <input id='town' name='city' placeholder='Поиск локации'></input>
      <span onClick={geo}><img src={process.env.PUBLIC_URL + '/imgs/find_loco.png'} id='find_loco'></img> </span>
    </div>
    <div className='search_blank'>
      <p>У вас пока нет избранных локаций</p>
    </div>

  </div>
  )
  }
export default SearchTown;