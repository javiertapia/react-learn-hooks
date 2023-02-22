import { useEffect, useState } from "react"

export function useFetch (url: string) {

    const [state, setState] = useState({
        data: null,
        isLoading: true, 
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state, 
            isLoading: true
        })

        try {
            const data = await fetch(url).then(r => r.json())
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        } catch (error: any) {
            setState({
                data: null,
                isLoading: false,
                hasError: error.message
            })
        }

        
    }

    const onRefreshFetch = () => {
        getFetch()
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        onRefreshFetch,
    }
}