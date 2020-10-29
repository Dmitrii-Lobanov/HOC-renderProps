import React from 'react';
import { connect } from 'react-redux';
import OptionsContainer from '../../containers/OptionsContainer';
import FlightScheduleContent from './FlightScheduleContent';

function FlightSchedule({ isBackClicked }){
    return(
        isBackClicked
            ? <OptionsContainer />
            : <FlightScheduleContent />
    );
}
    
const mapStateToProps = state => {
    return {
        isBackClicked: state.ui.isBackBtnClicked
    }
}

export default connect(
    mapStateToProps
)(FlightSchedule);