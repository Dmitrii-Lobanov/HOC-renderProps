import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import DeparturesTable from './DeparturesTable';
import ArrivalsTable from './ArrivalsTable';
import chooseLanguage from '../../store/actions/actions';

function FlightScheduleContent({ flights, t }) {
    const [isEmptyArrivalState, setIsEmptyArrivalState] = useState(false);
    const [isEmptyDepartureState, setIsEmptyDepartureState] = useState(false);

    function addArrivalsTable(){
        setIsEmptyArrivalState(!isEmptyArrivalState);        
    }

    function addDeparturesTable(){
        setIsEmptyDepartureState(!isEmptyDepartureState);
    }

    //console.log('Schedule flights: ', flights);
    const departures = flights.filter(t => t.status === 'departure');
    //console.log('!!Departure flights: ', departuresflights);
    const arrivals = flights.filter(t => t.status === 'arrival');
    //console.log('!!Arrivals flights: ', arrivalsflights);

    return (
        <div>
            <div className="btn-flight-container">
            <button 
                    className="btn-flight" 
                    onClick={() => {
                        addDeparturesTable()}}
                >
                    {t('Schedule.departureBtn')}
                </button>
                <button 
                    className="btn-flight" 
                    onClick={() => addArrivalsTable()}
                    >
                    {t('Schedule.arrivalBtn')}
                </button>
            </div>
            { isEmptyDepartureState && !isEmptyArrivalState && <DeparturesTable data={departures}   /> }
            { isEmptyArrivalState && !isEmptyDepartureState && <ArrivalsTable data={arrivals} />  }
        </div> 
    )
}
const mapStateToProps = state => {
    return {
        flights: state.schedule,
        isBackClicked: state.ui.isBackBtnClicked
    }
}

export default connect(
    mapStateToProps,
    chooseLanguage
)(withTranslation()(FlightScheduleContent));