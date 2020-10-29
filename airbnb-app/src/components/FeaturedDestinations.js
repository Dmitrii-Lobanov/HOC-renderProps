import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "../customHooks/useWindowSize";
import data from '../assets/data/featuredDestinations.json';

function FeaturedDestinations() {
  const windowSize = useWindowSize();
  let destinations = data;

  if(windowSize.width < 1120) {
    destinations = data.slice(0, 2);
  }

  return (
    <div className="row featured-destinations">
      <h2>Featured Airbnb Plus destinations</h2>
      <h5>Browse beautiful places to stay with all the comforts of home, plus more.</h5>
      <div className="featured-destinations-btns">
        {
          destinations.map(destination => {
            return (
              <div key={destination.id} className="featured-destinations-btn">
                <img src={require(`../assets/img/${destination.img}`)} alt={destination.info} />
                <div className="featured-destinations-place">{destination.place.toUpperCase()}</div>
                <div className="featured-destinations-stays">{destination.stays}+ VERIFIED STAYS</div>
                <div>{destination.info}</div>
              </div>
            )
          })
        }
      </div>
      <a href="#">Show more Airbnb Plus destinations</a>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

export default FeaturedDestinations;