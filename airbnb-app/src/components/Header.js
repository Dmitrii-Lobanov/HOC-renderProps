import React from 'react';
import Nav from './Nav';
import FastBooking from './FastBooking';

function Header() {
  return (
    <div className="header">
      <Nav />
      <FastBooking />
    </div>
  )
}

export default Header;