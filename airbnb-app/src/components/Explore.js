import React from 'react';

function Explore() {
  const explores = ['stays', 'experiences', 'adventures'];

  return (
    <div className="row explore">
      <h2>Explore Airbnb</h2>
      <div className="explore-container">
        {
          explores.map(explore => {
            return (
              <div className="explore-btn" key={explore}>
                <img src={require(`../assets/img/${explore}.jpg`)} alt={explore} />
                <div>{explore.charAt(0).toUpperCase() + explore.slice(1)}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Explore;