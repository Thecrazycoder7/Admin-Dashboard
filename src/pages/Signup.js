import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className=' flex justify-center items-center h-screen w-screen'>
        <div className='shadow-md shadow-slate-700 grid grid-cols-2 h-3/5 w-4/5 overflow-hidden'>
          <div className='flex justify-center items-center bg-indigo-400'>
            <div className='h-72 w-4/5 grid place-content-center'>
              <h1 className='text-center text-3xl'>Welcome Back!</h1>
              <p className='text-center text-slate-800 mb-3'>
                To keep connected with us please login with your personal info
              </p>
              <Link
                className='border-2 w-24 h-9 m-auto rounded-md border-black text-center cursor-pointer'
                href='/signin'
              >
                Sign In
              </Link>
            </div>
          </div>
          <div className=' flex justify-center items-center'>
            <form className=' h-4/5 w-3/4 text-center'>
              <h1 className='text-center text-indigo-400 text-2xl font-semibold'>
                Create Account
              </h1>
              <div className='my-2 w-full h-3/5 items-center'>
                <label className='p-1 space-y-3 '>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='w-4/5  bg-transparent outline-none mx-2'
                    required
                  />
                </label>
                <hr />
                <label className='p-1 space-y-3 '>
                  <input
                    type='email'
                    name='Email'
                    placeholder='Email'
                    className='w-4/5 bg-transparent outline-none mx-2'
                    required
                  />
                </label>
                <hr />
                <label className='p-1 space-y-3 '>
                  <input
                    type='number'
                    name='Phone Number'
                    placeholder='Phone Number'
                    className='w-4/5 bg-transparent outline-none mx-2'
                    required
                  />
                </label>
                <br />
                <hr />
                <label className='p-1 space-y-3 '>
                  <input
                    type='date'
                    name='Date of Birth'
                    placeholder='Date of Birth'
                    className='w-4/5 bg-transparent outline-none mx-2'
                  />
                </label>
                <br />
                <hr />
                <label className='p-1 space-y-3 '>
                  <input
                    type='password'
                    name='Password'
                    placeholder='Password'
                    className='w-4/5 bg-transparent outline-none mx-2'
                    required
                  />
                </label>
                <hr />
                <br />
                <button
                  className='m-auto font-semibold border-2 px-4 py-2 bg-indigo-400 rounded-md hover:bg-indigo-600 outline-none  cursor-pointer '
                  type='submit'
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
