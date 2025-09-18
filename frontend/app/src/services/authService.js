import {api, authApi } from "./api";

const AuthService = {
    async register(userData) {
        const response = await api.post('/api/auth/registration/', userData);
        return response.data
    },

    async login(credentials) {
        const response = await authApi.post('/api/auth/login/', credentials);
        return response.data
    },

    async logout() {
        try {
            const response = await authApi.post('/api/auth/logout/', null,);
            return response.data
        } catch (error) {
            console.log('erro ao fazer logout', error);
            throw error
        }
    },

    async getUser() {
        try {
            const response = await api.get('/api/auth/user/');
            console.log(response.status);
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log('erro ao receber dados do usuário getUser', error);
            throw error;
            
        }
    },

    async isAuthenticated() {
        try {
            await this.getUser();
            return true
        } catch (error) {
            return false
        }
    },

    async checkAuthStatus() {
        try {
            const response = await api.get('/api/auth/user/', {
                withCredentials: true
            })
            return {
                isAuthenticated: true,
                user: response.data
            };
        } catch (error) {
            return {
                isAuthenticated: false,
                user: null
            };
        }
    },

    async refreshToken() {
        try {
            const response = await authApi.post('/api/auth/token/refresh/', null, {
                withCredentials: true
            });
            return response.data
        } catch (error) {
            console.log('Erro ao renovar o token', error);
            throw error
        }
    }
}

export default AuthService