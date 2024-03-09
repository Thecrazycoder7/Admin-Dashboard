import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className=' flex justify-center items-center h-screen w-screen'>
      <div className='grid place-content-center shadow-md shadow-slate-700 grid-cols-2 h-3/5 w-4/5 overflow-hidden'>
        <div className=' flex justify-center items-center'>
          <form className='w-4/5 text-center'>
            <h1 className='text-center text-indigo-400 text-2xl font-semibold mb-3'>
              Sign in
            </h1>
            <div className='my-2 w-full h-3/5 items-center'>
              <label className='p-1 space-y-4'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-4/5  bg-transparent outline-none mx-2'
                  required
                />
              </label>
              <hr />
              <label className='p-1 space-y-4'>
                <input
                  type='password'
                  name='Password'
                  placeholder='Password'
                  className='w-4/5 bg-transparent outline-none mx-2'
                  required
                />
              </label>

              <hr />
              <label className='p-1 space-y-4'>
                <input
                  type='password'
                  name='Password'
                  placeholder='Confirm Password'
                  className='w-4/5 bg-transparent outline-none mx-2 space-y-2'
                  required
                />
              </label>

              <hr />
              <br />

              <Link className=' text-sm text-red-600' to='/'>
                Forgot password?
              </Link>
              <br />
              <br />

              <Link
                className='m-auto font-semibold border-2 px-4 py-2 bg-indigo-400 rounded-md hover:bg-indigo-600 outline-none  cursor-pointer '
                type='submit'
                to='/'
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>

        <div className='flex justify-center items-center bg-indigo-400 '>
          <div className='w-4/5 h-screen grid place-content-center'>
            <h1 className='text-center text-3xl'>Helo, Friends!</h1>

            <p className='text-center text-slate-800 mb-3'>
              Enter your personal details and start journey with us
            </p>

            <br />
            <br />

            <Link
              className='border-2 w-24 h-9 m-auto rounded-md border-black text-center  cursor-pointer'
              to='/signup'
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
