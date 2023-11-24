import React, { useState } from 'react';

const Page = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
      setNotifications([...notifications, `New comment: ${newComment}`]);
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
    setNotifications([...notifications, 'Someone liked the page']);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Page</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Comments</h2>
        <ul style={styles.list}>
          {comments.map((comment, index) => (
            <li key={index} style={styles.comment}>
              {comment}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={styles.input}
        />
        <button onClick={addComment} style={styles.button}>
          Add Comment
        </button>
      </div>

      {/* Likes Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Likes</h2>
        <p style={styles.likes}>{likes} likes</p>
        <button onClick={handleLike} style={styles.button}>
          Like
        </button>
      </div>

      {/* Notifications Section */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Notifications</h2>
        <ul style={styles.list}>
          {notifications.map((notification, index) => (
            <li key={index} style={styles.notification}>
              {notification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  section: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '18px',
    color: '#555',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  comment: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
  },
  input: {
    padding: '10px',
    marginRight: '10px',
    width: '60%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  likes: {
    color: '#27ae60',
  },
  notification: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
  },
};

export default Page;
