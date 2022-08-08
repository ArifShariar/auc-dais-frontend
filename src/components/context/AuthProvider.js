import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const login = (response) => {
        localStorage.setItem('user', response.data.token);
        localStorage.setItem('user_id', response.data.user.id);
        localStorage.setItem('user_name', response.data.user.firstName + " " + response.data.user.lastName)
    }

    const logout = () => {
        localStorage.clear();
    }

    function getName() {
        return localStorage.getItem('user_name')
    }

    function isLogin(){
        return localStorage.getItem('user')
    }

    return (
        <AuthContext.Provider value={{isLogin, login, logout, getName}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}