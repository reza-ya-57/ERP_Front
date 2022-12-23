import { Navigate, Route } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export const PrivateRoute = (props: any) => {
    const isAuthenticate = useAuth()

    if (!isAuthenticate) {
        return <Navigate to='/login' />
    }

    return props.children
}