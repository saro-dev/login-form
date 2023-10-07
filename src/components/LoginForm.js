import React, { useState } from 'react';

function ErrorMessage({ error }) {
  return (
    error && <div className="error-message">{error}</div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // example email & pass 
    if (email === 'example@gmail.com' && password === 'password') {
      setIsSubmitted(true);
      setError('');
    } else {
      setError('Invalid email or password');
      setIsSubmitted(false);
    }
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ErrorMessage error={error} />
      {isSubmitted && <div className="success-message">Login successful!</div>}
    </div>
  );
}

export default LoginForm;
