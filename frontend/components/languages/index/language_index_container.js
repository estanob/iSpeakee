import { connect } from 'react-redux';
import { fetchLanguages } from '../../../actions/language_actions';
import LanguageIndex from './language_index';

const mSTP = state => {
  let languages = state.entities.languages ? Object.values(state.entities.languages) : [];
  return {
    languages: languages,
    session: state.session.id,
  };
};

const mDTP = dispatch => {
  return {
    fetchLanguages: () => dispatch(fetchLanguages()),
  };
};

export default connect(mSTP, mDTP)(LanguageIndex);