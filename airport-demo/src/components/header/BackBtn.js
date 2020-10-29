import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import isBackBtnClicked from '../../store/actions/actions';

function BackBtn({ t, isBackBtnClicked }) {
    function hasBackClicked() {
        isBackBtnClicked(true);
    }

    return (
        <button 
            onClick={() => hasBackClicked()} 
            className="btn-back"
        >
            {t('Header.backBtn')}
        </button>
    )
}

const mapStateToProps = state => {
    return {
        isBackClicked: state.ui.isBackBtnClicked
    }
}

export default connect(
    mapStateToProps,
    isBackBtnClicked
)(withTranslation()(BackBtn));