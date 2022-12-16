import React from 'react';

// const CreateUser = React.lazy(() => import('../pages/UserManagement/CreateUser/CreateUser'))
// const ViewUser = React.lazy(() => import('../pages/UserManagement/ViewUser/ViewUser'))
// const Login = React.lazy(() => import('../pages/Login/Login'))
import Login from '../pages/Login/Login';



// export const PrivateRoutes = [
//     { path: 'create-user' , Component: CreateUser },
//     { path: 'view-user' , Component: ViewUser },
// ]

export const PublicRoutes = [
    { path: 'login' , Component: Login },
]