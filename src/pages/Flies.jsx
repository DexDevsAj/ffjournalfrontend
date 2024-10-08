import React, { useState } from 'react'
import { useEffect } from 'react'

const FetchApi = () => {
    //prod--
    //const BASE_URL = "https://ajdevelopment.azurewebsites.net/flies";

    //dev 
    //const BASE_URL = https://localhost:7057/Flies;

    // State to hold fetched data
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        // Fetch data using async/await with the Fetch API
        const fetchUsingAsyncAwaitWithFetchApi = async () => {
            const response = await fetch("https://ajdevelopment.azurewebsites.net/Flies");
            const data = await response.json();
            setPosts(data);
        };

        // Trigger fetching method on component mount
        fetchUsingAsyncAwaitWithFetchApi();
        return () => abortController.abort();

    }, []); // Run the effect only once on component mount

    //return (
    //    <div className="container">
    //        <h1>Fetching Data in React</h1>

    //        {/* Display the fetched data */}
    //        {posts.map((post) => (
    //            <div className="post" key={post.id}>
    //                <h3>{post.name}</h3>
    //                <p>{post.body}</p>
    //            </div>
    //        ))}
    //    </div>
    //);

    return (
        
        <div className='flies'>
            <h1 className='mb-4 text 2xl'>Data Fetching in React</h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.name} | {post.size} | {post.color} | { post.beaded}</li>
                })}
            </ul>
        </div>
    )
};

export default FetchApi;

