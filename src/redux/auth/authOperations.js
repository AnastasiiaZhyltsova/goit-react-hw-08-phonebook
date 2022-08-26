import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('/users/signup', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    
  }
});  
const logIn = createAsyncThunk('/users/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
  
  }
});

const logOut = createAsyncThunk('/users/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    
  }
});

const operations = {
   register,
   logIn,
   logOut,
 
  // fetchCurrentUser,
};
export default operations;