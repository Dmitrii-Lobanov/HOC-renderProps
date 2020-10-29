import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const airbnbs = ['Careers', 'News', 'Policies', 'Diversity & Belonging', 'Accessibility', 'Company Details', 'UK Modern Slavery Act'];
  const discovers = ['Trust & Safety', 'Travel Credit', 'Airbnb Citizen', 'Business Travel', 'Things To Do', 'Airbnbmag'];
  const hostings = ['Why Host', 'Hospitality', 'Responsible Hosting', 'Community Centre', 'Host an Experience', 'Open Homes'];
  const supports = ['Help', 'Neighbourhood Support'];

  return (
    <div className="row footer">
      <div className="footer-container">
        <div>
          <h5>Airbnb</h5>
          <div>
            {
              airbnbs.map(airbnb => {
                return (
                  <div key={airbnb}>{airbnb}</div>
                )
              })
            }
          </div>
        </div>
        <div>
          <h5>Discover</h5>
          <div>
            {
              discovers.map(discover => {
                return (
                  <div key={discover}>{discover}</div>
                )
              })
            }
          </div>
        </div>
        <div>
          <h5>Hosting</h5>
          <div>
            {
              hostings.map(hosting => {
                return (
                  <div key={hosting}>{hosting}</div>
                )
              })
            }
          </div>
        </div>
        <div>
          <h5>Support</h5>
          <div>
            {
              supports.map(support => {
                return (
                  <div key={support}>{support}</div>
                )
              })
            }
          </div>
        </div>
      </div>
        <div className="footer-bottom">
          <FontAwesomeIcon icon={['fab', 'airbnb']} size="2x" color="gray" />
          <div className="footer-copyright">&copy; 2020 Airbnb, Inc. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer;