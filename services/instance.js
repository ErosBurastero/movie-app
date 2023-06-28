import axios from 'axios'

axios.defaults.baseURL = '/'

axios.interceptors.response.use(function(response) {

    return response;
}, );

export default axios