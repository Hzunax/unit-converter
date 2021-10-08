import React from 'react';
import Temperature from './components/temperature';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Welcome to the Unit converter!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Temperature />
    </div>
  );
}
