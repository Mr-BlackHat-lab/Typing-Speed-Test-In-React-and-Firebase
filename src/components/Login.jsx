import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="wrapper">
      {/* Login Form */}
      {!isSignUp ? (
        <div className="form-wrapper sign-in">
          <form action="">
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" required />
              <label htmlFor="">Username</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit">Login</button>
            <div className="signUp-link">
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={toggleForm} className="signUpBtn-link">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        // Sign Up Form
        <div className="form-wrapper sign-in">
          <form action="">
            <h2>Sign Up</h2>
            <div className="input-group">
              <input type="text" required />
              <label htmlFor="">Username</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="signUp-link">
              <p>
                Already have an account?{' '}
                <a href="#" onClick={toggleForm} className="signUpBtn-link">
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
