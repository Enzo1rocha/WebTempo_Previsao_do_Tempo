import api from "./api";

const AuthService = {
    async register(userData) {
        const response = await api.post('api/auth/registration/', userData);
        return response.data
    },

    async login(credentials) {
        const response = await api.post('api/auth/login/', credentials, {
            withCredentials: true
        });
        return response.data
    },

    async logout() {
        try {
            const response = await api.post('api/auth/logout/', null, {
            withCredentials: true,
            });
            return response.data
        } catch (error) {
            console.log('erro ao fazer logout', error);
        }
    },

    async getUser() {
        try {
            const response = await api.get('api/auth/user/', {
                withCredentials: true
            });
            console.log(response.status);
            console.log(response.data);
            return response.data;
            
        } catch (error) {
            console.log('erro ao receber dados do usuário getUser', error);
            throw error;
            
        }
    }
}

export default AuthService