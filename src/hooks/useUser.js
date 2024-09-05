import { useEffect, useState } from "react"
import useFetch from "./useFetch"
import URLs from "../utils/URLs"

const useUser = () => {
    const [users, setUsers] = useState([])
    const [response, loading] = useFetch(URLs.getUsers);

    useEffect(() => {
        if (!loading) {
            setUsers(response)
        }
    }, [response, loading])

    return [users, loading]
}
export default useUser