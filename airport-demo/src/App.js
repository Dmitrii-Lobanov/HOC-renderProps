import React, {useState} from 'react';
import { connect } from 'react-redux';
import i18n from '../src/i18n/i18n';
import OptionsContainer from '../src/containers/OptionsContainer';
import chooseLanguage from './store/actions/actions';
import './App.css';

function App(props) {  
    const [isClicked, setIsClicked] = useState(false);

    function hasClicked(lng) {
        setIsClicked(true);
        i18n.changeLanguage(lng);
        props.chooseLanguage(lng);
    }
    
    if(!isClicked) {
        return (
            <div className="choose-lang-container">
                <button onClick={() => hasClicked('ru')} className="btn btn-ru"></button>
                <button onClick={() => hasClicked('en')} className="btn btn-en"></button>
            </div>
        )
    } else {
        return <OptionsContainer />
    }
}

const mapsStateToProps = state => ({
    lng: state.ui.lng
})

export default connect(
    mapsStateToProps,
    chooseLanguage
)(App);