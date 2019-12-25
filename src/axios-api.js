import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://burger-group-6.firebaseio.com/'
});

export default axiosApi;