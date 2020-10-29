import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useOnclickOutside } from "../customHooks/useOnclickOutside";
import GuestsDropdown from './GuestsDropdown';

function FastBooking() {
  const [showGuests, setShowGuests] = useState(false);
  const [adultsCounter, setAdultsCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [infantsCounter, setInfantsCounter] = useState(0);
  
  const ref = useRef();
  useOnclickOutside(ref, () => setShowGuests(false));

  console.log('showGuests', showGuests);

  function handleGuestsClick(event) {
    event.preventDefault();
    setShowGuests(!showGuests);
    if(showGuests) {
      document.addEventListener('click', () => {
        document.addEventListener('click', closeDropdown);
      })
    }
  }

  function closeDropdown() {
    document.removeEventListener('click', closeDropdown);
    setShowGuests(false);
  }

  function increment(option) {
    switch(option) {
      case 'adults':
        return setAdultsCounter(adultsCounter + 1);
        break;
      case 'children':
        return setChildrenCounter(childrenCounter + 1);
        break;
      case 'infants':
        return setInfantsCounter(infantsCounter + 1);
        break;
      default:
        return;
    }
  }

  function decrement(option) {
    switch(option) {
      case 'adults':
        if (adultsCounter > 0) return setAdultsCounter(adultsCounter - 1);
        break;
      case 'children':
        if(childrenCounter > 0) return setChildrenCounter(childrenCounter - 1);
        break;
      case 'infants':
        if(infantsCounter > 0) return setInfantsCounter(infantsCounter - 1);
        break;
      default:
        return;
    }
  }

  function guestsHandler() {
    if(adultsCounter === 0) {
      return 'Guests';
    } else if((adultsCounter + childrenCounter) === 1 && infantsCounter === 0) {
      return `1 guest`;
    } else if((adultsCounter + childrenCounter) === 1 && infantsCounter === 1) {
      return `1 guest, 1 infant`;
    } else if((adultsCounter + childrenCounter) === 1 && infantsCounter > 1) {
      return `1 guest, ${infantsCounter} infants`;
    } else if((adultsCounter + childrenCounter) > 1 && infantsCounter === 1) {
      return `${adultsCounter + childrenCounter} guests, 1 infant`;
    } else if((adultsCounter + childrenCounter) > 1 && infantsCounter > 1) {
      return `${adultsCounter + childrenCounter} guests, ${infantsCounter} infants`;
    }
  }

  return (
    <div className="fast-booking">
      <h1>Book unique places to stay and things to do.</h1>
      <form>
        <label htmlFor="where">
          <div className="fast-booking-label">WHERE</div>
          <input type="text" placeholder="Anywhere" name="where" className="fast-booking-input" />
        </label>
        <label htmlFor="check-in" className="fast-booking-check">
          <div className="fast-booking-label">CHECK-IN</div>
          <input type="text" placeholder="dd/mm/yyyy" name="check-in" className="fast-booking-input" />
        </label>
        <label htmlFor="checkout" className="fast-booking-check">
          <div className="fast-booking-label">CHECKOUT</div>
          <input type="text" placeholder="dd/mm/yyyy" name="checkout" className="fast-booking-input" />
        </label>
        <label htmlFor="guests">
          <div className="fast-booking-label">GUESTS</div>
        </label>
        <div className="guests-container">
          <button className="fast-booking-guests" onClick={handleGuestsClick}>
            <span>{guestsHandler()}</span>
            <span className="guests-chevron">
              { showGuests ? <FontAwesomeIcon icon={faAngleUp} size="1x" /> : <FontAwesomeIcon icon={faAngleDown} /> }
            </span>
            {
            showGuests ? 
              <div ref={ref}>
                <GuestsDropdown 
                  adultsCounter={adultsCounter} 
                  childrenCounter={childrenCounter}
                  infantsCounter={infantsCounter}
                  increment={increment}
                  decrement={decrement}
                />
              </div> : 
              null
            }
          </button>
        </div>
        <button className="fast-booking-search">Search</button>
      </form>
    </div>
  )
}

export default FastBooking;