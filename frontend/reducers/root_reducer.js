import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  ui: UIReducer,
  entities: entitiesReducer,
  errors: ErrorsReducer,
});

export default RootReducer;