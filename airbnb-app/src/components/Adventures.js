import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "../customHooks/useWindowSize";
import data from '../assets/data/adventures.json';

function Adventures() {
  const windowSize = useWindowSize();
  let adventures = data;

  if(windowSize.width < 1120) {
    adventures = data.slice(0, 3);
  }

  return (
    <div className="row adventures">
      <h2>Introducing Airbnb Adventures</h2>
      <h5>Multi-day trips led by local experts – activities, meals, and stays included.
</h5>
      <div className="adventure-btns">
        {
          adventures.map(adventure => {
            return (
              <div className="adventure-btn" key={adventure.id}>
                <img src={require(`../assets/img/${adventure.img}`)} alt={adventure.activity} />
                <h4>{ adventure.country.toUpperCase() }</h4>
                <h4>{ adventure.activity }</h4>
                <h4>From ${adventure.price}/person - ${adventure.days} days</h4>
              </div>
            )
          })
        }
      </div>
      <a href="#">Show all adventures</a>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

export default Adventures;