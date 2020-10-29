import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import i18n from '../../i18n/i18n';
import chooseLanguage from '../../store/actions/actions';

function LanguageBtn({ lng, chooseLanguage }) {
    const [currLng, setCurrLang] = useState(lng);

    function onLanguageChange() {
        if(currLng === 'ru') setCurrLang('en');
        if(currLng === 'en') setCurrLang('ru');
        i18n.changeLanguage(currLng);
        chooseLanguage(currLng);
    }

    useEffect(() => {
        onLanguageChange();
    }, []);

    //console.log('lng', lng);

    return (
        <button 
            onClick={onLanguageChange} 
            className="btn-lang"
            //styles={{ backgroundImage: `url(../data/images/${currLng}.jpeg)` }}
    
        >
            <img src={require(`../../data/images/${lng}.jpeg`)} alt="lang" />
        </button>
    )
}

const mapStateToProps = state => {
    return {
        lng: state.ui.lng
    }
}

export default connect(
    mapStateToProps,
    chooseLanguage
)(LanguageBtn);