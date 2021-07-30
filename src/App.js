import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Gameoantuxi from './baitapkeobuabao';
import BookingTicket from './baitapbookingticket';


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Gameoantuxi/> */}
        <BookingTicket/>
        
      </div>
    )
  }
}

