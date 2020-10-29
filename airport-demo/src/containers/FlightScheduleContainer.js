import { connect } from 'react-redux';
import FlightSchedule from '../components/schedule/FlightSchedule';
import { getVisibleFlights } from '../store/reducers/schedule';
import setScheduleFilter from '../store/actions/actions';

const mapStateToProps = state => {
    return { 
        dataFiltered: getVisibleFlights(state.schedule, state.scheduleFilter),
        data: state.schedule
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(setScheduleFilter(ownProps.filter)),
        getVisibleFlights
    }
} 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlightSchedule)