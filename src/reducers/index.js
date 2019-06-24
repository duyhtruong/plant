import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import plantReducer from './plantReducer';
import userReducer from './userReducer';
import loginErrorReducer from './loginErrorReducer';

export default combineReducers({
    form: formReducer,
    plants: plantReducer,
    users: userReducer,
    error: loginErrorReducer
});