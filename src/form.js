import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
    const validUsername = 'Bret';
    const validPassword = '92988-3874';


      // const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (username === validUsername && password === validPassword) {
    console.log('Login successful!');
    setError('');
  } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <button onClick={handleLogin} style={styles.button}>Login</button>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default LoginPage;
