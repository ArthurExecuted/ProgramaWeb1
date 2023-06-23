import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LogInRegister from "./Pages/logInRegister";

const useAuth = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    return authUser;
}

const ProtectedRoutes = () => {
        const isAuth = useAuth();
    return isAuth ? <Outlet/> : <LogInRegister/>;
};

export default ProtectedRoutes;