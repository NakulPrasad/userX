import { useState } from "react";
import { toast } from "react-toastify";
export const usePost = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setErr] = useState(null);

    const postRequest = async (data) => {
        setIsLoading(true);
        setErr(null)
        try {
            const res = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) toast.error(res.statusText);
            return res;
        } catch (error) {
            toast.error(error.message);
            setErr(error.message);
        } finally {
            setIsLoading(false);
        }

    };
    return { isLoading, error, postRequest };
};
