import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

function OptionsContent({ t, isBackBtnClicked, hasScheduleClicked, hasScanClicked, hasMapsClicked, hasServicesClicked, settings, hasOptionClicked }) {
    
    return (
        <div className="options-container">
             { settings.flightSchedule.enabled && <button onClick={() => hasOptionClicked('flightSchedule')}>{t('Options.schedule')}</button> }
             { settings.scanTicket.enabled && <button onClick={() => hasOptionClicked('scanTicket')}>{t('Options.scan')}</button> }
             { settings.maps.enabled && <button onClick={() => hasOptionClicked('maps')}>{t('Options.maps')}</button> }
             { settings.services.enabled && <button onClick={() => hasOptionClicked('services')}>{t('Options.services')}</button> }
         </div>       
    )
}

const mapStateToProps = state => {
    return {
        settings: state.ui.settings
    }
}

export default connect(
    mapStateToProps
)(withTranslation()(OptionsContent));