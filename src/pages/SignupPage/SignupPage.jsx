import React from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SideBarDesktop, SideBarMobile } from '../../components';

import { useInput } from '../../CustomHooks/CustomHooks';

export const SignupPage = () => {
  const { inputState, inputUpdate } = useInput({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <main className="section-outer grid-center auth-section container outer-grid">
        <form action="#" className="form form-signup">
          <div className="m-bottom-small flex-jc-center">
            <h3 className="m-bottom-small">Sign Up</h3>
          </div>
          <div className="form-group flex">
            <a href="#">
              {/* <i className="font-icon fa fa-brands fs-medium m-right-small fa-google" /> */}
              <AiOutlineGithub className="font-icon  fs-medium m-right-small " />
            </a>
            <a href="#">
              <AiOutlineGoogle className="font-icon  fs-medium m-right-small " />
            </a>
            <a href="#">
              <BsTwitter className="font-icon  fs-medium m-right-small " />
            </a>
          </div>
          <div className="form-group">
            <p className="form-divider">
              <span className="or">or</span>
            </p>
          </div>
          <div className="form-signup-group">
            <input
              id="name"
              type="name"
              name="fullName"
              onChange={inputUpdate}
              className="form-input"
              placeholder="Full Name"
              required
            />
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
          </div>
          <div className="form-signup-group">
            <input
              id="email"
              name="email"
              onChange={inputUpdate}
              type="email"
              className="form-input"
              placeholder="Email Address"
              required
            />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
          </div>
          <div className="form-signup-group">
            <input
              id="signup-password"
              type="password"
              name="password"
              onChange={inputUpdate}
              className="form-input"
              placeholder="Password"
              minLength="4"
              required
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
          <div className="form-signup-group">
            <input
              id="password"
              type="password"
              name="confirmPassword"
              onChange={inputUpdate}
              className="form-input"
              placeholder="Confirm Password"
              minLength="4"
              required
            />
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-squared btn-outline-secondary w-100 spacing-medium weight-600"
            >
              Sign Up
            </button>
          </div>
          <div className="form-footer form-group flex">
            <p className="">
              <span>
                <i className="fa fa-regular fa-face-smile-beam" />
              </span>
              Already have an account
              <Link
                to="/login"
                id="form-signup-link"
                href="#"
                className="link form-footer-link m-left-smallest"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
};
