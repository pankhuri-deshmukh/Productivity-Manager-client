import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);

 const increment = () => {
    setCount(count + 0.5);
 };

 const decrement = () => {
    setCount(count - 0.5);
 };

 

 return (
 <div style={styles.container}>
    <h1 style={styles.h1}>Current Count: {count}</h1>
    <button style={styles.button} onClick={increment}>Increment</button>
    <button style={styles.button} onClick={decrement}>Decrement</button>
 </div>
    
 );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '5px',
  },
  h1: {
    fontSize: '24px',
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  hover: {
    backgroundColor: '#45a049',
  },
};

export default Counter;