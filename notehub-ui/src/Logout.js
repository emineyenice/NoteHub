import React from 'react'
import { Redirect } from 'react-router'

// tofo: token'ı sil
function Logout() {
    return <Redirect to="/login" />;
}

export default Logout
