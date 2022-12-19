import { API } from "../apiConfig";

type NavigateFn = () => void



export const get = async (path: string , navigateFn? : NavigateFn) => {
    try {
        const { data } = await API.post(path)
        return data
    } catch (error: any) {
        if (error.response.status === 404) {
            if (navigateFn) navigateFn()
        }
    }
}

export const post = async (path: string , body: any , navigateFn?: NavigateFn) => {
    try {
        const { data } = await API.post(path , body)
        return data
    } catch (error: any) {
        if (error.response.status === 404) {
            if (navigateFn) navigateFn()
        }
    }
}