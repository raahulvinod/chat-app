import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const { loading, signup } = useSignup();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, 'Fullname must be at least 2 characters')
        .required('Name Required'),
      username: Yup.string()
        .min(2, 'Username must be at least 3 characters')
        .required('Username Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      gender: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      // Handle form submission
      await signup(values);
    },
  });

  return (
    <div>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-2">
          <div className="text-center">
            <div className="mt-1">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Welcome to ChatApp!
              </h3>
              <p>Create an account to get started!</p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className="space-y-2">
            <div>
              <label className="font-medium text-gray-50" htmlFor="fullname">
                Fullname
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={`w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg ${
                  formik.touched.fullName && formik.errors.fullName
                    ? 'border-red-600'
                    : ''
                }`}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-600 mt-1 text-sm">
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div>
              <label className="font-medium text-gray-50" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className={`w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg ${
                  formik.touched.username && formik.errors.username
                    ? 'border-red-600'
                    : ''
                }`}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-600 mt-1 text-sm">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>
            <div>
              <label className="font-medium text-gray-50" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-600'
                    : ''
                }`}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 mt-1 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className="font-medium text-gray-50"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-orange-600 shadow-sm rounded-lg ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? 'border-red-600'
                    : ''
                }`}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="text-red-600 mt-1 text-sm">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <div>
              <label className="font-medium text-gray-50" htmlFor="gender">
                Gender
              </label>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-radio text-orange-600"
                  />
                  <span className="ml-2 text-gray-50">Male</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    id="gender"
                    name="gender"
                    type="radio"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="form-radio text-orange-600"
                  />
                  <span className="ml-2 text-gray-50">Female</span>
                </label>
              </div>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-red-600 mt-1 text-sm">
                  {formik.errors.gender}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-orange-600 hover:bg-orange-700 active:bg-orange-600 rounded-lg duration-150"
            >
              Sign up
            </button>
          </form>
          <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_40)">
                <path
                  d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                  fill="#4285F4"
                />
                <path
                  d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                  fill="#34A853"
                />
                <path
                  d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                  fill="#FBBC04"
                />
                <path
                  d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-gray-800">Continue with Google</span>
          </button>
          <p className="text-center text-gray-800">
            Already have an account?{' '}
            <Link
              to={'/login'}
              className="font-medium text-orange-700 hover:text-orange-500"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
