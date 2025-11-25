import { createContext, useContext, useEffect, useState, useCallback } from "react"; 
import AuthService from "../services/authService";
const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        AuthService.getUser()
            .then((data) => setUser(data))
            .catch(() => setUser(null))
            .finally(() => setLoading(false)) 
    }, []);

    const logout = useCallback(async () => {
        try {
            await AuthService.logout()
        } catch (error) {
            console.log('Logout Falhou, mas continua');
        } finally {
            setUser(null)
        }  
    }, []);

    useEffect(() => {
        const handleAuthExpired = () => {
            logout();
        };

        window.addEventListener('auth-expired', handleAuthExpired);
        return () => window.removeEventListener('auth-expired', handleAuthExpired);
    }, [logout]);

    const login = async (credentials) => {
        try {
            const responseData = await AuthService.login(credentials)
            setUser(responseData.user)
            console.log('Logado com sucesso!!!', responseData.user);
        } catch (error) {
            console.log('erro ao requisitar de login no AuthContext.jsx: ', error);
            throw error
        }
    };

    const passwordChange = async (passwords) => {
        try {
            await AuthService.changePassword(passwords);
            console.log('Senha alterada com sucesso');
            return 200;
        } catch (error) {
            console.log('Erro ao alterar a senha', error);
            throw error;
        }
    }

    const register = async (userData) => {
        try {
            const request = await AuthService.register(userData);
            if (request.data.status == 201) {
                const loginCredentials = { email: userData.email, password: userData.password1 };
                const request_login = await login(loginCredentials)
                if (request_login.data.status == 200) {
                    alert('Registrado e logado')
                } else {
                    alert('Registrado faça login')
                }
            }
        } catch (error) {
            console.log('Ocorreu um erro', error);
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{user, login, register, logout, passwordChange, loading}}>
            {children}
        </AuthContext.Provider>
    );
};