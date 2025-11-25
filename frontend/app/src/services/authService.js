import {api, authApi } from "./api";

const AuthService = {
    async register(userData) {
        const response = await api.post('/api/auth/registration/', userData);
        return response
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

    async changePassword(passwords) {
        try {
            const response = await authApi.post('/api/auth/password/change/', passwords);
            return response.data;
        } catch (error) {
            console.error('Erro ao mudar a senha:', error);
            throw error;
        }
    },

    async passwordReset(email) {
        try {
            const response = await api.post('/api/auth/password/reset/', email);
            return response
        } catch (error) {
            console.error('Erro ao enviar o email para reset de senha async passwordReset ', error);
        }
    },

    async passwordResetConfirm(payload) {
        try {
            const request = await api.post(`/api/auth/password/reset/confirm/${payload.uid}/${payload.token}/`, payload)

            if (request.status == 200) {
                console.log('Senha alterada com sucesso');
                return request
            } else {
                console.log('Problema ao alterar a senha, tente denovo');
            }
        } catch (error) {
            console.error('Erro ao alterar a senha async passwordResetConfirm ', error);
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