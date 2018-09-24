import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { decrementEnthusiasm, EnthusiasmAction, incrementEnthusiasm } from '../actions/';
import Hello from '../components/Hello';
import { IStoreState } from '../types/index';

export function mapStateToProps ( { enthusiasmLevel, languageName }: IStoreState ) {
  return { enthusiasmLevel, name: languageName };
}

export function mapDispatchToProps ( dispatch: Dispatch<EnthusiasmAction> ) {
  return {
    onDecrement: () => dispatch( decrementEnthusiasm() ),
    onIncrement: () => dispatch( incrementEnthusiasm() )
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( Hello );