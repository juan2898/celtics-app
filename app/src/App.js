import React, { Component } from 'react';
import logo from './pics/bcl.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      homeOrAway: '',
      opponent: '',
      arena: '',
      time: '',
      date: ''
    }
  }
  
  componentDidMount() {
      return axios.get('http://localhost:3002/api/games').then((response) => {
        console.log('fired');
        console.log(response)
      })
  }
  
  

  render() {
    return (
      <section className="hero">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title" >Boston Celtics Schedule 2017-2018</h1>
          </div>
        </div>
        <div className='filter-boxes'>
          <input className='filter-opponent' placeholder='Opponent' /* onChange={} */></input>
          <input className='filter-homeOrAway' placeholder='Home or Away' /* onClick={} */></input>
          <button className='filter-button' /* onClick={} */>Search</button>
        </div>
        <div className='schedule-box1'>
        <h5 className='home-away'>{this.state.homeOrAway}</h5>
          <div className='logo'/>
          <div className='opponent-box1'>
            <h3 className='opponent-name'>{this.state.opponent}</h3>
            <h4 className='opponent-arena'>{this.state.arena}</h4>
          </div>
          <div className='opponent-box2'>
            <h3 className='opponent-name'>{this.state.time}</h3>
            <h4 className='opponent-arena'>{this.state.date}</h4>
          </div>
          <button className='tickets' /* onClick={} */>Buy Tickets</button>
        </div>
      </section>
    );
  }
}
export default App;