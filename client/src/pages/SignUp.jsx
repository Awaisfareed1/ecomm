import React from 'react'
import Layout from '../components/layouts/Layout';
import sideImg from '../components/assets/loginimg.png'
const SignUp = () => {
  return (
    <Layout>
      <div className='w-full relative h-full pb-5'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <img src={sideImg} className='w-full' alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <form className='w-full'>
              <h2 className="text-4xl text-center mb-4">Create an account</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-black text-md mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder='Name' />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black text-md mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder='Email' />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-black text-md mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder='Password' />
              </div>
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full focus:ring-opacity-50">Sign Up</button>
            </form>
            <div className="mt-4 w-full">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">Sign up with Google</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp;