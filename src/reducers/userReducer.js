
export default (state={}, action) => {
    switch (action.type){
        case 'NEW_USER':
            return  {...state, [action.payload._id]: action.payload};
        case 'LOGIN_USER':
            return {...state, [action.payload._id]: action.payload};
        case 'LOGOUT_USER':
            return state={};
        default:
            return state;

    }
}