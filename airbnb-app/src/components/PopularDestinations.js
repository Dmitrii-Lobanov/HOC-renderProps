import React from 'react';
import destinations from '../assets/data/popularDestinations.json';

function PopularDestinations() {
  return (
    <div className="row popular-destinations">
      <h2>Popular destinations in the United States</h2>
      <div className="popular-destinations-btns">
        {destinations.map(destination => {
          return (
            <div className="popular-destinations-btn" key={destination.id}>
              <div>{destination.place}</div>
              <div>${destination.price}/night average</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PopularDestinations;