import React from 'react';
import auth from './auth';
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute({component: Component, ...rest}){
    return (
        <Route 
            {...rest}
            render={
                props => {
                    if(auth.isAuthenticated()){
                        return <Component {...props} />
                    }else{
                        return <Redirect to={{
                            pathname: '/signin',
                            state: {
                                from: props.location
                            }
                        }} />
                    }
                }
            }
        />
    );
}

export default ProtectedRoute;