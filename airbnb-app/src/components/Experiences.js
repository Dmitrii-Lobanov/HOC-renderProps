import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "../customHooks/useWindowSize";
import data from '../assets/data/experiences.json';

function Experiences() {
  let windowSize = useWindowSize();
  let experiences = data;

  if(windowSize.width < 1120) {
    experiences = data.slice(0, 3);
  }

  return (
    <div className="row experiences">
      <h2>Top-rated experiences</h2>
      <h5>Book activities led by local hosts on your next trip.</h5>
      <div className="experiences-btns">
        {
          experiences.map(experience => {
            return (
              <div className="experiences-btn" key={experience.id}>
                <img src={require(`../assets/img/${experience.img}`)} alt={experience.generalInfo} />
                <div>
                  <h4>{experience.country.toUpperCase()}</h4>
                  <h4>{experience.generalInfo}</h4>
                  <h4>From ${experience.price}/person</h4>
                  <div><FontAwesomeIcon icon={faStar} color="red" /> {experience.stars} ({experience.votes})</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <a href="#">Show all experiences</a>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

export default Experiences;