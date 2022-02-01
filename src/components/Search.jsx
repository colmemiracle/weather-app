import React from 'react';
import HomePage from "./Home.jsx"
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

class Search extends React.Component {
    
    render(){
        return SearchTown()        
    }
}

function geo() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
    });
}

function SearchTown(props) {
    return (
      <div className='Search'>

      <div className='header'>
        <div className='time'>
          {/* <p> { this.state.currentTime  } </p> */}
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
        <input id='town' name='city' placeholder='Поиск локации' onInput={this.props.weatherMethod}></input>
        <span onClick={geo}><img src={process.env.PUBLIC_URL + '/imgs/find_loco.png'} id='find_loco'></img> </span>
      </div>
      {/* <button onClick={this.weatherMethod }>hi</button> */}
      <div className='search_blank'>
        <p>У вас пока нет избранных локаций</p>
      </div>

    </div>
    );
  }
export default Search;