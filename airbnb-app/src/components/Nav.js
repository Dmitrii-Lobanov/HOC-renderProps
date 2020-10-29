import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
  return (
    <div className='navbar'>
      <div className="logo">
        <FontAwesomeIcon icon={['fab', 'airbnb']} size="3x" /> 
      </div>
      <div className="nav-items">
        <button>Language</button>
        <button>Currency</button>
        <button>Host a home</button>
        <button>Host an experience</button>
        <button>Help</button>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </div>
  )
}

export default Nav;