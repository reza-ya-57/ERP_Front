
import axios from "axios";

type NavigateFn = () => void



export const get = async (path: string, navigateFn: NavigateFn) => {
    try {
        const { data } = await axios.get(path)
        return data
    } catch (error: any) {
        if (error.response.status === 404) {
            navigateFn()
        }
    }
}

