import React from 'react';
import { connect } from 'react-redux';
import OptionsContainer from '../../containers/OptionsContainer';
import ServicesContent from './ServicesContent';

function Services({ isBackClicked }) {

    //console.log('isBackClicked', isBackClicked);

    return(
        isBackClicked
            ? <OptionsContainer />
            : <ServicesContent />
    );
}

const mapStateToProps = state => {
    return {
        isBackClicked: state.ui.isBackBtnClicked
    }
}

export default connect(
    mapStateToProps
)(Services);