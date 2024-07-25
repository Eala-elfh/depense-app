import axios from 'axios';

const API_URL = 'http://localhost:8080/user';

export const getAllUsers = () => {
    return axios.get(`${API_URL}/all`);
};

export const signUp = (user) => {
    return axios.post(`${API_URL}/add`, user);
};

export const getUserById = (userId) => {
    return axios.get(`${API_URL}/findBy/${userId}`);
};

export const updateUser = (user) => {
    return axios.put(`${API_URL}/update`, user);
};

export const deleteUser = (userId) => {
    return axios.delete(`${API_URL}/delete/${userId}`);
};

export const login= async (user) =>{
    try {
        const response = await axios.post(`${API_URL}/login`, user);
        return response;
      } catch (error) {
        throw error;
      }
};