import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = ({ user, onPaywall }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(0, 20));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePaywall = () => {
    if (user && user.postsViewed >= 20) {
      onPaywall();
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Feed</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3 style={{ marginBottom: '10px' }}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <button
        style={{
          display: 'block',
          margin: '0 auto',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handlePaywall}
      >
        View More
      </button>
    </div>
  );
};

export default Feed;
