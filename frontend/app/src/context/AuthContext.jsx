import { createContext, useContext, useEffect, useState } from "react";
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

    const login = async (credentials) => {
        await AuthService.login(credentials);
        const userData = await AuthService.getUser();
        setUser(userData)
        console.log('logado');
        
    };

    const logout = async () => {
        await AuthService.logout();
        setUser(null);
        console.log('logout');        
    };

    return (
        <AuthContext.Provider value={{user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
};