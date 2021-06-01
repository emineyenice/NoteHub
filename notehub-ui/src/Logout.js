import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import AppContext from './AppContext';


function Logout() {
    const ctx = useContext(AppContext);
    ctx.setIsLoggedIn(false);
    ctx.setToken(null);
    
    //todo : loalStorage'den token ısil
    return <Redirect to="/login?logout=success" />;
}

export default Logout
