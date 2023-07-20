import axios from "axios";

const requestInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true
})

export const usersAPI = {
    getUsers(page = 1, pageSize = 10) {
        return (
            requestInstance
                .get(`/users?page=${page}&count=${pageSize}`)
                .then(response => response.data)
        );
    },

    followUser(id) {
        return(
            requestInstance
                .post(`/follow/${id}`)
                .then(response => response.data)
        );
    },

    unfollowUser(id) {
        return(
            requestInstance
                .delete(`/follow/${id}`)
                .then(response => response.data)
        );
    },
    
    getProfile(id = 2) {
        return (
            requestInstance
                .get(`/profile/${id}`)
                .then(response => response.data)
        );
    },
};

export const profileAPI = {
    authMe() {
        return (
            requestInstance
                .get('/auth/me')
                .then(response => response.data)
        );
    }
};