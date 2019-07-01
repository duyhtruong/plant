/*
    Axios instance for plant API endpoint
*/

import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL
})