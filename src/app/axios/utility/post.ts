
import axios from "axios";

type NavigateFn = () => void


export const post = async (path: string , body: any , navigateFn: NavigateFn) => {
    try {
        const { data } = await axios.post(path , body)
        return data
    } catch (error: any) {
        if (error.response.status === 404) {
            navigateFn()
        }
    }
}