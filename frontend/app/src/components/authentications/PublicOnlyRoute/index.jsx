import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";

const PublicOnlyRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Carregando...</p>

    if (user) {
        return <Navigate to='/' replace />
    }

    return children
};

export default PublicOnlyRoute