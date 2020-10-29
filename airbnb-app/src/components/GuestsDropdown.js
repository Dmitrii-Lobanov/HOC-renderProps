import React, { useState, useRef } from 'react';

function GuestsDropdown({ adultsCounter, childrenCounter, infantsCounter, increment, decrement }) {

  let adultsRef = useRef();
  let childrenRef = useRef();
  let infantsRef = useRef();

  // console.log('adultsRef', adultsRef);

  return (
    <div className="guests-dropdown">
      <div className="guests-dropdown-item">
        <div>
          <div>Adults</div>
        </div>
        <div className="guests-counter">
          <div className="counter-btn" onClick={() => decrement('adults')} style={{opacity: adultsCounter === 0 ? '0.3' : '1.0'}}>-</div>
          <div className="guests-count" ref={adultsRef}>{adultsCounter}+</div>
          <div className="counter-btn" onClick={() => increment('adults')}>+</div>
        </div>
      </div>
      <div className="guests-dropdown-item">
        <div>
          <div>Children</div>
          <div className="guests-ages-info">Ages 2-12</div>
        </div>
        <div className="guests-counter">
          <div className="counter-btn" onClick={() => decrement('children')} style={{opacity: childrenCounter === 0 ? '0.3' : '1.0'}}>-</div>
          <div className="guests-count" ref={childrenRef}>{childrenCounter}+</div>
          <div className="counter-btn" onClick={() => increment('children')}>+</div>
        </div>
      </div>
      <div className="guests-dropdown-item">
        <div>
          <div>Infants</div>
          <div className="guests-ages-info">Under 2</div>
        </div>
        <div className="guests-counter">
          <div className="counter-btn" onClick={() => decrement('infants')} style={{opacity: infantsCounter === 0 ? '0.3' : '1.0'}}>-</div>
          <div className="guests-count" ref={infantsRef}>{infantsCounter}+</div>
          <div className="counter-btn" onClick={() => increment('infants')}>+</div>
        </div>
      </div>
      <div className="guests-save-btn">Save</div>
    </div>
  )
}

export default GuestsDropdown;