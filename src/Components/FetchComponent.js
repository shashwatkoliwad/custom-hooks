// src/components/FetchComponent.js
import React from 'react';
import usePagination from '../Hooks/usePagination';

const FetchComponent = () => {
    const { data, loading, error, nextPage, prevPage } = usePagination('https://jsonplaceholder.typicode.com/posts', 10);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Paginated Posts</h2>
            {data.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <button onClick={nextPage}>next</button>
            <button onClick={prevPage}>prev</button>
        </div>
    );
};

export default FetchComponent;
