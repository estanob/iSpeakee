import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities_reducer';
import LanguagesReducer from './languages_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  languages: LanguagesReducer,
  entities: entitiesReducer,
  errors: ErrorsReducer,
});

export default RootReducer;