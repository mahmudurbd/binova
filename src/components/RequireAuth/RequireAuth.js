import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({children}) => {
    const {user, isLoading} = useAuth();
    let location = useLocation();

    if(isLoading){
      return <Spinner animation="border" variant="warning" />
    }

    if (!user.email) {
       
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;