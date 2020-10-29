import React from 'react';
import BoardingPassContent from './BoardingPassContent';

function BoardingPass({ passenger }) {
	//console.log('Passenger', passenger, typeof passenger);

	return (
		<div >
			{ typeof passenger !== 'undefined' && <BoardingPassContent passenger={passenger} /> }
			{ typeof passenger === 'undefined' && <div className="not-found">Ticket number not found</div>}
		</div>
	)
}

export default BoardingPass;