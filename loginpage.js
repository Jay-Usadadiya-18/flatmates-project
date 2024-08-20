import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
