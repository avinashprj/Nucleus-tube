import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SideBarDesktop, SideBarMobile } from '../../components';
import { useInput } from '../../CustomHooks/CustomHooks';

export const LoginPage = () => {
  const { inputState, inputUpdate } = useInput({
    email: '',
    password: '',
  });

  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <main className="section-outer grid-center auth-section container outer-grid">
        <form action="#" className="form form-signin">
          <div className="m-bottom-small flex-jc-center">
            <h3 className="m-bottom-small">Login</h3>
          </div>
          <div className="form-group">
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Email Address"
              onChange={inputUpdate}
              required
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>
          <div className="form-group">
            <input
              name="password"
              id="password"
              type="password"
              className="form-input"
              placeholder="Password"
              minLength="4"
              onChange={inputUpdate}
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <div className="form-group">
            <div className="form-radio-group flex-nav-wrap">
              <input
                id="large"
                type="checkbox"
                className="form-radio-input"
                name="size"
              />
              <label htmlFor="large" className="form-radio-label">
                <span className="form-radio-button"> </span>
                Remember Me
              </label>
              <Link to="/" className="form-forgot">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600 m-top-medium"
            >
              Guest Login
            </button>
          </div>
          <div className="form-footer form-group flex">
            <p className="">
              <span>
                <i className="fa fa-regular fa-face-frown" />
              </span>
              Don't have an account ?
              <Link
                to="/signup"
                id="form-signin-link"
                href="#"
                className="link form-footer-link m-left-smallest"
              >
                Create one
              </Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
};
