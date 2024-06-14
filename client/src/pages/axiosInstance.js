import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nolcstore.onrender.com', // Replace this with your backend URL
  // You can also add other default configurations here
});

export default instance;