import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data } = await axios.get('/api/user/profile');
      setUser(data);
    };

    const fetchUserPosts = async () => {
      const { data } = await axios.get('/api/posts/user');
      setPosts(data);
    };

    fetchUserProfile();
    fetchUserPosts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.profile}>
        <h2>User Profile</h2>
        <p style={styles.info}>Username: {user.username}</p>
        <p style={styles.info}>Email: {user.email}</p>
        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div style={styles.posts}>
        <h2>My Posts</h2>
        <ul style={styles.postList}>
          {posts.map((post) => (
            <li key={post.id} style={styles.postItem}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  profile: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  info: {
    margin: '5px 0',
  },
  logoutButton: {
    padding: '1rem',
    background: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  posts: {
    textAlign: 'center',
  },
  postList: {
    listStyle: 'none',
    padding: '0',
  },
  postItem: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '1rem',
    margin: '1rem 0',
  },
};

export default Profile;
