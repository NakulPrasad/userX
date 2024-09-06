import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url)
                const jsonData = await res.json();
                setResponse(jsonData)
                setLoading(false)

            } catch (error) {
                console.error(error);
                setError(error)
                toast.error(error)
            } finally {
                setLoading(false);
            }


        }

        fetchData();

    }, [url])

    return [response, loading, error]
}

export default useFetch;