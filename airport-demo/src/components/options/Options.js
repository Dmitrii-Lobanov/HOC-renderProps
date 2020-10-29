import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n/i18n';
import ScanTicket from '../scan/ScanTicket';
import Maps from '../maps/Maps';
import Services from '../services/Services';
import FlightScheduleContainer from '../../containers/FlightScheduleContainer';
import chooseLanguage from '../../store/actions/actions';
import isBackBtnClicked from '../../store/actions/actions'; 
import Header from '../header/Header';
import OptionsContent from './OptionsContent';

function Options({ lng, chooseLanguage, isBackClicked, isBackBtnClicked }) {
    const [isScheduleClicked, setIsScheduleClicked] = useState(false);
    const [isScanClicked, setIsScanClicked] = useState(false);
    const [isMapsClicked, setIsMapsClicked] = useState(false);
    const [isServicesClicked, setIsServicesClicked] = useState(false);
    const [currLng, setCurrLang] = useState(lng);

    console.log('Options isBackClicked', isBackClicked);

    useEffect(() => {
        onLanguageChange();
    }, []);

    function onLanguageChange() {
        if(currLng === 'ru') setCurrLang('en');
        if(currLng === 'en') setCurrLang('ru');
        i18n.changeLanguage(lng);
        chooseLanguage(currLng);
    }

    console.log('Options lng:', lng);  
    
    function hasOptionClicked(option) {
        switch(option) {
            case 'flightSchedule':
                setIsScheduleClicked(true);
                setIsScanClicked(false);
                setIsMapsClicked(false);
                setIsServicesClicked(false);
                isBackBtnClicked(false);
                break;
           case 'scanTicket':
                setIsScheduleClicked(false);
                setIsScanClicked(true);
                setIsMapsClicked(false);
                setIsServicesClicked(false);
                isBackBtnClicked(false);
                break;
            case 'maps':
                setIsScheduleClicked(false);
                setIsScanClicked(false);
                setIsMapsClicked(true);
                setIsServicesClicked(false);
                isBackBtnClicked(false);
                break;
            case 'services':
                setIsScheduleClicked(false);
                setIsScanClicked(false);
                setIsMapsClicked(false);
                setIsServicesClicked(true);
                isBackBtnClicked(false);
                break;
            default:
                return;
        }
    }

    return (
        <>
            <Header />
            {isScheduleClicked && !isBackClicked && <FlightScheduleContainer lng={lng} /> }
            {isScanClicked && !isBackClicked && <ScanTicket lng={lng} /> }
            {isMapsClicked && !isBackClicked && <Maps lng={lng} /> }
            {isServicesClicked && !isBackClicked && <Services lng={lng} /> }
            {isBackClicked && <OptionsContent 
                    isBackBtnClicked={isBackBtnClicked} 
                    hasOptionClicked={hasOptionClicked}
            /> }
        </>
    )
}

const mapStateToProps = state => {
    return {
        lng: state.ui.lng,
        isBackClicked: state.ui.isBackBtnClicked
    }
}

const mapDispatchToProps = {
        chooseLanguage,
        isBackBtnClicked
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Options));