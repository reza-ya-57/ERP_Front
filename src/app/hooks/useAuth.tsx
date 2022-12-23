import { useAppSelector } from "../redux/hooks"



export const useAuth = () => {
    const token = sessionStorage.getItem('access')
    return token ? true : false
}