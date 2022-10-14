import axios from 'axios';

const baseURL = axios.create({ baseURL: 'https://univinfosdp.herokuapp.com' });
const url = 'https://univinfosdp.herokuapp.com'
API.interceptors.request.use((req) => {
    if (localStorage.getItem('form')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('form')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/apartmentposts');

export const createPost = (newPost) => API.post('/apartmentposts', newPost);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`https://apartmatesearch.herokuapp.com/${id}`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const fetchUsers = () => API.get('/user');