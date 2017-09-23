import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

//Reducers just reduce data
//Reducers produce application state

//When our app boots up, it evaluates this statement and runs the LibraryReducer
//Once.
//An object with a key of libraries and value of whatever comes from the reducer
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
