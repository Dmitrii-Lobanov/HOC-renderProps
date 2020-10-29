import React from 'react';
import '../../styles/BoardingPass.scss';

function BoardingPassContent({ passenger }) {
    return (
        <div className="boarding-pass-container">
            <div className="ticket">
	<div className="ticket-top">
		
		<div className="ticket-header">
			<div className="head-logo">
				aeroflot
			</div>
			<div className="head-flight">
				{passenger.flight}
			</div>
		</div>

		
		<div className="ticket-body">
			
			<div className="locations">
				<div className="loc-depart">
					{passenger.departureCity}
					<h1>{passenger.departureAirportCode}</h1>
					{passenger.departureTime}
				</div>
				<div className="loc-direction">
					<div className="arrow"></div>
				</div>
				<div className="loc-arrive">
					{passenger.destinationCity}
					<h1>{passenger.arrivalAirportCode}</h1>
					{passenger.arrivalTime}
				</div>
			</div>
			

			<div className="body-info">
				
				<div className="info">
					<div className="info-name">
						Passenger
						<h2>{passenger.title} {passenger.firstName} {passenger.lastName}</h2>
					</div>
					<div className="info-seat">
						Seat
						<h2>{passenger.seat}</h2>
					</div>
				</div>
				
				<div className="flight">
					<div className="flight-info">
						Flight
						<h2>{passenger.flight}</h2>
					</div>
					<div className="flight-depart-date">
						Depart
						<h2>{passenger.departureDate}</h2>
					</div>
					<div className="flight-depart-time">
						Depart
						<h2>{passenger.departureTime}</h2>
					</div>
				</div>
				
			</div>

		</div>
	</div>

	<div className="ticket-bottom">
		<div className="bottom-info">
			
			<div className="depart">
				<div className="depart-terminal">
					Terminal
					<h2>{passenger.terminal}</h2>
				</div>
				<div className="depart-gate">
					Gate
					<h2>{passenger.gate}</h2>
				</div>
				<div className="depart-boarding">
					Boarding
					<h2>{passenger.boardingTime}</h2>
				</div>
			</div>
			
			<div className="depart-barcode"></div>
					</div>
	</div>
</div>
        </div>
    )
}

export default BoardingPassContent;