import {
  RECEIVE_ALL_LANGUAGES,
  RECEIVE_LANGUAGE,
} from '../actions/language_actions';

const LanguagesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_LANGUAGES:
      nextState = Object.assign({}, action.languages);
      return nextState;
      // return action.languages;
    case RECEIVE_LANGUAGE:
      nextState[action.language.id] = action.language;
      return nextState;
    default:
      return state;
  };
};

export default LanguagesReducer;