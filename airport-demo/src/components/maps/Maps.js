import React from 'react';
import OptionsContainer from '../../containers/OptionsContainer';
import { connect } from 'react-redux';
import MapsContent from './MapsContent';

function Maps({ isBackClicked }) {
    //console.log('isBackClicked', isBackClicked);

    return(
        isBackClicked
            ? <OptionsContainer />
            : <MapsContent />
    );
}

const mapStateToProps = state => {
    return {
        isBackClicked: state.ui.isBackBtnClicked
    }
}

export default connect(
    mapStateToProps
)(Maps);