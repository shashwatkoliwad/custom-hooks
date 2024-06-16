import React, { useEffect, useState } from 'react';

const usePagination = (url, pageSize) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        if (page < 1) {
            return
        }
        setLoading(true)
        try {
            const response = await fetch(`${url}?_page=${page}&_limit=${pageSize}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setData(result);
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => prev - 1);

    return { loading, data, error, nextPage, prevPage }   

};

export default usePagination;