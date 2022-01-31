import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    let today = new Date(),
    time = today.getHours() + ':' + today.getMinutes()
    this.state = {
      currentDate: time
    }

  }
  render() {
    return (
      <div className='App'>

        <div className='header'>
          <div className='time'>
            <p> { this.state.currentDate  } </p>
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

      </div>
    )
  }
}

export default App;