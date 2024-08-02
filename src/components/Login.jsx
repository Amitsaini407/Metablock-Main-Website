import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border rounded-lg shadow-sm focus-within:ring focus-within:border-blue-300">
              <span className="pl-3">
                <AiOutlineMail className="text-gray-500" />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg shadow-sm focus-within:ring focus-within:border-blue-300">
              <span className="pl-3">
                <AiOutlineLock className="text-gray-500" />
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-500 focus:outline-none"
                onClick={toggleShowPassword}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
