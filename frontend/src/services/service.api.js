import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    timeout: 10000,
});
