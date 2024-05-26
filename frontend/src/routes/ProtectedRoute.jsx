import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { token, role } = useContext(authContext);

    if (!token || !allowedRoles.includes(role)) {
        return <Navigate to="/connexion" replace={true} />;
    }

    return children;
};

export default ProtectedRoute;
