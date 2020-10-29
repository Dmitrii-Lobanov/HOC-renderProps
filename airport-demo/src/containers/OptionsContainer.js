import { connect } from 'react-redux';
import Options from '../components/options/Options';
import chooseLanguage from '../store/actions/actions';

const mapStateToProps = state => {
    return {
        lng: state.ui.lng
    }
}

export default connect(
    mapStateToProps,
    chooseLanguage
)(Options);