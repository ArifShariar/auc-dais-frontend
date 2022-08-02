import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const login = (usertoken, user_id) => {
        localStorage.setItem('user', usertoken);
        localStorage.setItem('user_id', user_id);
    }

    const logout = () => {
        localStorage.clear();
    }

    function isLogin(){
        return localStorage.getItem('user')
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}