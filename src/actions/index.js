import plants from '../api/plants';
import users from '../api/users';
import history from '../history';


export const createPlant = (formValues) => {
    return async (dispatch, getState) => {
        const response = await plants.post('/plant', formValues);
        dispatch({ type: 'CREATE_PLANT', payload: response.data});
        history.push('/dashboard');
    };
};

export const getPlants = () => {
    return async (dispatch) => {
        const response = await plants.get('/plant');
        dispatch({ type: 'GET_PLANTS', payload: response.data})
    }
}

export const getPlant = (id) => {
    return async (dispatch) => {
        const response = await plants.get(`/plant/${id}`);
        dispatch({ type: 'GET_PLANT', payload: response.data})
    }
}

export const deletePlant = (id) => {
    return async(dispatch) => {
        const response = await plants.delete(`/plant/${id}`);
        dispatch({ type: 'DELETE_PLANT', payload: response.data._id});
        
    }
}

export const editPlant = (id, formValues) => {
    return async(dispatch) => {
        const response = await plants.patch(`/plant/${id}`, formValues);
        dispatch({ type: 'EDIT_PLANT', payload: response.data});
        history.push('/dashboard');
    }
}

export const newUser = (formValues) =>{
    return async(dispatch) =>{
        const response = await users.post('/users', formValues);
        dispatch({ type: 'NEW_USER', payload: response.data});
        history.push('/dashboard');
    }
}

export const loginUser = (formValues) =>{
    return async(dispatch) =>{
        const response = await users.post('/users/login', formValues);
        dispatch({ type: 'LOGIN_USER', payload: response.data});
        history.push('/dashboard');
    }
}

export const logoutUser = (token) => {
    return async(dispatch) => {
        const headers = {
            'Authorization' :token
        }
        const response = await users.post('/users/logout',null, {headers})
        dispatch ({ type: 'LOGOUT_USER', payload: response.data});
        history.push('/');
    }
}