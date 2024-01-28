export const useApi = () => {

    const {public: {baseURL}} = useRuntimeConfig()

    const getOnServer = async<T> (url: string, config?: any) => await useFetch<T>(baseURL+url, config) 

    return {
        getOnServer
    }
}
