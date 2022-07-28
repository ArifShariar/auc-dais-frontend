import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

export const RequireAuth = ({ children }) => {
    const useauth = useAuth();

    if (!useauth.user) {
        return <Navigate to='/login'></Navigate>
    }

    return children
}