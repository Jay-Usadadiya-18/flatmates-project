import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="first-page">
      <h1>FLATMATE.AI</h1>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
};

export default FirstPage;
