import { useState } from 'react';
import { toast } from 'react-toastify';

const useDelete = (url) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    const deleteRequest = async (id) => {
        setIsDeleting(true);
        setError(null);
        try {
            // console.log(`${url}/${id}`);
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
                mode: "cors",
            });
            if (!response.ok) {
                toast.error(response.statusText);
                throw new Error('Network response was not ok');
            }
            return response

        } catch (err) {
            setError(err.message);
            toast.error(error.message);

        } finally {
            setIsDeleting(false);
        }
    };

    return { deleteRequest, isDeleting, error };
};

export default useDelete;
