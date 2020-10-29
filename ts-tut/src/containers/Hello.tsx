import Hello from '../components/HelloFunc';
import { incrementEnthusiasm, decrementEnthusiasm } from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//     onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//   }
// }

export default connect(mapStateToProps, { incrementEnthusiasm, decrementEnthusiasm })(Hello);