import React from 'react';
import useFetch from './useFetch';
import '../App.css';

const Posts = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Posts</h1>
      {data.map((post) => (
      <ul className="posts-list">
          <li className="post" key={post.id}>
            <span className=''>{post.id}</span>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
      </ul>
      ))}
    </div>
  );
};

export default Posts;