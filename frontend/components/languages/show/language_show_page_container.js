import { connect } from 'react-redux';
import LanguageShowPage from './language_show_page';

const mSTP = state => {
  let language = state.entities.language ? state.entities.language : {};
}

const mDTP = dispatch => {
  return {

  };
};

export default connect(mSTP, mDTP)(LanguageShowPage);