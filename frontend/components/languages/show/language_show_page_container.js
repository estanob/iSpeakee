import { connect } from 'react-redux';
import { fetchLanguage } from '../../../actions/language_actions';
import { fetchAllUsers } from '../../../actions/profile_actions';
import LanguageShowPage from './language_show_page';

const mSTP = (state, ownProps) => {
  let language = state.entities.languages ? state.entities.languages[ownProps.match.params.id] : {};
  let users = state.entities.users ? Object.values(state.entities.users) : [];
  return {
    language: language,
    users: users,
  }
}

const mDTP = (dispatch, ownProps)=> {
  return {
    fetchLanguage: () => dispatch(fetchLanguage(parseInt(ownProps.match.params.id))),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mSTP, mDTP)(LanguageShowPage);