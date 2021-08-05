import { connect } from 'react-redux';
import { fetchLanguages } from '../../../actions/language_actions';
import LanguageIndex from './language_index';

const mSTP = state => {
  return {
    languages: state.entities.languages,
  };
};

const mDTP = dispatch => {
  return {
    fetchLanguages: () => dispatch(fetchLanguages()),
  };
};

export default connect(mSTP)(mDTP)(LanguageIndex);