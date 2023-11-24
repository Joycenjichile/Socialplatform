import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Form
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/feed" style={styles.link}>
            Feed
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/post" style={styles.link}>
            Page
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/profile" style={styles.link}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "1rem",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
  },
  li: {
    margin: "0 1rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "bold",
    padding: "0.5rem",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default Navigation;
