import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import getCurrentUser from '../../store/actions/actions';
import BoardingPass from './BoardingPass';

function ScanInput({ t, user, passengers, handleChange, isSubmitClicked, isScanBtnClicked, handleSubmit, passenger }) {
    // const [user, setUser] = useState('');
    // const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    // const _ = require('lodash');

    // function handleChange(e) {
    //     setUser(e.target.value);        
    // }

    // console.log('User', user);
    // const passenger = _.find(passengers, function(o) {
    //     return o.ticketNumber === user;
    // });
    
    // function handleSubmit() {
    //     console.log('Passenger: ', passenger);
    //     getCurrentUser(user);
    //     setIsSubmitClicked(true);
    // }

    // console.log('Passenger: ', passenger);

    return (
        <>
            { !isSubmitClicked && !isScanBtnClicked &&
            <div className="user-input">
            <form>
                <input type="text" placeholder={t('UserInput.placeholder')} onChange={handleChange} />
                <input type="button" value={t('Submit.btn')} onClick={() => handleSubmit()} />
                <p>For testing purposes you can input: 0123456778</p>
            </form>
        </div> }
            { isSubmitClicked && <BoardingPass passenger={passenger} /> }
        </>
    )
}

const mapStateToProps = state => {
    return {
        passengers: state.passengers,
        currentUser: state.passengers.currentUser
    }
}

export default connect(
    mapStateToProps,
    getCurrentUser
)(withTranslation()(ScanInput));