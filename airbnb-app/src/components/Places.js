import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "../customHooks/useWindowSize";
import data from '../assets/data/places.json';
import Superhost from './Superhost';

function Places() {
  const windowSize = useWindowSize();
  let places = data;

  if(windowSize.width < 1120) {
    places = data.slice(0, 6);
  }

  return (
    <div className="row places">
      <h2>Places to stay around the world</h2>
      <div className="places-btns">
        {
          places.map(place => {
            return (
              <div key={place.id} className="places-btn">
                <img src={require(`../assets/img/${place.img}`)} alt={place.generalInfo} />
                <div>
                  <div className="places-basic-info">
                    <span>{place.superhost ? <Superhost /> : null}</span>
                    <span>{place.country}</span>
                    <span><FontAwesomeIcon icon={faStar} color="red" /> {place.stars}</span>
                  </div>
                  <div className="places-general-info">
                    {place.generalInfo}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <a href="#">Show(2000+)</a>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

export default Places;