
export default (state={}, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {...state, error: action.payload};
        default:
            return state;
    }
}