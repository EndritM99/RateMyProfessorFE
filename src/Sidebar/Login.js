import React from 'react';
import './login.css';

export const Login = () => {
  return (
    <div className="new-container">
      <input type="checkbox" id="flip" />
      <div className="new-cover">
        <div className="new-front">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80z" alt="" />
          <div className="new-text">
            <span className="new-text-1">Every new friend is a <br /> new adventure</span>
            <span className="new-text-2">Let's get connected</span>
          </div>
        </div>
        <div className="new-back">
          
          <div className="new-text">
            <span className="new-text-1">Complete miles of journey <br /> with one step</span>
            <span className="new-text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <div className="new-forms">
        <div className="new-form-content">
          <div className="new-login-form">
            <div className="new-title">Login</div>
            <form action="#">
              <div className="new-input-boxes">
                <div className="new-input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="new-input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="new-text"><a href="#">Forgot password?</a></div>
                <div className="new-button new-input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="new-text new-sign-up-text">Don't have an account? <label htmlFor="flip">Signup now</label></div>
              </div>
            </form>
          </div>
          <div className="new-signup-form">
            <div className="new-title">Signup</div>
            <form action="#">
              <div className="new-input-boxes">
                <div className="new-input-box">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="new-input-box">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="new-input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="new-input-box">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Re-Enter your password" required />
                </div>
                <div className="new-button new-input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="new-text new-sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
