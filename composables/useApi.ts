import axios from 'axios'

export const useAPI = () => {
    const config = useRuntimeConfig()

    return axios.create({
        baseURL: config.public.baseUrl,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    });
}