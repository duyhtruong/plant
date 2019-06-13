import plants from '../api/plants';

/*
export const createPlant = () => {
    return async (dispatch, getState) => {
        const response = await plants.post('/plants', {});
        dispatch({ type: CREATE_PLANT, payload: response.data});
    };
};*/

export const getPlants = () => {
    return async (dispatch) => {
        const response = await plants.get('/plant');
        dispatch({ type: 'GET_PLANTS', payload: response.data})
    }
}