/*
    Update User Store State
*/

export default (state={}, action) => {
    switch (action.type){
        case 'NEW_USER':
            return  {...state, [action.payload._id]: action.payload};
        case 'LOGIN_USER':
            return {...state, [action.payload._id]: action.payload};
        case 'EDIT_USER':
            return {...state, undefined:{...state.undefined, user: action.payload}};
        case 'LOGOUT_USER':
            return state={};
        case 'DELETE_USER':
            return state={}
        default:
            return state;

    }
}