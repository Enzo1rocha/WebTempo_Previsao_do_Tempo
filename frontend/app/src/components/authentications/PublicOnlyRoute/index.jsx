import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const PublicOnlyRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Carregando...</p>

    if (user) {
        return <Navigate to='/user/profile' replace />
    }

    return children
};

export default PublicOnlyRoute