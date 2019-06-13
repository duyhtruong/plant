import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import plantReducer from './plantReducer';

export default combineReducers({
    form: formReducer,
    plants: plantReducer
});