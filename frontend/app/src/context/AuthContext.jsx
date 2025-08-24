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
            await AuthService.login(credentials);
            const userData = await AuthService.getUser();
            setUser(userData)
            console.log('logado');
        } catch (error) {
            console.log('erro ao requisitar de login no AuthContext.jsx: ', error);
            throw error
        }
    };

    const register = async (userData) => {
        try {
            await AuthService.register(userData);

            const userResponse = await AuthService.getUser();
            setUser(userResponse);
            console.log('registrado e logado automaticamente');
            return true
        } catch (error) {
            console.log('registrado mas, não logado');
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{user, login, register, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
};