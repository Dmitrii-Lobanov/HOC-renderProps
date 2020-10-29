import React, { useState } from 'react';
import OptionsContainer from '../../containers/OptionsContainer';
import ScanInput from './ScanInput';
import ScanButton from './ScanButton';
import { connect } from 'react-redux';
import getCurrentUser from '../../store/actions/actions';

function ScanTicket({ passengers, isBackClicked, getCurrentUser }) {
    const [user, setUser] = useState('');
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const [isScanBtnClicked, setIsScanBtnClicked] = useState(false);

    function onScanButton() {
        setIsScanBtnClicked(true);
    }

    function handleChange(e) {
        setUser(e.target.value);        
    }

    function handleSubmit() {
        console.log('Passenger: ', passenger);
        getCurrentUser(user);
        setIsSubmitClicked(true);
    }

    const _ = require('lodash');

    const passenger = _.find(passengers, function(o) {
        return o.ticketNumber === user;
    });

    return (
        <div>
            { isBackClicked && <OptionsContainer /> }
            { !isBackClicked && <><ScanInput 
                                    user={user} 
                                    handleChange={handleChange} 
                                    isSubmitClicked={isSubmitClicked} 
                                    isScanBtnClicked={isScanBtnClicked} 
                                    handleSubmit={handleSubmit}
                                    passenger={passenger}
                                />
                                <ScanButton 
                                    passengers={passengers} 
                                    onScanButton={onScanButton} 
                                    isSubmitClicked={isSubmitClicked} 
                                    isScanBtnClicked={isScanBtnClicked}    
                                /></> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isBackClicked: state.ui.isBackBtnClicked,
        passengers: state.passengers,
        currentUser: state.currentUser
    }
}

export default connect(
    mapStateToProps,
    getCurrentUser
)(ScanTicket);