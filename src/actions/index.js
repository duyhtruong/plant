import plants from '../api/plants';
import users from '../api/users';
import history from '../history';


export const createPlant = (formValues, token, hideModal) => {
    return async (dispatch, getState) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        
        try{
        const response = await plants.post('/plant', formValues, {headers});
        dispatch({ type: 'CREATE_PLANT', payload: response.data});
        hideModal()

        }catch(e){
            throw new Error(e.response);
            
        }
    };
};

export const getPlants = (token) => {
    return async (dispatch) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        const response = await plants.get('/plant', {headers});
        dispatch({ type: 'GET_PLANTS', payload: response.data})
    }
}

export const getPlant = (id, token) => {
    return async (dispatch) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        const response = await plants.get(`/plant/${id}`, {headers});
        dispatch({ type: 'GET_PLANT', payload: response.data})
    }
}

export const deletePlant = (id, token) => {
    return async(dispatch) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        const response = await plants.delete(`/plant/${id}`, {headers});
        dispatch({ type: 'DELETE_PLANT', payload: response.data._id});
        
    }
}

export const editPlant = (id, formValues, token) => {
    return async(dispatch) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        const response = await plants.patch(`/plant/${id}`, formValues,{headers});
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
        try{
        const response = await users.post('/users/login', formValues);
        dispatch({ type: 'LOGIN_USER', payload: response.data});
        history.push('/dashboard');
        }catch(e){
            console.log(e.response.data.error)
            dispatch({ type: 'LOGIN_ERROR', payload: e.response.data.error});
        }
    }
}

export const logoutUser = (token) => {
    return async(dispatch) => {
        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        const response = await users.post('/users/logout',null, {headers})
        dispatch ({ type: 'LOGOUT_USER', payload: response.data});
        history.push('/');
    }
}