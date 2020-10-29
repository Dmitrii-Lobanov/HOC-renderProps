import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import BoardingPass from './BoardingPass';

function ScanButton({ t, passengers, onScanButton, isScanBtnClicked, isSubmitClicked }) {
    // const [isScanBtnClicked, setIsScanBtnClicked] = useState(false);
    const _ = require('lodash');

    // console.log('Passengers: ', passengers);
    console.log('onScanButton', onScanButton);

    let passenger = _.find(passengers, function(o) {
        return o.id === "3";
    });
    // console.log('Passenger: ', passenger);

    // function onScanButton() {
    //     setIsScanBtnClicked(true);
    // }

    return (
        <>
            { !isSubmitClicked && !isScanBtnClicked && <div><button className="btn btn-scan" onClick={() => onScanButton()}>{t('ScanTicket.btn')}</button></div> }
            { isScanBtnClicked && <BoardingPass passenger={passenger} /> }
        </>
    )
}

export default withTranslation()(ScanButton);